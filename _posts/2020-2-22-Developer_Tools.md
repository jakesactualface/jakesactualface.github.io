---
layout: post
title: Developer Tools
---

Do you remember the first time you used a debugger? When most people are learning to program, they learn the versatility of print-out statements, and these were my primary tool for making sure that my logic was behaving as expected. They work well enough, and they can be downright necessary if your development environment is convoluted enough, but they definitely have their limitations:

- They slow down development, requiring a code change each time you create/modify one
- They're subject to buffer delays, which can lead to confusing results
- Discerning data types for outputted values can be tricky, depending on how they're being serialized

Although these issues aren't a huge concern for someone who just passed "Hello World!", they quickly start to grate on us when we get further into our tech stacks.

### Enter the debugger

The first time someone showed me how to use [GDB](https://www.gnu.org/software/gdb/), it was like someone had just pulled off a blindfold that I never knew I had been wearing. The idea of being able to inspect values within the execution itself was _HUGE_, and I immediately started poring over documentation about breakpoints and memory addresses. Not only was this a quality of life improvement for my courses, but my overall velocity started to improve as I got better at using it.

Nothing was stopping me from obtaining this knowledge on my own, yet I hadn't reached for it. I'm sure that I would've sought it out once I understood the potential benefits, but I was so new to writing code that this hadn't happened yet. My "there must be a better way" senses were still being developed, so I never thought to check.

### Your mentees could be in a similar situation

Learning new things tends to happen in incremental steps. Someone who only knows one or two ways to do something may not yet know the **best** way to do it, and may not yet know enough to figure that part out. The instructor who showed me GDB was presented with a choice: let me continue `printf`'ing my way through my assignments, or show me a shortcut that might take me a while to find on my own. Whenever we see our mentees taking the long way around when a shorter path exists, we get presented with that same choice.

When it comes to how much experience you and your mentee have, this dynamic may change a bit. However, it probably won't be as different as you'd think, even when you're working with someone whose skills are just as strong as your own. We all have different sets of knowledge, and even if the only thing someone learns from you is how to use a SQL profiler, you're still giving them something that they can leverage to become better developers.

### Should I just go around showing people new tools then?

No, probably not. Although I'm a fan of someone _eventually_ learning all the tips and tricks for how to do something, having everything thrown in at once can be overwhelming. If I had been shown how to use GDB at the same time where I learned about build scripts, version control systems, and design patterns, I probably wouldn't have retained anything at all from the conversation. Stick to what's relevant in the moment, and focus on what makes it useful for whatever they're currently working on.

Another reason is that you can be wrong `[citation needed]`. Learning how to use a command line debugger might have been the best thing in the world _for you_, but they might have a better one built into their IDE. Your assumptions about their tech stack or prior experience could be wrong, and problems like this are difficult to watch out for ahead of time. It's still beneficial (you might end up learning something instead of them), but it's reason enough not to turn yourself into a human manpage.

### Then what do I do?

Just keep an eye out. Watch their progress, and get a sense for their workflow. When you see an instance where they might benefit from something you know about, give it a shot and let them know.

They might find it useful.