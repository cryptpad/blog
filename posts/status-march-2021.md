---
title: 'March 2021 status: Public roadmap and Spreadsheet updates'
date: 2021-03-29 11:58:46
author: "David Benqué"
tags:
- status update
- talk
- spreadsheet
- roadmap
cover: /images/roadmap-kanban.png
summary: "This month we released two versions of CryptPad, 4.2 and 4.3. Both improved CryptPad's stability and performance"
---

This month we released two versions of CryptPad, 4.2 and 4.3. Both improved CryptPad's stability and performance: 

- Version 4.2 saw Offline mode extended to Teams, shared folders within teams, and files. [Summary on Mastodon](https://social.weho.st/@cryptpad/105825790198276067)
- Version 4.3 focused on improving "intensive" use cases, defined as 1200+ concurrent viewers on the same document, or 10+ editors all writing at once. [Summary on Mastodon](https://social.weho.st/@cryptpad/105950727247053276)

In this status we'll focus on long requested updates to Spreadsheets and on other activities of note for the month. 


## Spreadsheet updates

We made a couple of important updates to the Spreadsheets application this month. First we enabled OnlyOffice's *Strict* collaboration mode, in addition to the *Fast* mode that was already integrated. In Fast mode, which remains the default, new edits are synchronized automatically between users as they are made. In Strict mode, users "lock" cells as they edit them and they have to manually save their changes in order for them to be sent to other users. The benefit of Strict mode is that it allows users to **Undo** their unsaved changes. The lack of undo in sheets has been a recurring point in user feedback. This goes some way towards addressing these requests, at least within the constraints of OnlyOffice collaboration. There are more details on how to switch between modes in our [Spreadsheet documentation](https://docs.cryptpad.fr/en/user_guide/apps/sheets.html#undo-and-collaboration-modes).

The other notable change is the update to OnlyOffice 6.2 in our 4.3 release. Aside from small user-interface polish, this update introduces **pivot tables** and improved graphs.


## Open Tech Will Save Us

David presented CryptPad on the monthly [Open Tech Will Save Us](https://matrix.org/open-tech-will-save-us/) Matrix/Element meetup. Episode 11 was an art & design special with a great lineup: 

- **Gaelle from Element** presents all things Voice & Video including recent UX improvements, upcoming features like voice messages, and bleeding edge designs for Voice & Video rooms
- **David Benqué** [@dbenque:matrix.xwiki.com](https://matrix.to/#/@dbenque:matrix.xwiki.com), Designer at [CryptPad](https://cryptpad.fr), presenting the open source & end-to-end encrypted collaboration suite. [@cryptpad@social.weho.st](https://social.weho.st/web/accounts/43149) [@cryptpad](https://twitter.com/cryptpad)
- **[David Revoy](https://www.davidrevoy.com/)**, known for his artwork, [Pepper & Carrot webcomic](https://www.peppercarrot.com/) and [design tutorials](https://www.davidrevoy.com/categorie3/tutorials-brushes-extras) in the Open Source space, performs a digital painting demo,  and speaks about his use of open tools!

<iframe width="560" height="315" sandbox="allow-same-origin allow-scripts allow-popups" src="https://peertube.xwiki.com/videos/embed/592e5cf6-733d-4482-b9fc-14f53ed03145" frameborder="0" allowfullscreen></iframe>

## Public Roadmap

We have been working to make more use of CryptPad itself to communicate about the project. The first major step in this direction is the introduction of our [Public Roadmap Kanban](https://cryptpad.fr/kanban/#/2/kanban/view/PLM0C3tFWvYhd+EPzXrbT+NxB76Z5DtZhAA5W5hG9wo/) where we detail all of the research projects we are currently working on. We summarise each project, funding amount, and associated features. Using the tags feature to filter one project gives an overview of its completion status. We find this very useful and hope you will find it informative. 

[![The Public Roadmap Kanban](/images/roadmap-kanban.png)](https://cryptpad.fr/kanban/#/2/kanban/view/PLM0C3tFWvYhd+EPzXrbT+NxB76Z5DtZhAA5W5hG9wo/)

The next steps planned in this direction include a review of the onboarding document (the first document that is placed in new user's CryptDrives), as well as a rewrite of the Privacy Policy for cryptpad.fr. This last one is nearly complete and will be published as a rich text document. 


## Cleaned up translations

We have started an effort to reduce the amount of work needed to translate CryptPad. As the development team we maintain English and French, and an active German speaking community maintains the German translation in near real-time for which we are very grateful. We want to encourage people to translate CryptPad in other languages, and to complete the many languages where the translation has been started but not completed. 

Past efforts towards this have included moving the Frequently Asked Questions out of the platform to [a dedicated page in the documentation](https://docs.cryptpad.fr/en/FAQ.html). This month we have taken further steps with automated scripts to detect un-used translations. These were left over from previous versions of CryptPad and were sometimes hard to detect in the code. There is now less work for translators, and better assurance that no time will be wasted translating text that isn't actually used in the product. 

We are keeping this in mind for future versions and will do our best to facilitate the work of community translators as much as we can. If you are interested in translating CryptPad, please head over to our [Weblate instance](https://weblate.cryptpad.fr/projects/cryptpad/app/). 

This wraps up our monthly status update. There is more to look forward to in April as we move to complete our *Communities* project, and exciting things on the horizon for CryptPad's interoperability with office formats.
