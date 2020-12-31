---
title: No plan survives first contact with the enemy
date: 2020-12-31 22:27:34
author: Aaron MacSween
tags:
  - roadmap
---


In 2019 we finished a four-year research project that had covered the majority of CryptPad's development costs.
We had some worries about how we would continue to fund our team, but we were fortunate enough to meet and form a good relationship with members of Europe's [Next Generation Internet Initiative](https://www.ngi.eu/).

We received 50000 Euros from [NLnet](https://nlnet.nl/) as a part of their [NGI0 Privacy Enhancing Technologies](https://nlnet.nl/PET/) grant program.
Though we'd planned to finish this project ([CryptPad Teams](https://nlnet.nl/project/Cryptpad/)) before the end of 2019, research projects at this scale require a faster pace than we were used to.
We'd had an intern join our team over the summer, our plan didn't really account for vacation days, another salaried worker joined our team in November, and in general there were just many distractions that made everything take a bit longer than expected

We mostly made up a lot of the difference with an increasing number of [donations](https://opencollective.com/cryptpad) and subscriptions via our [premium accounts portal](https://cryptpad.fr/accounts/), and we had written a number of new grant proposals for the coming year.
Our second NLnet proposal ([CryptPad for Communities](https://nlnet.nl/project/Cryptpad-Communities/)) had already been accepted, but we were waiting to sign the final contract before making any announcements.
So, with 2020 on the horizon I wrote [an article](https://blog.cryptpad.fr/2019/12/31/Looking-back-looking-forward/) which alluded to our plans while we waited to hear back about which of our remaining proposals would be accepted.

## 2020's projects

In early 2020 we were still finishing up the final components of _CryptPad Teams_.
In addition to the remaining technical features we were also required to complete two audits of the platform: one to assess CryptPad's accessibility and another quick scan of its security features.
We didn't really know how long these would take, and we hadn't budgeted additional time for them, so these delayed our other projects and added a little bit to our 2019 deficit.

We already knew to expect another 50000 Euros from NLnet for our _Communities_ project, but since the status of our other proposals was still uncertain we decided to attend the [Open-Source Speed Dating session](https://opencollective.com/open-source-speed-dating/events/open-source-speed-dating-fosdem-2020-96f78c6c) at [FOSDEM](https://archive.fosdem.org/2020/).
Two of our team members pitched a project to speed up CryptPad's page loading times, making for a total of three pending proposals.

As it turned out, we heard about all three projects in the space of a few days and all three were accepted.
We weren't expecting all of these proposals to be successful, so we had to adjust a lot of our plans to ensure we could manage all of their respective deadlines, but on paper it all seemed manageable.

### CryptPad for communities

We'd already begun working on **Communities**' features quite early in the year.
The project included a number of high-level themes, but the overall goal was to make it easier for groups of various sizes to adopt or transition to CryptPad instead of proprietary alternatives.

Firstly, we'd heard from small businesses and social initiatives that they wanted to use CryptPad but needed some new features before they could make the switch.
We made major changes to our Kanban, rich text, and spreadsheet editors.

CryptPad's admin panel, which used to be very limited, now features a variety of controls for adding or modifying quotas for particular users, along with a variety of other configuration options to make it easier to run your own CryptPad instance.
We still need to add the ability to restrict registration and unregistered usage, but we expect to deliver this in early 2021.

Finally, we launched [our documentation platform](https://docs.cryptpad.fr/en/), which is available in English, French, and (courtesy of some dedicated contributors) German.
There is currently only a user guide, but we'll soon offer a thorough installation guide for admins and some technical documentation for contributors.

### Secure Mobile Collaboration

The goal of this project was to experiment with different technologies and ultimately prototype some dedicated mobile and desktop apps for CryptPad.
Our intent was to make CryptPad usable on mobile devices while also improving security by distributing static builds of our source code with cryptographic signatures so their authenticity could be verified.

We pitched this project to [NGI TRUST](https://www.ngi.eu/ngi-projects/ngi-trust/) at the end of November 2019 and framed it as an experiment since we weren't sure we'd be able to maintain dedicated apps in addition to the web platform we already offer.
Nevertheless, we know that mobile support is important to our users and we wanted to dedicate time to investigate our options.

We expect to finish this project soon but our approach has diverged from its early goals in some very notable ways.
For now I'll just say that a lot of time and effort has gone towards addressing the intended problems and that you can expect a dedicated blog post or two about this in the near future.

### Dialogue

Not long after proposing _Communities_ to NLnet we pitched this third _PET_ project.
It can take several months for these proposals to pass through their various stages of review, and each project only funds our team for part of the year, so it's important that we line up our next project before the current ones finish.
At the same time, we can't (legally) get paid by multiple funding bodies for the same work, so we need to ensure that projects don't overlap.

We applied for this and the NGI TRUST grant concurrently, but we didn't expect to win both.
NLnet's deadlines are considerably less strict, however, so we've prioritized SMC and saved [Dialogue](https://nlnet.nl/project/CryptPadForms/) for the coming year.
All _NGI0 PET_ projects have to be completed by late 2021, so we expect this to be our last.

CryptPad is currently specialized mostly for real-time document editing, and our cryptographic permissions system reflects that.
The main idea behind this project is to develop a new set of applications with different permission schemes that support more granular permissions for document components instead of all-or-nothing permissions for whole documents.

We already offer a _poll_ application, but it uses the same _editor/viewer_ roles as our document editors, which really doesn't match users' expectations.
This current implementation will be phased out in favour of the new scheme to support distinct roles for authors (who can ask questions and determine who can answer them), responders (who can submit answers), and viewers (who can see responses).
We're also going to add support for more complex surveys with multiple questions, implement a reminder system to notify authors and viewers when their polls have closed, and add some more instance admin functionality so that we and other people hosting CryptPad can communicate with their users via the existing notification system.

### MOSS

The requirements of [Mozilla's Open-Source Support](https://www.mozilla.org/en-US/moss/) program were considerably less formal than those of NLnet and NGI TRUST.
We received 10000 USD, which converted to about 9000 Euros at the time we received it, and we promised to use it to improve page loading times.
There wasn't any contract or formal definition of how we'd planned to do this, and no deadline given.

This funding model was extremely helpful for us this year and did a fantastic job of living up to its name and goal of supporting open-source.
Our European funding partners provide all or most of their financial support as their deliverables or the entire project are completed.
By contrast, MOSS solved some immediate cash-flow issues during this difficult year and afforded us the flexibility to fulfill our promises in between our other deadlines.

So far we've followed up on these goals by profiling page loading times on different devices to determine where to best spend our efforts.
We've made a number of small optimizations on the client along with some big server improvements that were frequently the cause of bottlenecks when establishing a new connection to the server.
There's still much more to do in this regard, and we plan to post ongoing updates as we find more room for improvement.

## A year of surprises

With the exception of our MOSS grant, everything I've mentioned so far was planned and proposed late in 2019.
We'd set our objectives for 2020 early on and had carefully considered how we could coordinate our multiple projects and how their features could complement each other.
As you might imagine, very little went according to plan.

i vaguely recall a few headlines about a respiratory illness being discovered in China late last year, but I didn't give it much thought and obviously didn't foresee the impact it would have on our plans for the year, let alone everything else it affected.
As the epidemic became more widespread, was upgraded to pandemic status, and triggered lockdowns across the world increasingly more people moved to working online.
Previously, I was happy with our success when we saw ten to fifteen thousand users in a week, but those numbers quickly doubled, tripled, and quadrupled in a matter of months as offices and classrooms started relying heavily on our platform.

![Unique IPs per visiting CryptPad.fr per day](/images/2020-users.png)

We made some significant changes to our server code to keep up with demand and eliminated some of our client's code that was particularly expensive for the server.
The precise technical details of exactly what we did to adapt to the dramatic increase in usage deserve their own article, but in general we suddenly had to pay a lot more attention to our infrastructure than was previously the case.
We started regularly allocating more disk space to the server and, as 2020 ends, we now store more than six times more user data than we did this time last year.

One major lesson we've learned, however, is that it's been far easier to scale our infrastructure than manual support for the platform.
Our surge of new users came along with a matching increase in support tickets, emails, GitHub iissues, and questions on social media.
We prioritized the documentation that we were writing as a part of our _Communities_ project, however, we still had to take time to answer the questions of people who hadn't found those docs or whose questions were not clearly answered therein.

We're still working to streamline this process, but our ability to respond to individual questions is a frequent bottleneck for our team.
This typically makes it more difficult to stay on top of our usual development cycle, and leaves less time than we'd like for promoting the project via public events or blog articles.
Having too many users is a fantastic problem to have, though, so this is less a complaint and more an acknowledgement of a challenge that we need to address.
We can't afford to be just _a team of software developers_ that also happen to _maintain and support a platform_ when both activities are equally important to our continued success.

## Conclusion

After the year we've had it's tempting to view the future as increasingly uncertain, but the reality is that nothing was ever certain to begin with.
We're still making plans for 2021, but our plans now include more caveats and fallbacks to (hopefully) lessen the impact of whatever else we don't see coming.

With all the unexpected stress of this year it's difficult to remember the good things, but we've had an incredible increase in support from our users.
Contributors have helped to add some significant features to the platform this year and have [translated CryptPad](https://weblate.cryptpad.fr/projects/cryptpad/app/) into a number of languages.
In the past two months subscriptions and donations have covered one of our three team members' salaries.
Our yearly revenue has once again _more than doubled_ compared to the previous twelve months, and if these trend continues we'll be able to fund our current team's salaries without having to depend on grants.

There's a lot more to be said about our goals for the future, but we still have a number of projects to complete, so for now I'll prefer not to think too far ahead.
Instead, I'll leave you with a bit of a teaser for our upcoming 4.0.0 release...

![CryptPad 4.0.0, coming in January 2021!](/images/NYE-2020.png)

Thanks so much to everyone who's supported us in any way throughout this difficult year.

We wish you all the best in 2021!
