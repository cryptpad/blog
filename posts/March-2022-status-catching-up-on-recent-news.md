---
title: 'March 2022 status: catching up on recent news'
date: 2022-03-29 17:37:08
author: Aaron MacSween
tags:
- roadmap
cover: /images/dapsi-what-normally-happens.png
---

The beginning of 2022 has been sufficiently busy that we decided to skip two of our usual monthly status update blog posts. Things have not calmed down that much in March, but we didn't want to go any longer without an update.

## DAPSI wrap-up and FOSDEM

![A diagram depicting a client sending content to a server for conversion](/images/dapsi-what-normally-happens.png)

In January we concluded the INTEROFFICE project which was sponsored by [NGI DAPSI](https://dapsi.ngi.eu/). The DAPSI project administrators arranged a final event where all the projects they'd funded summarized their results in brief five-minute pitches. David Benqué, our design lead, managed to fit our most interesting results into this limited timespan. His presentation is available [on YouTube](https://www.youtube.com/watch?v=RQ9Ll-1UEF4&t=2437s).

![A diagram depicting a server sending a conversion engine to a client](/images/dapsi-with-interoffice.png)

Approximately two weeks later David gave a somewhat longer presentation at FOSDEM, titled **INTEROFFICE: Making CryptPad more interoperable with common office formats**, in the _Collaborative Information and Content Management Applications_ dev room. The talk's description, video recording, slides, and links to related talks from the same track can be found on [FOSDEM's website](https://fosdem.org/2022/schedule/event/collabinteroffice/).

Even more information about the project can be found on DAPSI's website, where we are listed as one of the program's [success stories](https://dapsi.ngi.eu/success-story-interoffice-collaborating-on-office-documents-without-giving-up-privacy/).

## Intigriti bug bounty program and new releases

Late in 2021 we were invited to participate in a bug bounty program coordinated by [Intigriti](https://www.intigriti.com/) and [sponsored](https://ec.europa.eu/info/news/european-commissions-open-source-programme-office-starts-bug-bounties-2022-jan-19_en) by the European Commission. The program began in mid-January and continued up until mid-March, with independent security researchers probing CryptPad's code looking for issues which could negatively impact users.

Our 4.13 release addressed a number of security issues which are described in its [release notes](https://github.com/xwiki-labs/cryptpad/releases/tag/4.13.0), however, we've noticed that relatively few third-party instance administrators have applied these updates. Furthermore, many that have updated have not done so correctly, and in some cases this means that their users' data may be at risk.

Up until now we've tried to make it _easier to configure CryptPad correctly_ by providing our [admin installation guide](https://docs.cryptpad.fr/en/admin_guide/installation.html), including clear and detailed explanations of the update process in each release's notes, as well as shipping a built-in diagnostics page which tells administrators what they need to correct. The trouble with this approach is that many admins don't read the docs, the release notes, or review the diagnostics page. With this in mind, we're starting to consider that the only reliable way to communicate with admins is through the platform's code.

Starting with our upcoming 4.14 release we plan to shift our strategy towards making CryptPad _harder to configure incorrectly_. We have made a number of changes that cause misconfigured instances to abort loading entirely, rather than proceed without the expected level of security.

We are also expanding our definition of _correct configuration_ to include things like _privacy policies_ and _terms of service_. If an instance permits registration of user accounts but has not included either of these links then the diagnostics page will suggest that they add such pages or deactivate registration.

Some of these features are already live on [cryptpad.fr](https://cryptpad.fr), and we plan to tag the latest code as a release on GitHub as soon as we've finalized its notes.

## What's next

Our [4.7.0 release](https://github.com/xwiki-labs/cryptpad/releases/4.7.0) release introduced an option permitting administrators to opt-in to inclusion in a directory of public instances. At the time no such directory existed because we wanted to confirm that there was actually interest from a sufficient number of administrators. At this point there are nineteen admins who have indicated their interest, ten of which are running an up-to-date instance which passes its tests, so we're moving forward with the project.

We've decided to make the 4.14 release the last major version of the 4.0 cycle and have begun preparing for a 5.0 release. We're going to introduce a new look for CryptPad with a simpler home page, with more information moved out of the platform itself and onto our project site ([cryptpad.org](https://cryptpad.org)), which will also host the public instance directory.

Since our team consists of only three full-time developers we're trying to create more ways for the community to get involved with the direction of the open-source project. We've created [a space on the federated Matrix network](https://matrix.to/#/#cryptpad:matrix.xwiki.com) where members of the community can connect with each other. It offers dedicated rooms for instance administrators, developers, translators, and general discussion about the project's roadmap and governance.

As always, if you like what we're doing and would like to support our continued effort, you can donate through [our OpenCollective campaign](https://opencollective.com/cryptpad) or purchase a subscription for a premium account on [cryptpad.fr](https://cryptpad.fr).

