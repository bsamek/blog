---
title: Reflections on prototyping a sysadmin benchmark
slug: reflections-on-prototyping-a-sysadmin-benchmark
published_date: 2026-02-13T19:42:00+00:00
publish: true
make_discoverable: true
is_page: false
---

I've been doing a bunch of keeping up with and experimenting with AI. It's still a surprise to me that I can create a Chrome extension in minutes, having never written one before, and having rarely programmed in JavaScript. 

I wrote a Chrome extension to copy page content, and another to send the same prompt to multiple LLMs, then a CLI tool to do the same with Simon Willison's [llm CLI](https://github.com/simonw/llm). Then a website to keep track of my BJJ notes. Then a harness to evaluate LLMs.

The last one is the most ambitious. In 2014 I took the RHCSA exam, and I liked the format: you get a broken server and fix it from the terminal. I also took the CCENT, which had a similar setup, but for Cisco networking. SSH-ing into servers to figure out what's going wrong, in order to make some configuration change, or fix some software bug, is something I've done a bunch in my career, and it's something that feels at least partially out of reach for current LLMs. (Both Opus 4.6 and GPT Codex 5.3 could find a nginx config error. But they struggled to find the problem without hints when it was application code that was returning the 503, not server config.)

I got to a working harness in a few hours. I wrote one with GPT-5.3 Codex and one with Opus 4.6 to compare. I liked that GPT-5.3 Codex picked QEMU over containers, but otherwise they were both strong models. 

It was interesting that on the one hand things felt so much easier than writing by hand, but on the other hand when code becomes easier to write, other hard parts come to the forefront:

- Am I measuring what I claim to measure? What tasks best represent what a sysadmin actually does? What counts as passing?
- Design. How do you represent the results to consumers of the benchmark?
- Observability. How can you trust the benchmark is really doing what the AI thinks it's doing? How can you know if the errors are real, or instead something about tool calling, timeouts, or the API?