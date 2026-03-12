---
title: "Gemini 3 Flash's Claudiness"
slug: "gemini-3-flashs-claudiness"
date: 2025-12-19T23:54:00+00:00
draft: false
---

Epoch AI [found that benchmarks](https://epoch.ai/gradient-updates/benchmark-scores-general-capability-claudiness) mostly measure a general capability. Given a model's composite score, which combines 39 benchmarks, you can pretty well predict its score in a single benchmark.

However, they also identified a minor, orthogonal dimension, which they said at first seemed something like "good at agentic tasks, but bad at vision... and also bad at math." The top 5 models in this dimension were all Claude models, so they called this dimension "Claudiness."

Gemini 3 Flash seems to do better at agentic but worse at reasoning tasks than Gemini 3 Pro. (Gemini has, however, been much better at vision, so vision looks like a third dimension.) This is surprising, since you might expect Gemini 3 Flash to just be a distillation of Gemini 3 Pro. But there was additional agentic RL research that [went into](https://x.com/ankesh_anand/status/2002017859443233017) Gemini 3 Flash.

Gemini 3 Flash is slightly higher on the [Vals Index](https://www.vals.ai/benchmarks/vals_index) than Gemini 3 Pro. It does better at SWE-Bench and Terminal-Bench, which are agentic, while Gemini 3 Pro does better at GPQA and MMLU, which require more knowledge and reasoning.

It therefore seems like Claudiness really is a separate dimension, and that Google has figured out how to train it in Gemini. 

It also raises the question of where economic value lies for AI. It reminds me a bit of Joel Spolsky's hiring rule: look for someone who is ["smart, and gets things done"](https://www.joelonsoftware.com/2006/10/25/the-guerrilla-guide-to-interviewing-version-30/). 3 Pro might be the smarter candidate, but 3 Flash can get things done. We can expect the agentic RL to be folded into Pro soon.