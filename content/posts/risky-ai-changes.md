---
title: "When a change feels risky"
slug: "risky-ai-changes"
date: 2026-06-12T00:00:00-04:00
draft: true
---

I'm trying to get in a new habit, and encourage others to do the same. Previously, when I wrote some code, and it felt risky, I would read the code again, more carefully, I'd read the surrounding code, I'd try it out locally or in staging, and/or I'd monitor carefully after I deployed.

When I write code with AI, I'm grateful to have the intuition that the code change is risky, since that represents years of experience with the types of things I work on. However, the next intuition, that I should try the things I used to try, skips too many steps.

Now that we have AI, we can do two new things.

1. Run an AI code review. Claude Code has `/code-review`, which dispatches a set of parallel review agents. This is also a good moment to try a model that you haven't tried before. If you wrote the thing with Opus 4.8, review it with Fable 5 and GPT-5.5.

2. Ask the AI to demonstrate correctness: Is there an end-to-end or smoke test it can write. For a web app or CLI, can it open your browser and click around, or operate the CLI itself? If it does, instruct it to take that testing and automate whatever is automatable. Can it suggest increases in code coverage? Is there developer tooling it can write that will increase your (and its) ability to demonstrate that a change is correct?

Granted, all the things we used to do still make sense, but with AI, we can improve ccorrectness in ways that might have been too expensive in the past, we can be more efficient, and we can be more efficient about demonstrating correctness.

The habit to form is, when you're tempted to leave the world of talking to your AI agent to do something yourself, hesitate, and ask yourself what your agent could do first.
