---
title: Let the LLM try first
slug: let-the-llm-try-first
published_date: 2026-03-11T00:00:00+00:00
publish: false
make_discoverable: false
is_page: false
---

I had an Anki deck, a set of digital flashcards in the spaced repetition app Anki, with an annoying problem. On some cards, the front of the card had text that linked to a URL. On others, the URL was only on the back, which meant I couldn't click it when I actually wanted it.

My first instinct was the old one: maybe export the deck to CSV, transform it, and import it again. Maybe there was some Anki add-on. Maybe I should inspect the note type and figure out exactly how the fields were arranged.

Instead of doing that, I asked Claude Code to fix it.

It figured out that Anki is just SQLite, used the `sqlite3` binary, looked at the schema, and wrote SQL to move the URL where I wanted it. I didn't have to first decide whether the solution should be CSV, Python, an add-on, or something else. It just found the shortest path.

This matches some other recent experiences. I made a read-it-later app and ended up learning about Cloudflare Workers from Claude Code. I mostly had AWS experience before, so Workers weren't part of my mental map. But my domain was already on Cloudflare, so the path Claude Code picked was much simpler than what I would have come up with on my own.

I think I'm learning more this way than I used to. In the past I read Stack Overflow, blogs, and newsletters, and I still do. But search is awkward when your problem depends on a bunch of specific context. You either leave details out, or you write a query that no one else has ever written. LLMs are unusually good at taking that pile of context and turning it into a concrete next step.

So I think it's worth giving an LLM a shot when you have a problem, before you spend too much time decomposing it yourself. It might solve it outright. And if it doesn't, you still learn something useful about today's capabilities: how much you need to break the task down, and whether it looks tractable at all. You might be breaking things down earlier than you need to.
