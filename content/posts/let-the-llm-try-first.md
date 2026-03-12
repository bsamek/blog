---
title: "Let the LLM try first"
slug: "let-the-llm-try-first"
date: 2026-03-11T16:23:00+00:00
draft: false
---

I had an deck in Anki, a flashcards app, with an annoying problem that I had caused when I imported the cards. On some cards, the front of the card had text that linked to a URL. On others, the URL was only on the back, which meant I couldn't click it when I actually wanted it.

My first instinct was to export the deck to CSV, use AI to write a script to transform it, and then import it again. But in a moment of laziness and curiosity, I just asked Claude Code to fix it. I assumed Claude Code didn't have access to the application, so it couldn't fix it. I could have used Claude Code's Chrome extension, since Anki has a web version, but I didn't want to deal with the slowness of all that clicking.

To my surprise, Claude Code figured out that Anki is backed by a SQLite database, so it used the `sqlite3` binary, looked at the schema, and wrote SQL to move the URLs where I wanted them.

This matches some other recent experiences. I made a read-it-later app and ended up learning about Cloudflare Workers from Claude Code. I typically would have reached for AWS, since that's where most of my experience is. But my domain was already owned by Cloudflare, so the path Claude Code picked was much simpler than what I would have come up with on my own.

I think I'm learning more this way than I used to. In the past I searched the web, and I read Stack Overflow, blogs, and newsletters. But search is difficult when your problem depends on a bunch of specific context. I didn't even know to ask the question, is there something easier than AWS for this? LLMs are good at taking that pile of context and turning it into something concrete.

So I think it's worth giving an LLM a shot when you have a problem, even if you don't think an LLM could solve it in one shot, before you spend too much time decomposing it yourself. It might solve it outright. And if it doesn't, you still learn something useful about today's capabilities, which informs which tasks you give it in the future, and how you should break those tasks down.

This echoes what Ethan Mollick [wrote recently](https://www.oneusefulthing.org/p/real-ai-agents-and-real-work):

> [The OpenAI paper](https://cdn.openai.com/pdf/d5eb7428-c4e9-4a33-bd86-86dd4bcf12ce/GDPval.pdf) suggested that experts can work with AI to solve problems by delegating tasks to an AI as a first pass and reviewing the work. If it isn't good enough, they should try a couple of attempts to give corrections or better instructions. If that doesn't work, they should just do the work themselves. If experts followed this workflow, the paper estimates they would get work done forty percent faster and sixty percent cheaper, and, even more importantly, retain control over the AI.