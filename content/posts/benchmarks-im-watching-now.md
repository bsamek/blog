---
title: "Benchmarks I'm watching now"
slug: "benchmarks-im-watching-now"
date: 2025-10-20T00:59:00+00:00
draft: false
---

Whenever a new model is released, I read the benchmarks. I haven't seen a good list of benchmarks. I tend to see them referenced and then bookmark them.

Here's my list.

## Benchmarks

* [16x Eval Model Evaluation](https://eval.16x.engineer/evals) - Small number of coding, writing, and image analysis tasks. More sophisticated rubric. Missing Claude Sonnet 4.5 and Opus 4.1.
* [AI Productivity Index](https://mercor.com/apex/) - Attempt to benchmark AIs doing real work, like investment banking, legal, medical.
* [Aider LLM Leaderboards](https://aider.chat/docs/leaderboards/) - Coding challenges. Missing Claude Sonnet 4.5. Last updated September 2.
* [ARC Prize](https://arcprize.org/leaderboard) - Aims to capture tasks that are easy for humans but hard for AIs, so not really sure if this is a good representation of what people typically use AI for. It's striking though that Grok 4, GPT-5, and Sonnet 4.5 do the best at this. Grok 4 occasionally comes out on top in benchmarks, and this is one of those cases.
* [Artificial Analysis LLM Leaderboard](https://artificialanalysis.ai/leaderboards/models) - Independent evaluations on several benchmarks, with a composite score. Excellent benchmark. This is the place I think I'd send someone who asked for just one website.
* [Berkeley Function Calling Leaderboard (BFCL) V4](https://gorilla.cs.berkeley.edu/leaderboard.html) - Tool-calling benchmark. Tends to show Claude models above Grok and GPT-5.
* [BiomedArena.AI](https://biomedarena.ai/leaderboard) - Safety and response quality in a biomedical benchmark. Has only published an automated benchmark. Hopefully crowdsourced will come soon.
* [CompileBench](https://www.compilebench.com/) - Cool real-world example. Can AI do things like compile old software?
* [Design Arena](https://www.designarena.ai/) - Which AI is best at design. Personally I find GPT-5's designs to be better than Sonnet 4.5's. This benchmark disagrees, though the Elo difference isn't huge.
* [Dubesor LLM Benchmark](https://dubesor.de/benchtable) - Small benchmark by an individual. It has the classic flaw where you can't tell some of the parameters of the models. GPT-5 is lower down, but is that with default thinking? Would GPT-5-high be higher? Sonnet 4.5 is lower down than you'd expect. Did they try it with thinking?
* [EQ-Bench 3](https://eqbench.com/) - Really cool idea to test emotional intelligence and reasoning. I worry a little bit that it's LLM-as-judge, and LLMs might prefer their own outputs. That said, I tend to find Claude better at EQ, but this model puts it lower than I'd expect. It does find Sonnet 4.5 to be an excellent writer.
* [Evals | Roo Code](https://roocode.com/evals) - I'm happy to see coding assistants test models. However, I'm concerned this benchmark is saturated, which makes differentiating between models less reliable.
* [FACTS Grounding Leaderboard](https://www.kaggle.com/benchmarks/google/facts-grounding) - Whether a model's response accurately reflects a long-form document. No Sonnet 4.5.
* [ForecastBench - Baseline](https://www.forecastbench.org/baseline/) - Can LLMs forecast the future? Kind of. The public and superforecasters are still better, though LLMs are gradually improving.
* [FutureSearch Benchmarks](https://evals.futuresearch.ai/) - Confusingly this is a deep research benchmark, not a future prediction benchmark. Sonnet 4.5 does surprisingly well, followed by GPT-5.
* [Kagi LLM Benchmarking Project](https://help.kagi.com/kagi/ai/llm-benchmark.html) - Small private benchmark from the maintainers of the search engine. I find this one pretty useful, and it often has things that other benchmarks don't (GPT-5 Pro). However, it's sometimes missing things (it has Sonnet 4.5 but not Sonnet 4.5 thinking).
* [Kotlin-bench Leaderboard](https://firebender.com/leaderboard) - SWE-bench but for Kotlin.
* [lechmazur](https://github.com/lechmazur?tab=repositories) - Clever benchmarks, like NYT Connections puzzles and storytelling that must incorporate specific elements. The latter is one of the benchmarks that Kimi does surprisingly well on. (Another is EQ-Bench, above.)
* [LiveBench](https://livebench.ai/#/) - Automated benchmark (as opposed to human-judged like LMArena or LLM-judged like EQ-Bench) that I think best reflects my experience of coding strength. (That is, the global score does, not the coding score.)
* [LMArena Overview](https://lmarena.ai/leaderboard) - The OG. Curiously Gemini 2.5 continues to top this benchmark, but I don't think I see it at the top of many others, except vision benchmarks. They offer a bunch of benchmarks, including web dev and search.
* [Lmgame Bench](https://huggingface.co/spaces/lmgame/lmgame_bench) - It's missing models and evals, and the results are surprising, but having models play games is a great idea, so I keep it around to look back at it occasionally.
* [MathArena](https://matharena.ai/?comp=overall) - Math competition benchmark. Shows GPT-5 and Grok 4 towards the top, as expected, but then GLM-4.6 in first place!
* [ModelSlant.com](https://modelslant.com/) - Interesting idea to test model slant, but I'm not sure what this shows, since the numbers are so small.
* [OpenRouter LLM Rankings](https://openrouter.ai/rankings) - Not a benchmark. This measures usage, and is therefore a good proxy for buzz around models, even if they don't top whatever benchmark.
* [Probing LLM Social Intelligence via Werewolf](https://werewolf.foaster.ai/) - Wonderful idea. If only this had Claude.
* [SEAL LLM Leaderboards](https://scale.com/leaderboard) - One of my favorites. A dozen evaluations, including ones you know (Humanity's Last Exam) and ones you don't (evaluating model honesty when pressured to lie, and puzzle questions).
* [SEAL Showdown | Human Evaluation](https://showdown.scale.com/showdown) - SEAL's answer to LMArena.
* [SimpleBench](https://simple-bench.com/) - A little bit like ARC-AGI. This is a question that humans find easy and LLMs find hard. Gemini 2.5 Pro does well on this.
* [Terminal-Bench](https://www.tbench.ai/leaderboard) - Represented elsewhere, e.g., in Artificial Analysis, but this records the agent type.
* [Vals.ai](https://www.vals.ai/home) - Academic and non-academic (finance, legal) benchmarks, as well as a composite score, weighted by GDP, which puts Sonnet 4.5 ahead of GPT-5, though I worry this is because OpenAI's success is split between GPT-5 and GPT-5 Codex.
* [Vellum LLM Leaderboard](https://www.vellum.ai/llm-leaderboard?utm_source=app.raindrop.io&utm_medium=referral) - A bit out of date, but I keep it around because it tracks several benchmarks.
* [Vending-Bench: Testing long-term coherence in agents | Andon Labs](https://andonlabs.com/evals/vending-bench) - Coherence over long periods of time. Grok 4 does well here.
* [VoxelBench](https://voxelbench.ai/leaderboard) - Minecraft-style benchmark, but [MCBench](https://mcbench.ai/leaderboard) wasn't getting updated enough, so I started following VoxelBench instead. Surprising result that Gemini 2.5 Deep Think beats GPT-5-high and GPT-5 Pro.
* [Wolfram LLM Benchmarking Project](https://www.wolfram.com/llm-benchmarking-project/) - Test cases from Wolfram's book about the Wolfram Language. GPT-5 does poorly enough that I wonder how GPT-5-high would do.
* [Yupp Leaderboard](https://yupp.ai/leaderboard/explore) - Competitor to LMArena. Puts Gemini 2.5 Pro lower down than LMArena, which I'd expect, but then has Opus 4 nearly 100 Elo points higher than Opus 4.1, which surprises me.