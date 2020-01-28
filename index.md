---
layout: default
---

# Website-Shmebsite

### One part playground, two parts time consumption, and four parts learning experience.

Not having a website is boring. One day, I realized that there was nothing preventing me from **not** not having a website, and then the text you're reading was written!

This site serves as a way for me to keep myself accountable. I tend to invest myself too heavily into my career, so I've taken all of the old coding projects that I wrote for fun and put them into a globally-accessible place as a reminder of how I got started. My brain is convinced that this will make it easier to create more of them, so we'll see how that turns out.

### This site also serves as a platform for me to attempt a blog!

That's right! You've found yet another software engineer who decided to throw his own words out into the cacophony. Don't worry, I realize that all of the good "you're using `<technology>` wrong and this is why" blog ideas have been taken already, so I'll be focusing on my experiences mentoring other developers.

Still reading?

Cool!

---
## Latest Blog Posts

<div class="posts">
  {% for post in site.posts limit:3 %}
    <article class="post">

      <h1><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h1>

      <div class="entry">
        {{ post.excerpt }}
      </div>

      <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
    </article>
  {% endfor %}
</div>