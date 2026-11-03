# BJJ migration notes

Brian approved the dedicated blog page on November 3, 2026, with Map as the default view and the opening copy below. The blog is now the home of the application and graph data.

## Selected integration

Add **BJJ Flowchart** as the fourth menu item, after About Me, Benchmarks, and Blog, pointing to `/bjj/`. Use a dedicated Hugo page with the usual sidebar and typography, but widen this page to accommodate the app. Keep the other pages at their current reading width.

Brian selected **Map** as the default landing view. Preserve selection, pan/zoom, fit, clear, and navigation to Explorer. Direct `/bjj/#explorer` links still open Explorer.

Opening copy approved by Brian:

> This is me learning and building in public.

## Options

| Approach | Benefits | Costs | Assessment |
| --- | --- | --- | --- |
| Dedicated Hugo page | Fits the site's navigation, fonts, and theme; one page scroll; direct `/bjj/#map` and `/bjj/#explorer` links | Needs scoped CSS and a small page template | Selected integration |
| Normal blog page with an iframe | Strong CSS isolation; preserves the original application almost unchanged | The blog's narrow column squeezes the graph; iframe height and nested scrolling complicate phones; outer URL does not automatically follow the embedded view | Quick proof of concept, weaker everyday experience |
| Standalone full-screen app linked from the menu | Maximum canvas space; fewest changes to the original app | Visitors leave the blog's navigation and visual context; needs a separate way back | Useful if graph editing or graph size eventually becomes the main focus |

No new framework, backend, or application build step is needed.

## Application layout

- `content/bjj.md`: published page, fourth menu entry, and introductory copy.
- `layouts/bjj/single.html`: app structure and dependency loading, in the original script order.
- `assets/css/bjj.css`: imported styles scoped to `.bjj-app`, adapted to the site's fonts and palette; wider layout only on this page.
- `static/bjj/data.js`: byte-for-byte snapshot of `/Users/brian/src/BJJ/prototype/data.js` at commit `7ea5682`, with 18 positions and 20 techniques.
- `static/bjj/app.js`: application behavior, with scoped tab queries/theme reads, Map as the default, and hash-change handling.
- The base template adds a page-specific body class; the head partial loads the additional stylesheet only on this page.

Both `/bjj/#map` and `/bjj/#explorer` work. Relative app asset paths are adapted to the blog route. The Google Fonts dependency is removed in favor of the blog's system fonts. The three pinned CDN graph dependencies are retained: Cytoscape.js 3.30.2, dagre 0.8.5, and cytoscape-dagre 2.5.0.

The page and fourth navigation entry are included in normal Hugo builds.

## Ownership

This repository is the single home of the published application and graph data. Future class additions update `static/bjj/data.js` here, retaining the current schema and provenance. Keep technique content in this file; neither view should hard-code it.

Preserve IDs, qualifications, provenance, and uncertainty. SLX is canonical for ashi. Shallow K guard and K guard remain distinct. Empty outgoing lists mean nothing recorded yet; unspecified finishes remain unspecified. Source dates record when material was learned or reviewed. Source titles remain visible even without a URL.

Brian explicitly requested moving the entire old `/Users/brian/src/BJJ` folder, including its personal Obsidian vault, to macOS Trash after verifying the deployment. That folder is no longer an active application source. No cross-repository build or synchronization is required.

The pinned graph libraries load from CDN with SHA-384 Subresource Integrity hashes and anonymous CORS, so browsers reject content that does not match the reviewed versions. They can be stored locally with their licenses if that dependency becomes undesirable.

Do not copy the vault, daily notes, configuration directories, backups, or browser artifacts. The migration imported only the four approved application assets. Approved source titles already present in `data.js`, including daily-note filenames, remain visible.

## Verification

Passed in Chromium at 1440px desktop and 390px phone width, in both light and dark mode:

- All 18 positions and 20 techniques exist in Map and Explorer.
- Every position's incoming/outgoing connection counts match the data.
- Shared technique cards preserve triggers, mechanics, counters, source counts, titles (including sources without URLs), and external source URLs.
- Search, no-match state, route links, path trail and returning along the trail work.
- Map-to-Explorer and Explorer-to-Map navigation, direct view hashes, and hash changes work.
- Actual canvas node clicks, programmatic selections for every position/technique, pan/zoom, fit, and clear work.
- Both themes apply and neither width overflows horizontally.
- `data.js` matches its source byte-for-byte; no private vault files were read or imported.

Draft and production Hugo builds, JavaScript syntax validation, and `git diff --check` pass. No JavaScript errors were observed. Cytoscape emits its existing warnings about wheel sensitivity and label-based node dimensions. Safari and physical-device touch testing were not performed.

A separate agent reviewed the migration for DOM injection, unsafe source links, dependency loading, and private-content exposure. The only actionable finding was missing integrity checks on inherited CDN scripts; SHA-384 integrity and anonymous CORS were added and verified in-browser. The review reported no unresolved actionable findings. Browser artifacts are excluded from the application commit.
