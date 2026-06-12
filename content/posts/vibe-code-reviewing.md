---
title: "Vibe code reviewing"
slug: "vibe-code-reviewing"
date: 2026-06-12T00:00:00-04:00
draft: true
---

When Claude writes code for me and the change feels risky, my instinct is to read the code carefully. That made sense when reading was the cheapest way to buy confidence. I don't think it is anymore.

The habit I'm trying to build instead: when the code feels risky, ask Claude to do something about the risk. Increase the test coverage. Write a smoke test. Spin the thing up in a browser and click through it. Reading the diff line by line is one way to gain confidence, but it's often not the best one.

Call it vibe code reviewing. It's surprisingly useful, and its downside is different from vibe coding's. The failure mode of vibe coding is shipping code nobody understands. The failure mode of vibe reviewing is missing something a careful read would have caught. But careful reads miss things too, and evidence that the code actually behaves correctly is often stronger than the feeling I get from a clean-looking diff.

The general version of this: my intuition about risk is still useful, it just calls for a different response. The feeling that something is risky used to mean "slow down and do this part yourself." Now it means "bring AI to the table and point it at the thing that worries you."
