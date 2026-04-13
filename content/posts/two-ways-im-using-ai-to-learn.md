---
title: "Two ways I'm using AI to learn"
slug: "two-ways-im-using-ai-to-learn"
date: 2026-03-29T00:00:00+00:00
draft: true
---

I've settled into two AI workflows that have quietly become part of my routine. Both are about the same thing: turning a firehose of content into something I'll actually retain.

## Triaging my reading list

My read-later list is long. It always has been. I use [Readwise Reader](https://readwise.io/read), which has a [CLI](https://github.com/Scarvy/readwise-reader-cli). In Claude Code, I pull up an article and ask for a two-paragraph summary. That's usually enough. I'll ask a follow-up question or two — "what's the actual mechanism here?" or "how does this compare to X?" — and sometimes I go back to the original article, but often the summary is all I needed.

The important thing is that I'm actually processing the list now instead of letting it grow. A lot of articles don't need a close read. They need a focused summary and maybe one good question.

## Turning BJJ videos into notes

When I learn a technique in BJJ class, I'll look up YouTube videos of it afterward. The problem is that video is a terrible format for reference. I can't search it, I can't skim it, and I'll never rewatch a 12-minute breakdown to find the one detail I forgot.

So I have Claude transcribe the video using [youtube-transcript-api](https://github.com/jdepoix/youtube-transcript-api) and write an Obsidian note from the transcript. The note captures the key details — grips, weight distribution, common mistakes — in a format I can actually find later. It ends up in my BJJ notebook in Obsidian, where it's searchable and linkable to other techniques.

This has been more useful than I expected. Transcripts are messy, but an LLM is good at pulling out the structure. The notes aren't perfect, but they're better than my memory of a video I watched once.
