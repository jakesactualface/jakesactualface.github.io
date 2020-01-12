---
layout: post
title: This site has been updated!
---

I took the time to give this site a facelift, and I couldn't be happier with the result.

As someone who never particularly cared about maintaining a personal website, I knew that my previous roll-your-own approach would probably never achieve a professional appearance. I wanted a place to store some side projects, preferably one with a sharable link, and spinning up a Node/AWS side project seemed like a good way to attack the problem.

Unfortunately, messing with it was _juuust_ inconvenient enough that it quickly fell by the wayside.

My main mistake was limiting myself to a specific development machine. AWS development requires a set of credentials in order to deploy your content, and I decided to automate this process by permanently storing a key on my laptop. This was a great plan at first, but once I stopped using that machine on a regular basis, going back to tidy it up started to feel like work.

### Time for a new approach!

Switching over to the purely static approach of GitHub pages lowers the barrier to entry on submitting new content, while still being able to handle the sandbox aspects of the site. I started off with [Jekyll-Now](https://github.com/barryclark/jekyll-now) and [this SmashingMagazine article](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/), and I was able to transfer the existing content into this new format without too much effort.

We're still in the early days of dealing with the result, but I can definitely recommend this approach to anyone considering a development blog. Time will tell if the limitations of a static site end up being too restrictive, but for now, this more casual approach gets a hearty recommendation.