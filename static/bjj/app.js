(() => {
  const D = window.BJJ_DATA;
  const ROLES = {
    guard: { label: "Guard" },
    dominant: { label: "Dominant" },
    defensive: { label: "Bad spot" },
    submission: { label: "Submission" }
  };
  const ROLE_ORDER = ["guard", "dominant", "defensive", "submission"];

  const pos = Object.fromEntries(D.positions.map(p => [p.id, p]));
  const tech = Object.fromEntries(D.techniques.map(t => [t.id, t]));
  const outOf = id => D.techniques.filter(t => t.from === id);
  const into = id => D.techniques.filter(t => t.to === id);

  const $ = id => document.getElementById(id);
  const css = name => getComputedStyle(document.querySelector(".bjj-app")).getPropertyValue(name).trim();
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmtDate = d => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const posLabel = p => p.name + (p.qualifier ? ` (${p.qualifier})` : "");
  const roleOf = p => ROLES[p.role] || ROLES.guard;
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;

  // ---------- Data checks: surface mistakes in data.js instead of failing silently ----------
  function checkData() {
    const problems = [];
    const seen = new Set();
    for (const p of D.positions) {
      if (seen.has(p.id)) problems.push(`Duplicate position id "${p.id}"`);
      seen.add(p.id);
      if (!ROLES[p.role]) problems.push(`Position "${p.id}" has unknown role "${p.role}"`);
    }
    for (const t of D.techniques) {
      if (!pos[t.from]) problems.push(`Technique "${t.id}" starts at unknown position "${t.from}"`);
      if (!pos[t.to]) problems.push(`Technique "${t.id}" ends at unknown position "${t.to}"`);
    }
    if (problems.length) {
      $("problems").innerHTML = `<strong>data.js has problems:</strong><ul>${problems.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`;
      $("problems").hidden = false;
    }
    D.techniques = D.techniques.filter(t => pos[t.from] && pos[t.to]);
  }

  function renderStats() {
    const dates = D.techniques.flatMap(t => t.sources.map(s => s.date)).sort();
    const last = dates.length ? ` · updated ${fmtDate(dates[dates.length - 1])}` : "";
    $("stats").textContent = `${plural(D.positions.length, "position")} · ${plural(D.techniques.length, "technique")}${last}`;
  }

  // ---------- Technique card, shared by both views ----------
  function techCard(t) {
    const src = t.sources.map(s => {
      const link = /^https?:\/\//i.test(s.url || "")
        ? `<a class="source-link" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title || "View source")}</a>`
        : s.title ? `<span class="source-title">${esc(s.title)}</span>` : "";
      return `<span class="chip">${esc(s.type)} · ${fmtDate(s.date)}</span>${link}`;
    }).join("");
    const when = t.trigger ? `<div class="when"><b>When</b>${esc(t.trigger)}</div>` : "";
    const details = t.details ? `<div>${esc(t.details)}</div>` : "";
    const counters = t.counters.map(c => `<div class="counter">
        <span class="lbl">If they counter</span><span>${esc(c.opponent)}</span>
        <span><b>Answer:</b> ${esc(c.response)}</span></div>`).join("");
    const nothing = !t.trigger && !t.details && !t.counters.length
      ? `<p class="empty-note">No details logged yet.</p>` : "";
    return `<article class="tech">
      <div class="tech-top"><span class="tech-name">${esc(t.name)}</span><span class="chip">${esc(t.kind)}</span></div>
      <div class="route">${posLink(t.from)}<span aria-label="to">→</span>${posLink(t.to)}</div>
      ${when}${details}${counters}${nothing}
      <div class="sources">${src}</div>
    </article>`;
  }
  const posLink = id => `<button class="pos-link" data-pos="${esc(id)}">${esc(posLabel(pos[id]))}</button>`;

  // ---------- Tabs ----------
  let view = "map";
  function setView(v) {
    view = v;
    for (const b of document.querySelectorAll(".bjj-app [role=tab]")) b.setAttribute("aria-selected", String(b.dataset.view === v));
    $("view-map").hidden = v !== "map";
    $("view-explorer").hidden = v !== "explorer";
    try { history.replaceState(null, "", "#" + v); } catch (_) {}
    if (v === "map" && cy) { cy.resize(); }
  }
  document.querySelector(".bjj-app .tabs").addEventListener("click", e => {
    const b = e.target.closest("[data-view]");
    if (b) setView(b.dataset.view);
  });

  // ---------- Map ----------
  let cy;
  function mapStyle() {
    const font = "IBM Plex Sans, system-ui, sans-serif";
    return [
      { selector: "node", style: {
        "shape": "round-rectangle", "width": "label", "height": "label", "padding": "12px",
        "label": "data(label)", "text-wrap": "wrap", "text-max-width": 140,
        "text-valign": "center", "text-halign": "center",
        "font-family": font, "font-size": 13, "font-weight": 600, "color": css("--fg"),
        "background-color": css("--surface"), "border-width": 2, "border-color": css("--muted")
      }},
      { selector: "node:selected", style: { "border-width": 4, "background-color": css("--sunk") } },
      { selector: "edge", style: {
        "curve-style": "bezier", "width": 2, "line-color": css("--muted"), "target-arrow-color": css("--muted"),
        "target-arrow-shape": "triangle", "arrow-scale": 1.1,
        "label": "data(label)", "font-family": font, "font-size": 11, "text-wrap": "wrap", "color": css("--fg"),
        "text-background-color": css("--surface"), "text-background-opacity": 1, "text-background-padding": "3px",
        "text-background-shape": "round-rectangle"
      }},
      { selector: "edge:selected", style: { "width": 4 } },
      { selector: ".faded", style: { "opacity": 0.18 } }
    ];
  }
  function mapElements() {
    return [
      ...D.positions.map(p => ({ data: {
        id: p.id, label: p.name + (p.qualifier ? `\n(${p.qualifier})` : "")
      }})),
      ...D.techniques.map(t => ({ data: {
        id: t.id, source: t.from, target: t.to,
        label: t.name + (t.counters.length ? `\n${plural(t.counters.length, "counter")} to watch` : "")
      }}))
    ];
  }
  function initMap() {
    if (!window.cytoscape) {
      $("map-panel").innerHTML = `<p class="empty-note">The graph library didn't load (are you offline?), so the map can't draw. The Explorer tab still works.</p>`;
      return;
    }
    if (window.cytoscapeDagre) cytoscape.use(cytoscapeDagre);
    cy = cytoscape({
      container: $("cy"), elements: mapElements(), style: mapStyle(),
      layout: window.cytoscapeDagre
        ? { name: "dagre", rankDir: "LR", nodeSep: 50, rankSep: 180, padding: 60 }
        : { name: "breadthfirst", padding: 60 },
      wheelSensitivity: 0.3, minZoom: 0.2, maxZoom: 2.5
    });
    if (cy.zoom() > 1.3) { cy.zoom(1.3); cy.center(); }
    cy.on("tap", "node", e => selectPosition(e.target.id()));
    cy.on("tap", "edge", e => selectTechnique(e.target.id()));
    cy.on("tap", e => { if (e.target === cy) clearSelection(); });
    $("map-fit").addEventListener("click", () => cy.animate({ fit: { padding: 60 } }, { duration: 250 }));
    $("map-clear").addEventListener("click", clearSelection);
  }
  function focusOn(collection) {
    cy.elements().addClass("faded");
    collection.removeClass("faded");
  }
  function selectPosition(id) {
    if (!cy) return;
    const n = cy.getElementById(id);
    cy.elements().unselect(); n.select();
    focusOn(n.closedNeighborhood());
    renderPositionPanel(id);
  }
  function selectTechnique(id) {
    if (!cy) return;
    const e = cy.getElementById(id);
    cy.elements().unselect(); e.select();
    focusOn(e.union(e.connectedNodes()));
    $("map-panel").innerHTML = `<span class="eyebrow">Technique</span>${techCard(tech[id])}`;
  }
  function clearSelection() {
    if (!cy) return;
    cy.elements().unselect().removeClass("faded");
    renderOverviewPanel();
  }
  function edgeRow(t, otherId, dir) {
    const warn = t.counters.length ? `<span class="warn">${plural(t.counters.length, "counter")}</span>` : "";
    return `<button class="edge-row" data-tech="${esc(t.id)}">
      <span>${esc(t.name)}<small>${dir} ${esc(posLabel(pos[otherId]))}</small></span>${warn}</button>`;
  }
  function renderPositionPanel(id) {
    const p = pos[id], outs = outOf(id), ins = into(id);
    const group = (title, rows, empty) => `<div class="panel-group"><span class="eyebrow">${title}</span>${
      rows.length ? rows.join("") : `<p class="empty-note">${empty}</p>`}</div>`;
    $("map-panel").innerHTML = `
      <div><span class="chip">${esc(roleOf(p).label)}</span></div>
      <h2>${esc(p.name)}</h2>
      ${p.qualifier ? `<div class="route">${esc(p.qualifier)}</div>` : ""}
      ${group("From here", outs.map(t => edgeRow(t, t.to, "to")), "Nothing logged from here yet.")}
      ${group("Ways in", ins.map(t => edgeRow(t, t.from, "from")), "No logged way to get here yet.")}
      <div class="panel-actions"><button class="btn" data-explore="${esc(id)}">Open in Explorer</button></div>`;
  }
  function renderOverviewPanel() {
    const deadEnds = D.positions.filter(p => p.role !== "submission" && !outOf(p.id).length);
    $("map-panel").innerHTML = `
      <span class="eyebrow">Overview</span>
      <p style="margin:0">Click a position to see what you have from it, or an arrow to see how the technique works. Drag to pan, scroll or pinch to zoom.</p>
      <div class="panel-group"><span class="eyebrow">Nothing logged from here yet</span>${
        deadEnds.length ? deadEnds.map(p => `<button class="edge-row" data-pos="${esc(p.id)}"><span>${esc(posLabel(p))}</span></button>`).join("")
          : `<p class="empty-note">Every position has at least one way out.</p>`}</div>`;
  }
  $("map-panel").addEventListener("click", e => {
    const t = e.target.closest("[data-tech]");
    if (t) return selectTechnique(t.dataset.tech);
    const x = e.target.closest("[data-explore]");
    if (x) { explore(x.dataset.explore, true); setView("explorer"); return; }
    const p = e.target.closest("[data-pos]");
    if (p) selectPosition(p.dataset.pos);
  });

  // ---------- Explorer ----------
  let current = null;
  let trail = [];
  function explore(id, reset) {
    if (reset) trail = [];
    const i = trail.indexOf(id);
    trail = i >= 0 ? trail.slice(0, i + 1) : [...trail, id];
    current = id;
    renderExList();
    renderExMain();
  }
  function renderExList() {
    const q = $("ex-search").value.trim().toLowerCase();
    const match = p => !q || posLabel(p).toLowerCase().includes(q);
    const groups = ROLE_ORDER.map(r => {
      const items = D.positions.filter(p => p.role === r && match(p)).sort((a, b) => posLabel(a).localeCompare(posLabel(b)));
      if (!items.length) return "";
      return `<div class="ex-group"><span class="eyebrow">${ROLES[r].label}</span>${items.map(p => `
        <button class="ex-item" data-pick="${esc(p.id)}" aria-current="${p.id === current}">
          ${esc(posLabel(p))}
          <span class="count" title="Ways out">${outOf(p.id).length}</span></button>`).join("")}</div>`;
    }).join("");
    $("ex-list").innerHTML = groups || `<p class="empty-note">No positions match.</p>`;
  }
  function renderExMain() {
    const p = pos[current], outs = outOf(current), ins = into(current);
    const trailHtml = trail.length > 1
      ? `<nav class="trail" aria-label="Path so far">${trail.map((id, i) => i === trail.length - 1
          ? `<span>${esc(pos[id].name)}</span>` : `${posLink(id)}<span aria-hidden="true">→</span>`).join("")}</nav>`
      : "";
    const col = (title, list, empty) => `<div><span class="eyebrow">${title}</span>${
      list.length ? list.map(techCard).join("") : `<p class="empty-note">${empty}</p>`}</div>`;
    $("ex-main").innerHTML = `${trailHtml}
      <div class="ex-title">
        <h2>${esc(p.name)}</h2>
        ${p.qualifier ? `<span class="chip">${esc(p.qualifier)}</span>` : ""}
        <span class="chip">${esc(roleOf(p).label)}</span>
      </div>
      <div class="ex-cols">
        ${col("From here", outs, "Nothing logged from here yet.")}
        ${col("Ways in", ins, "No logged way to get here yet.")}
      </div>
      <div><button class="btn" data-show-map="${esc(current)}">Show on map</button></div>`;
  }
  $("ex-search").addEventListener("input", renderExList);
  $("ex-list").addEventListener("click", e => {
    const b = e.target.closest("[data-pick]");
    if (b) explore(b.dataset.pick, true);
  });
  $("ex-main").addEventListener("click", e => {
    const m = e.target.closest("[data-show-map]");
    if (m) { setView("map"); selectPosition(m.dataset.showMap); return; }
    const p = e.target.closest("[data-pos]");
    if (p) { explore(p.dataset.pos, false); window.scrollTo({ top: 0, behavior: "smooth" }); }
  });

  // ---------- Theme changes: Cytoscape can't read CSS variables, so re-apply colors ----------
  function restyleMap() {
    if (!cy) return;
    cy.style(mapStyle());
  }
  matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", restyleMap);
  new MutationObserver(restyleMap).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  // ---------- Boot ----------
  checkData();
  renderStats();
  initMap();
  renderOverviewPanel();
  const firstWithMoves = D.positions.find(p => outOf(p.id).length) || D.positions[0];
  if (firstWithMoves) explore(firstWithMoves.id, true);
  const viewFromHash = () => setView(location.hash === "#explorer" ? "explorer" : "map");
  window.addEventListener("hashchange", viewFromHash);
  viewFromHash();
})();
