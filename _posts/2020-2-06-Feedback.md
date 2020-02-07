---
layout: post
title: Feedback
---

Accurate assessments are difficult to make, and self-assessments are often even harder. Our industry is fraught with overconfidence and self-doubt alike, and we can very rarely view our strengths and weaknesses with equal weight. Being a source of honest, accurate feedback for someone requires a lot of responsibility, and we need to be very careful with how and when we decide to give it.

The current mentoring gig that I participate in has a surprising amount of structure surrounding the process. I see this as a positive thing most of the time, but one *major* disadvantage is that the average time range required for someone to "graduate" is stated upfront, giving my mentees an immediate way to compare their progress against everyone who has come before them.

>"Did everyone else take this long to start making progress?"

>"Why am I having more trouble with this than they did?"

>"Should I pretend to know the answer, even though I don't?"

These aren't helpful questions to ask, yet we I bet we've all had thoughts like this when we were struggling with something. We all want people to think that we're amazing, and performing higher than average is a good way to get there. Unfortunately, this attitude places a high amount of pressure on us to succeed, and it exacerbates whatever self-assessment issues we may be susceptible to.

This is why feedback is such an important thing during the mentoring process. Honesty is important in order to help us improve, but being **brutally** honest too early can devastate someone's confidence. To add to the complexity, we should always be open to providing feedback upon request, meaning that we need to be ready to walk the line between a helpful and a harmful assessment on a moment's notice.

### How do you be honest without being a jerk?

To put this into some context, let's set the stage with an example: Your mentee has just submitted a code review. They're proud of the code, but you noticed some mistakes in the implementation which weren't caught by any of their test cases. How do you proceed?

If you just spoke your answer out loud, that's not how this works. You're reading a static website and I definitely cannot hear you. However, I'm going to assume that you said something along the lines of `tell them about the edge-case that they missed`.

Cool! Spot on. You let them know what you saw, and then the issue gets resolved. Case closed, and everyone goes home happy for the day.

Now in our example, let's say that it's not the first time it's happened, nor is it the first time you've had to point it out. And let's say that the bug in question is pretty major, the kind of thing that you'd expect most engineers to be very careful about.

Clearly, this scenario is different. The oversight in question seems much more severe, maybe even indicating a problem with their work ethic. Simply pointing out the mistake doesn't seem to be working, and continued mistakes like this don't have a habit of working out well for anyone involved. What do we try this time?

I'll refrain from putting words in your mouth this time, my hypothetical reader. I think the knee-jerk reaction for most people on this one is somewhere between `heart-to-heart question about what's going on` and `fully-fledged lecture about the severity of the situation`. Something in that range would probably work, but you can see how problems of differing severity could require responses of different weight. If you start hard-core lecturing someone who just started their career about null pointer exceptions because of the time you saw it wreak havoc in production, they might not be enthusiastic about submitting their next code review.

### When is a good time to give feedback about someone's performance?

This relation between what's appropriate given what level of experience also applies to **when** we should be giving feedback on certain issues. If my brand new mentee takes longer than expected to get their environment set up and start working on their first task, I probably don't care that much. But if my mentee is more seasoned and still goes long periods of time without producing anything productive, I definitely need to reach out to them about it.

So what's the threshold here?

Barring obvious the metrics like "you need to be submitting more than one code review each year", I usually take a pretty lenient approach on this. I'm probably not too worried as long as they can meet these criteria:
1. They can point to some productivity that they accomplished each day
2. They show general improvement over time
3. Their performance falls within the acceptable window for their current role

I keep the word "role" pretty loosely-defined on that last point (we're their mentors, not their managers), but once you get a sense of someone's velocity it should be pretty obvious if it's grossly lower than what you would deem acceptable for them. As long as my mentees are hitting these three things, my assessments should be pretty kind.

### Does that mean that they're never going to receive feedback from me?

Hah, NOPE! I like to keep a schedule with my mentees, and my current gig actually requires it. A part of that schedule means sending out weekly assessments of how I think they're doing, how close I think they are to "graduating", and my reasoning behind those answers. This is definitely an artifact that structured approach I mentioned earlier, but as draconian as this sounds, I think it's useful for you and your mentee to have a weekly update on how they stack up against what you're looking for. If I'm seeing enough improvements in someone's performance that I don't need to worry about them, they deserve to have that called out in a way that allows them to be proud of it. And if I'm seeing something that could result in me being unhappy with that performance, I should let them know in advance what I'm watching for rather than waiting to see if that problem manifests.

This leads me to the final point I'll cram in this post: `feedback goes both ways`. Just because you have more experience than someone doesn't mean that their opinion isn't valid, and self-assessment can blindside a mentor just as easily as a mentee. This is one of the areas that I believe my current gig drops the ball in their structured approach: my mentees have no official way to submit feedback about me.

To combat this, I try to make them as comfortable as possible to the idea of telling me what they think. If we're looking for something from them in a code review that they have a legitimate reason for not doing, we've got some learning to do. If we're doing something (or not doing something) that's causing their mentoring experience to be less effective, then that's a teachable moment for us. Feedback from our mentees is our most valuable resource in becoming better mentors, and we should make sure that they know that.

Be aware of how your feedback is being interpreted, and always be ready to receive some yourself.