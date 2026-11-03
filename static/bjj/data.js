// The flowchart's data: the single source of truth. Views never hard-code techniques.
// Only add Brian's recorded learning or additions he requests and sources verify.
//
// positions[]  — nodes, always from Brian's point of view
//   id         kebab-case, unique
//   name       display name
//   qualifier  optional, distinguishes variants that are separate positions
//              (e.g. De La Riva "opponent standing" vs. "opponent kneeling")
//   role       guard      — on bottom, playing guard
//              dominant   — top or back, in control
//              defensive  — a bad spot to escape from (e.g. bottom side control)
//              submission — a submission attack or finish (qualify entries explicitly)
//
// techniques[] — edges
//   id, from, to   position ids
//   kind           transition | sweep | pass | back take | escape | submission
//   name           short label shown on the arrow
//   trigger        when to use it ("" if not described)
//   details        how it works ("" if not described)
//   counters[]     { opponent: what they do to stop it, response: how to beat/prevent that }
//   sources[]      { type: class | video | article | note, date: YYYY-MM-DD, title?, url? }
//                  date = learned/reviewed date, not necessarily publication date
//                  note = Brian's reported learning when the source medium is unspecified
// Terminology: SLX is canonical; Brian confirmed ashi and SLX mean the same
// position in these notes on 2026-11-03. Shallow K guard remains distinct from K guard.
window.BJJ_DATA = {
  positions: [
    { id: "closed-guard", name: "Closed Guard", role: "guard" },
    { id: "k-guard", name: "K Guard", role: "guard" },
    { id: "dlr-standing", name: "De La Riva", qualifier: "opponent standing", role: "guard" },
    { id: "dlr-seated", name: "De La Riva", qualifier: "opponent seated", role: "guard" },
    { id: "shallow-k-guard", name: "Shallow K Guard", role: "guard" },
    { id: "slx", name: "SLX", role: "guard" },
    { id: "x-guard", name: "X Guard", role: "guard" },
    { id: "butterfly-guard", name: "Butterfly Guard", role: "guard" },
    { id: "mount", name: "Mount", role: "dominant" },
    { id: "bottom-mount", name: "Mount", qualifier: "bottom", role: "defensive" },
    { id: "top-position", name: "Top Position", qualifier: "sweep finish unspecified", role: "dominant" },
    { id: "post-double-leg-top", name: "Top Position", qualifier: "after double leg; chest over sideways knees", role: "dominant" },
    { id: "post-trap-roll-top", name: "Top Position", qualifier: "trap-and-roll finish unspecified", role: "dominant" },
    { id: "back-control", name: "Back Control", role: "dominant" },
    { id: "americana", name: "Americana", role: "submission" },
    { id: "rear-naked-choke", name: "Rear Naked Choke", role: "submission" },
    { id: "triangle", name: "Triangle", qualifier: "entry", role: "submission" },
    { id: "straight-ankle-lock", name: "Straight Ankle Lock", qualifier: "entry", role: "submission" }
  ],
  techniques: [
    {
      id: "slx-to-x-guard",
      from: "slx",
      to: "x-guard",
      kind: "transition",
      name: "Switch to X guard",
      trigger: "Opponent peels or strips your SLX",
      details: "Drop the inside leg and then the outside leg. Wrap your arm around their leg the other way, shelf the leg, and grab the knee. Push their leg out with your legs (August 31). Grab behind the knee to give your other arm time to shelf the leg (September 16). SLX is the canonical term for the position called ashi in the September notes.",
      counters: [],
      sources: [
        { type: "class", date: "2026-08-31", title: "daily/2026-08-31.md — BHJJ: SLX and X" },
        { type: "video", date: "2026-09-15", title: "daily/2026-09-15.md — John Danaher: The Best Way For Older Athletes To Enter Into X Guard; URL not recorded" },
        { type: "class", date: "2026-09-16", title: "daily/2026-09-16.md — BHJJ: SLX and X transitions" }
      ]
    },
    {
      id: "x-guard-to-slx",
      from: "x-guard",
      to: "slx",
      kind: "transition",
      name: "Switch to SLX",
      trigger: "You are losing X guard",
      details: "Switch to SLX as you lose X guard. Keep your knee between their legs while transitioning to SLX so they cannot pass easily. Further switching mechanics were not recorded.",
      counters: [],
      sources: [
        { type: "class", date: "2026-08-31", title: "daily/2026-08-31.md — BHJJ: SLX and X" },
        { type: "class", date: "2026-09-16", title: "daily/2026-09-16.md — BHJJ: SLX and X transitions" }
      ]
    },
    {
      id: "x-guard-backward-sweep",
      from: "x-guard",
      to: "top-position",
      kind: "sweep",
      name: "Sweep backward",
      trigger: "",
      details: "Drop one leg to their ankle and sweep them backward. Keep hold of their legs and be patient when getting up. This pairs with pushing them forward to take the back. The exact top finishing position was not recorded.",
      counters: [],
      sources: [{ type: "class", date: "2026-08-31", title: "daily/2026-08-31.md — BHJJ: X-guard attacks" }]
    },
    {
      id: "back-control-to-mount",
      from: "back-control",
      to: "mount",
      kind: "transition",
      name: "Remount",
      trigger: "Opponent rolls toward you out of back control and you lose a hook",
      details: "Wrap the other leg over their body and use your heel as a spur to pull yourself up. Kick the back leg back to release. Hug the neck with your inside hand and build onto your outside elbow. Alternate moving with holding the upper-body hug; take your time rather than rushing because the upper-body control feels insufficient.",
      counters: [],
      sources: [{ type: "class", date: "2026-09-25", title: "daily/2026-09-25.md — Gracie: remount" }]
    },
    {
      id: "mount-to-americana",
      from: "mount",
      to: "americana",
      kind: "submission",
      name: "Americana",
      trigger: "",
      details: "Use the opposite arm on their wrist, rather than their head, and keep your elbow near their head. Use the opposite-side hook as your second arm goes in. Paint more than you lift. The note says the attack is unlikely when their arms are lower. If you lose the Americana, abandon the attack and prioritize maintaining mount.",
      counters: [{
        opponent: "Reaches around to pull you as your second arm goes in",
        response: "Switch hooks"
      }],
      sources: [{ type: "class", date: "2026-09-17", title: "daily/2026-09-17.md — GC: Americana" }]
    },
    {
      id: "back-control-to-rear-naked-choke",
      from: "back-control",
      to: "rear-naked-choke",
      kind: "submission",
      name: "Rear naked choke",
      trigger: "",
      details: "Back control is the inferred starting position; the note names the choke without explicitly naming its origin. Align your elbow with their chin and hold your bicep. Make a fist with the other hand and put your head on the bicep-hold side to lock that hand in place. Hide the tucked hand rather than pushing their head forward. After the wrap, use the recorded arrow entry: bring your other arm over the other hand instead of in front of the opponent where it can be grabbed. Breathe and relax; the note emphasizes strength from your back. An alternative is a gable grip with the elbow tucked.",
      counters: [],
      sources: [{ type: "note", date: "2026-09-26", title: "daily/2026-09-26.md — rear naked choke; source medium unspecified" }]
    },
    {
      id: "butterfly-double-leg-wrestle-up",
      from: "butterfly-guard",
      to: "post-double-leg-top",
      kind: "sweep",
      name: "Double-leg wrestle-up",
      trigger: "Opponent cuts angles or comes around your butterfly guard",
      details: "Wrestle up to a double leg as they cut angles. After completing the double leg, apply chest pressure to their sideways knees, with one hand on their belt and the other stuffing their knees. You can settle here before continuing. The double-leg grips and finishing mechanics were not recorded. The September 21 note supplies the general butterfly wrestle-up cue; the double leg and subsequent top position are from September 24.",
      counters: [],
      sources: [
        { type: "class", date: "2026-09-21", title: "daily/2026-09-21.md — BHJJ: butterfly wrestle-ups" },
        { type: "class", date: "2026-09-24", title: "daily/2026-09-24.md — BHJJ: double-leg wrestle-up and top follow-ups" }
      ]
    },
    {
      id: "post-double-leg-to-mount",
      from: "post-double-leg-top",
      to: "mount",
      kind: "transition",
      name: "Step into mount",
      trigger: "There is space in front of their waist",
      details: "From chest pressure over their sideways knees after the double leg, put your knee in front of their waist and step into mount.",
      counters: [],
      sources: [{ type: "class", date: "2026-09-24", title: "daily/2026-09-24.md — BHJJ: top follow-up to mount" }]
    },
    {
      id: "post-double-leg-to-back",
      from: "post-double-leg-top",
      to: "back-control",
      kind: "back take",
      name: "Take the back as they curl up",
      trigger: "Opponent curls up under your post-double-leg pressure",
      details: "Grab behind their collar and grip their pants, then take the back. Further back-take mechanics and the exact final control were not recorded.",
      counters: [],
      sources: [{ type: "class", date: "2026-09-24", title: "daily/2026-09-24.md — BHJJ: top follow-up to the back" }]
    },
    {
      id: "bottom-mount-trap-and-roll",
      from: "bottom-mount",
      to: "post-trap-roll-top",
      kind: "escape",
      name: "Trap and roll",
      trigger: "",
      details: "Use your opposite arm to grab their wrist with a monkey grip and your same-side arm to grab their elbow with a standard grip. Trap their same-side leg with your leg, then bridge and roll to that side. Keep your elbow by your side to stop their knees advancing and keep them at your hips; wiggle up to regain that alignment if needed. Your elbow can push on their knee to feed the foot. Keep your opposite-side foot inside and your trapping knee out at about 45 degrees. The exact top position and resulting guard or control were not recorded.",
      counters: [],
      sources: [{ type: "class", date: "2026-09-01", title: "daily/2026-09-01.md — GC: Lesson 1, Trap & Roll Escape" }]
    },
    {
      id: "k-guard-to-straight-ankle-lock",
      from: "k-guard",
      to: "straight-ankle-lock",
      kind: "submission",
      name: "Straight ankle lock",
      trigger: "",
      details: "First knock the opponent down by chopping at the back of their leg with your non-K-guard leg, then enter the straight ankle lock. The leg entanglement, grips, and finishing mechanics were not specified.",
      counters: [],
      sources: [{ type: "class", date: "2026-11-03", title: "Last class — reported November 3; class date unspecified" }]
    },
    {
      id: "closed-guard-pendulum-sweep",
      from: "closed-guard",
      to: "mount",
      kind: "sweep",
      name: "Pendulum sweep",
      trigger: "",
      details: "Rotate your hips out and grab the far tricep (class note). The standard completed sweep finishes in mount; this destination is supported by the linked instructional, rather than a confirmed recollection of the class finish.",
      counters: [],
      sources: [
        { type: "class", date: "2026-11-01" },
        {
          type: "video", date: "2026-11-03",
          title: "Marcelo Garcia — Pendulum Sweep from Closed Guard, Mount",
          url: "https://www.mginaction.com/VideoDetails.aspx?VideoId=19236"
        }
      ]
    },
    {
      id: "closed-guard-head-grip-to-triangle",
      from: "closed-guard",
      to: "triangle",
      kind: "submission",
      name: "Triangle from head grip",
      trigger: "Opponent postures out of the head grip in your pendulum-sweep setup",
      details: "Use the pendulum-sweep setup, but grab the back of the opponent's head instead of the far tricep. When they posture out, use the space to enter the triangle. Finishing mechanics not recorded.",
      counters: [],
      sources: [{ type: "class", date: "2026-11-01" }]
    },
    {
      id: "closed-guard-hip-bump-sweep",
      from: "closed-guard",
      to: "top-position",
      kind: "sweep",
      name: "Hip bump sweep",
      trigger: "Opponent leans far back",
      details: "Instructor recommends entering K guard instead when the opponent leans far back. The exact sweep finishing position was not specified.",
      counters: [],
      sources: [{ type: "class", date: "2026-11-01" }]
    },
    {
      id: "x-guard-to-back",
      from: "x-guard",
      to: "back-control",
      kind: "back take",
      name: "Wrestle up to the back",
      trigger: "After knocking the opponent forward from X guard",
      details: "Bump their butt to push them forward (August 31 class note), then wrestle up to take the back (November 1 reported learning).",
      counters: [],
      sources: [
        { type: "class", date: "2026-08-31", title: "daily/2026-08-31.md — BHJJ: X-guard attacks" },
        { type: "note", date: "2026-11-01" }
      ]
    },
    {
      id: "dlr-standing-to-seated",
      from: "dlr-standing",
      to: "dlr-seated",
      kind: "transition",
      name: "Knock down to seated",
      trigger: "From De La Riva against a standing opponent",
      details: "Keep ankle control and the DLR hook; angle off and push their waist with your free leg to knock them onto their butt. This is the berimbolo setup, not yet a completed sweep to top position.",
      counters: [],
      sources: [{
        type: "article", date: "2026-10-30",
        title: "Stephan Kesting — The 3 Steps of Berimbolo",
        url: "https://www.grapplearts.com/the-3-steps-of-berimbolo/"
      }]
    },
    {
      id: "dlr-seated-to-back",
      from: "dlr-seated",
      to: "back-control",
      kind: "back take",
      name: "Berimbolo to the back",
      trigger: "Opponent is seated and your DLR hook remains in place",
      details: "Invert and spin close to their hip, then expose and take the back. This records the basic back-take finish; the outcome depends on their reaction.",
      counters: [],
      sources: [{
        type: "article", date: "2026-10-30",
        title: "Stephan Kesting — The 3 Steps of Berimbolo",
        url: "https://www.grapplearts.com/the-3-steps-of-berimbolo/"
      }]
    },
    {
      id: "dlr-to-shallow-k",
      from: "dlr-standing",
      to: "shallow-k-guard",
      kind: "transition",
      name: "Enter shallow K guard",
      trigger: "Opponent pushes your DLR knee down",
      details: "",
      counters: [],
      sources: [{ type: "class", date: "2026-10-27" }]
    },
    {
      id: "shallow-k-to-back",
      from: "shallow-k-guard",
      to: "back-control",
      kind: "back take",
      name: "Take the back",
      trigger: "",
      details: "",
      counters: [],
      sources: [{ type: "class", date: "2026-10-27" }]
    },
    {
      id: "closed-to-k",
      from: "closed-guard",
      to: "k-guard",
      kind: "transition",
      name: "Enter K guard",
      trigger: "Opponent leans far back",
      details: "Instructor recommends this entry instead of the hip bump sweep when the opponent leans far back.",
      counters: [
        {
          opponent: "Sprawls and cross-faces",
          response: "Use a long-armed frame to stop it before it lands"
        }
      ],
      sources: [
        { type: "video", date: "2026-10-27" },
        { type: "class", date: "2026-11-01" }
      ]
    }
  ]
};
