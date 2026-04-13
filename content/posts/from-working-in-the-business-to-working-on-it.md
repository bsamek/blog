---
title: "From working in the business to working on it"
slug: "from-working-in-the-business-to-working-on-it"
date: 2026-04-12T00:00:00+00:00
draft: true
---

There's an old business idea, usually attributed to Michael Gerber, about the difference between working *in* your business and working *on* your business. Working in the business is doing the thing. Working on the business is improving how the business works. I think the same distinction applies to software engineers. Writing code is working *in* the business. Everything around the code — testing, staging, architecture, feedback — is working *on* it.

I wrote a feature at work in a day that previously would have taken a week. The code was faster, but everything else around it didn't shrink:

- Getting approval for the idea. 
- Doing product research. 
- Running tests. 
- Validating in staging. 
- Making sure the architecture makes sense.
- Reasoning about the maintenance burden.
- Deploying it to production.
- Asking people if they actually like it.
- And much more.

All of those things already existed alongside writing code, but writing code used to take so much longer. Now that it's cheaper, those other things are a bigger fraction of the time, which means the leverage you get from speeding *them* up is larger than it used to be. You always wanted your tests to run fast, but now that matters more. You always wanted fast access to a staging environment, but now you want it faster. You always wanted user feedback, but now you want it more frequently.

Counterintuitively, I think being able to write code faster will spur innovation in things far from the code — test infrastructure, staging environments, deployment pipelines, feedback loops. And our intuitions about how much time those things deserve will be wrong for a while. We'll need to nudge ourselves to spend more time on them than feels natural. Engineers have mostly worked *in* the business. Increasingly, we'll need to work *on* it.
