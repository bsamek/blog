---
title: "Working on the code"
slug: "working-on-the-code"
date: 2026-04-12T00:00:00+00:00
draft: true
---

There's an old business idea, usually attributed to Michael Gerber, about the difference between working *in* your business and working *on* your business. Working in the business is doing the thing. Working on the business is improving how the business works.

I wrote a feature at work in a day that previously would have taken a week. Although writing the code was faster, everything else around the code didn't shrink:

- Getting approval for the idea. 
- Doing product research. 
- Running tests. 
- Validating in staging. 
- Making sure the architecture makes sense.
- Reasoning about the maintenance burden.
- Deploying it to production.
- Asking people if actually like it.
- And much more.

All of those things already existed alongside writing code, but writing code used to take so much longer. Now that it's cheaper, those other things are a bigger fraction of the time, which means the leverage you get from speeding *them* up is larger than it used to be. You always wanted your tests to run fast, but now that matters more. You always wanted fast access to a staging environment, but now you want it faster. You always wanted user feedback, and now you want it more frequently.

I think this means that the, counterintuitively, being able to write code faster will spur innovation in things far from the code, since we'll get more benefit from improving them. Also, our intuitions about how much time it's worth spending doing those things will be wrong, and we'll need to nudge ourselves to spend extra time on them.
