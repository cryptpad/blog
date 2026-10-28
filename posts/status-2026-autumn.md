---
title: 'Autumn 2026 status'
date: 2026-10-28
author:
  - Fabrice Mouhartem
  - David Benqué
tags:
- status update
- release
- team
- prototypes
cover: /images/templates.png
summary: "Autumn release, Euro-office, hackathon prototypes, and a team update"
---


We are late posting this status as it is all about our autumn release, that unfortunately [had to be delayed](https://github.com/cryptpad/cryptpad/issues/2415) to set a few things right. With this delay we are renaming the post to "Autumn status" to cover both September and October news.


## 🍂 Autumn Release

We are happy to announce that our Autumn Release is finally out. This was a longer cycle than usual as quite a few major features and improvements are included. 

### Releasing the new re-written server

We [put the new scalable server in production](https://blog.cryptpad.org/2026/04/08/status-2026-03/) on cryptpad.fr last March, and have been monitoring closely since then. After a series of fixes and some documentation to make it easy to install by third party administrators, we are ready to release it as part of the open-source product.

We moved the server to [its own repository on Github](https://github.com/cryptpad/server) so that it can be updated and fixed independently of the main CryptPad release cycle. We have worked to make the upgrade process as transparent as possible for administrators, but some configuration adjustments may be necessary, please see [the upgrade notes](https://github.com/cryptpad/cryptpad/releases/tag/2026.10.0).

Our thanks go to NLNet Foundation for [funding this work thought the NGI0 Commons Fund](https://nlnet.nl/project/Cryptpad-scaling/).

### Upgrading to Euro-Office

We are upgrading all the office apps in this release, but this isn't just a version upgrade of OnlyOffice, which we've relied on so far. We have switched our applications to [Euro-Office](https://github.com/Euro-Office) which is itself based on [OnlyOffice](https://github.com/ONLYOFFICE).

Our parent company XWiki has been involved in the Euro-Office initiative [from the start](https://nextcloud.com/blog/press_releases/industry-initiative-launches-euro-office-as-true-sovereign-office-suite/), this fork aims to improve technological sovereignty by providing a European open-source office suite solution.

### Many more fixes an improvements

To name a few:

- Improved stability and performance of office apps with linked documents, a new way to store data for apps that do not rely on Chainpad.
- Adjusted the form sharing UX to prevent form authors from loosing their edit link (that also gives access to the form's responses).
- ...
- Many other fixes, please see [the full release notes](https://github.com/cryptpad/cryptpad/releases/tag/2026.10.0)



## 🧪 Seminar / Hackathon results

In September part of the team attended the [2026 edition of the XWiki seminar](https://xwiki.com/en/Blog/seminar-2026-edition/) and as is customary we experimented on things during the day-long hackathon session.

### Improved templates

Daria (CryptPad team) and Thiago (XWiki) worked on some improvements for templates. They prototyped some useful documents such as meeting notes, goal tracker, and cooking recipe. They also mocked up what an improved template picker could look like.

![screenshot of improved template menu when creating a new document, templates are shown with titles such as "weekly sync", "interview notes", "Board minutes" and so on ](/images/templates.png)

### Features page redesign wireframes

The [features page of CryptPad](https://cryptpad.fr/features.html) has long been something we want to improve. The hackathon provided an opportunity to finally do that, as Daria and Andreea teamed up with the XWiki marketing team to produce mockups of a redesign.

![page mockup "one private workspace. Everything connected", private by design, real time collaboration, one connected workspace, fine-grained control](/images/features-1.png)

![same mockup continues with "drag and drop interface", "presentations made with familiar tools" "flexible file support"](/images/features-2.png)

### Logo experiments

Finally, David experimented with a logo refresh that would be more in line with the Lucide icon set used in the product. The ability to add styles to SVGs including favicons would make this a more versatile logo, for example able to adjust to light/dark modes.

![slide showing the new logo icon next to the CryptPad name on light and dark backgrounds](/images/logo-slide.png)

![row of tabs with favicons of different colors contrasting against the dark background](/images/svg-favicon-dark.png)

![row of tabs with favicons of different colors contrasting against the light background](/images/svg-favicon-light.png)


## 🎙️ Conferences

- Fabrice presented CryptPad at the [Open Source Conference Luxembourg](https://conference.opensource.lu/) earlier in October. The video is not available yet, but you can check out [the slides](https://pretalx.com/media/open-source-conference-luxembourg-2026/submissions/C3TBZ7/resources/1630-FabriceMouharte_0Eq7dsb.pdf) if you want to know more!


## 🗞️ In the news

- We are happy to be included in the Electronic Frontier Foundation's [How to Opt Out of Software Made by Big Tech](https://www.eff.org/pages/i-want-opt-out-software-made-big-tech)

## 🏀 Team update

After 7 years on the team and nearly 4 as project lead, David Benqué will leave the team at the end of November. Fabrice Mouhartem, our senior engineer in charge of cryptography and security, has accepted the role of "acting project lead" to run the project going forward. The team and management will reflect on what new hire will be best for the project.

## 🔭 Up Next

- The team will now be turning their attention to [CryptPad Notes](https://nlnet.nl/project/CryptPad-Notes/) as the next big feature to implement.
- CryptPad is part of of the SuperStack consortium of consortia with the projects [ELFA](https://elfaconsortium.eu/) and SuperApps. Our work on the project will not start until mid 2027 but we will be attending kick off meetings in the coming months.

