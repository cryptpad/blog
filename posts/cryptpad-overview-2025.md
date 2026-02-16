---
title: "2025 Recap"
date: 2026-02-16
author: "Marketing team"
tags:
- retrospective
- status update
cover: /images/2025-recap-cover.png
summary: "Discover CryptPad's new features, improvements, team activity, and main milestones that have shaped 2025."
---



## Projects and funding

We kickstarted 2025 with an [analysis of how CryptPad has been funded](https://blog.cryptpad.org/2025/01/28/CryptPad-Funding-Status-January-2025/) and what to expect for the same year. For a comparison between our financial expectations and actual results, you can check our upcoming 2026 analysis.  

Moreover, we’re thrilled to share that we’ve been selected as one of the **45 projects in the NGI Zero Commons Fund’s 7th open call**! Even better, we were awarded not just 1 but 2 projects this time around. We’re extremely grateful to NLNet for their continued support of CryptPad. The 2 pages for our [Scalable Server](https://nlnet.nl/project/Cryptpad-scaling/) and [CryptPad Notes](https://nlnet.nl/project/CryptPad-Notes/) projects will be updated shortly, but in the meantime, this is what we are planning:

* **Scalable Server:** Over the past few months, some of you may have noticed the occasional slowdown on our flagship instance, CryptPad.fr. That’s because the current single-server setup is starting to hit its limits as the project keeps growing. The good news is that smaller instances are still running smoothly. So we’ve started a full rewrite of the CryptPad back end. The new architecture will let us spread the load across multiple nodes. This will make everything faster, more reliable, and much easier to scale. The work is already well underway, and we’ll be sharing updates with the progress we've made. If all goes to plan, we will start rolling it out to production over the next few months.  
* **CryptPad Notes:** The CryptPad Notes project will replace Rich Text, one of the most widely used applications, with a modern alternative. Rich Text relies on CKEditor 4, which reached end-of-life in July 2023 and no longer receives updates or bug fixes. Furthermore, the new version's license is not open source. After careful consideration, we chose **BlockNote**, a lightweight, block-based editor that provides similar formatting and features through a simplified interface with "/" commands. This update will make collaborative note-taking and screen-based publishing faster and more intuitive.
  

## Notable features, improvements, and milestones

### 🚀 Document and Presentation open to everyone on [CryptPad.fr](http://cryptpad.fr/)

Many of you have asked for Office-compatible document and presentation support. In Q1 of 2025, thanks to the outstanding work of Wolfgang, our R&D Engineer, we launched these applications in beta **for all users, including the free accounts**. After improving and stabilizing the integrations, these editors now make it even easier to collaborate while keeping your data fully private and encrypted. These new applications make CryptPad the most complete suite of collaborative tools with end-to-end encryption at its core.

![Screenshot of the Document application in use, showing a collaborative environment with one user commenting "I love this!" on parts of the text](/images/CP-document-in-action.png)  

### ⚡ OnlyOffice 8 upgrade

The **OnlyOffice 8** brought multiple upgrades to Documents, Presentations, and Spreadsheets. This version introduced support for right-to-left languages, a cleaner user interface, and an intuitive Design tab in Presentations. It also brought **the much awaited real-time Undo in collaborative mode**, spell checking, and more. These improvements make day-to-day collaboration easier and inclusive. This is especially true if your team works in a multilingual setting or if you're seeking a privacy-respecting editing experience.

### 📦 Moved out of Fosstodon to our own Mastodon instance

In 2022, we had chosen Fosstodon as our home on the Fediverse after an internal debate on whether to run our own Mastodon instance. Back in 2025, people confronted the Fosstodon admins about some problematic positions taken by a member of their moderation team. Instead of acknowledging the issue, the team doubled down leading to a wave of instance administrators either de-federating straight away or announcing their intention to do so after 7 days of notice period. The Fosstodon admins have since [stepped down](https://hub.fosstodon.org/were-not-shutting-down) and [announced a replacement](https://hub.fosstodon.org/update-from-gina) indicating a [possible change of course](https://hub.fosstodon.org/fosstodon-community-statement). However, it was too late to stop the de-federations.

Since the start of the project, CryptPad communication has been “Fediverse first”. Mastodon is the social media that is most aligned with our values. It's also where we have our biggest community. Therefore, we decided to take a step towards greater autonomy. [Social.xwiki.com](https://social.xwiki.com/) became our new home on the Fediverse, managed by our parent company that hosts us at [@CryptPad@xwiki.com](https://social.xwiki.com/@CryptPad).

### 🏆 OW2 Community Award

We attended [OW2con'25](https://www.ow2con.org/view/2025/) back in June and were honored to receive the [OW2 Community Award](https://www.ow2con.org/view/2025/Awards_Results). Building an open-source platform where collaboration doesn’t compromise privacy isn’t always easy. But it's moments like this one that remind us why it’s absolutely worthwhile and needed.

### 📱 Murena vault

We were thrilled to see **Murena**, the team behind **/e/ OS**, integrating CryptPad into their release. Their [**Murena Vault**](https://doc.e.foundation/murena-vault) service for subscribers runs on a customized CryptPad instance. It's a step forward to see our product being deployed in new privacy-focused ecosystems. Real change happens when we work together to build open, ethical alternatives to Big Tech.

### ✨ Accounts redesign launch

Last summer, we gave [the subscription management section of CryptPad.fr](https://cryptpad.fr/accounts/) a long overdue makeover. Plans (including **drives** for users or teams) are now easier to see and manage, with storage and other benefits up front. When you sign up, you will notice a quick step that allows you to choose a plan. "Free" is still an option, but we'd like to emphasize that subscribers keep CryptPad sustainable and growing.

### 🧪 Post-quantum research

After a 6-month internship, [Iulian Scutaru](https://github.com/Iulian-Tudor) wrapped up his work on integrating post-quantum cryptography (PQC) into CryptPad. PQC uses new algorithms that run on today’s computers, but are designed to stay secure even if attackers have quantum computers. Iulian compared the main options from the NIST standardization process, and we chose the Crystals suite (ML-KEM and ML-DSA) for its speed and strong security research.

The first results look promising, but there are still some technical and usability blockers to overcome before we can roll this out. On the plus side, Iulian also added crypto-agility, a refactor that makes it easy for CryptPad to switch between cryptographic libraries in the future. Independently of quantum safety, **it's an important security feature for CryptPad users**.

### ✍️ Open letter against Chat Control

Last October, we added our signature (and that of our parent company XWiki SAS) to an [open letter](https://tuta.com/blog/open-letter-against-chat-control) against the Chat Control EU regulation. We thank our friends at Tuta, Proton, and Mailfence for writing it.

For years, the CryptPad team and many other privacy advocates have spoken out against a proposed EU regulation on Child Sexual Abuse (CSA), often called “Chat Control.” This policy would affect encrypted platforms like CryptPad by requiring something called [client-side scanning](https://www.internetsociety.org/resources/doc/2020/fact-sheet-client-side-scanning/).

In practice, this means providers would have to install code on your device. This code will allow them to use your own encryption keys to scan your private messages and files. If the system finds something that matches government-defined rules, it would report it back to the provider. And all of this could happen without a court order or any specific suspicion.

### ♿ Accessibility

We've made major progress toward the **WCAG compliance** in the first quarter, with improvements across the platform to support keyboard navigation, screen readers, and responsive design. These changes make CryptPad more inclusive and ensure everyone can collaborate securely and comfortably:

*   The notifications page, login/registration flows, modals, markdown toolbars, and Kanban tags are now keyboard-accessible.
*   We expanded the screen reader support, with proper automatic announcements, accurate roles, and checkbox states.
*   We refined visual contrast and mobile responsiveness to enhance usability for all.

### 🛠 Improvements and fixes

#### #1 Icons update

We’ve finally said goodbye to Font Awesome 4.7 (dating back to 2016) and our old hacky CryptPad Tools web font. In their place, we’ve introduced a new fork of **[Lucide icons](https://lucide.dev/)**, complete with app-specific icons and customizations. Updating all the icons was a big job, since they appear everywhere in the CryptPad interface. But the good news is that future updates will be much easier. They'll only require editing one file.

![screenshots of the file menu before and after the icon change](/images/before-after-comp.png)

#### #2 Faster loading and smoother mobile experience

In March 2025, we rolled out [major improvements to how CryptPad loads your data](https://github.com/cryptpad/cryptpad/releases/tag/2025.3.0). This is especially helpful if you use it often, access it on mobile, or have a large drive. If that sounds like you, you probably noticed the difference right away.

Before this update, everything loaded at once: your drive, team drives, or shared folders. After March 2025, CryptPad loads what you need first and takes care of the rest in the background. This means you can **open documents faster, start working sooner, and enjoy a smoother experience overall**.

These changes also prepared the ground for what comes next. By refactoring this part of the system, we made it easier to build future features, like a JavaScript API that will let other apps connect to CryptPad beyond just the web interface.

#### #3 Touch screen improvements to Kanban and Forms

We've received feedback about the need for mobile improvements of our app, and we've set this as a priority. Therefore, we've [fixed issues in Kanban and Forms](https://github.com/cryptpad/cryptpad/releases/tag/2025.9.0) for an improved user experience.

#### #4 Simplified loading screen

In the 4th quarter, we focused on [simplifying the loading screen](https://github.com/cryptpad/cryptpad/releases/tag/2025.9.0). It’s often the first thing new users see, so we gave it a cleaner, more polished look that clearly highlights CryptPad’s end-to-end encryption.

#### #5 New CryptPad integration API

This [**CryptPad integration API**](https://github.com/cryptpad/cryptpad-api-examples) allows developers to embed collaborative editing into any file storage system, **with full end-to-end encryption preserved**. All CryptPad document formats are supported, including real-time editing for text, spreadsheets, and slides. To see how this works, we've created a [CryptPad integration API demo page](https://api-examples.dev.cryptpad.net/) for your you test it out.

Whether you're building a secure cloud workspace or integrating editing into a SaaS platform, this API opens new possibilities for encrypted collaboration.

#### #6 Internal seminar: hackathon projects

##### Webxdc CryptPad

The team produced a prototype for using the [Webxdc](https://webxdc.org/) API within CryptPad. This simple file format for applications is designed to be lightweight and take advantage of the offline-first and end-to-end encryption capabilities of the platform hosting it. (For example, a messenger such as [Delta Chat](https://delta.chat/).)

The team managed to port and integrate [a simple chess game](https://github.com/ArcaneCircle/chess) into CryptPad.

##### CryptPad CLI

Ludovic Dubost, our CEO, experimented with a command-line client for CryptPad. He managed to connect a CryptPad account and browse the drive using commands like **cd** and **ls**.

##### Cristal in CryptPad

XWikier Pierre Jeanjean experimented with an integration of the new XWiki user-interface [Cristal](https://cristal.xwiki.org/xwiki/bin/view/Main/WebHome) as a CryptPad application. This leveraged both Cristal's wiki support capabilities and CryptPad's secure sharing and file support. This PoC integration lets you create and manage a shareable encrypted wiki. It can include any document type supported by your CryptPad instance by embedding the corresponding editor.

### 🎟️ End-of-year funding campaign

During our December fundraising on Open Collective, many of you stepped up with donations, and we’re incredibly grateful for every single one!

We were also excited to welcome new subscribers through our 50% discount campaign, and to see existing subscribers renew their plans. Whether you contributed through a subscription or a donation, you’re helping keep CryptPad independent and sustainable.

Information

If you’d like to support us going forward, individual users can donate via [**Open Collective**](https://opencollective.com/cryptpad/contribute) or subscribe to CryptPad.fr. Organizations can also contribute through [**subscriptions**](https://cryptpad.org/pricing/#full) or feature sponsorships. We’re committed to being fully transparent about how we’re funded, and we publish annual financial updates on the [**CryptPad blog**](http://blog.cryptpad.org/2025/01/28/CryptPad-Funding-Status-January-2025/).

## 💌 CryptPad newsletter

2025 was also the year we launched our newsletter. That’s how we began sharing updates with our growing community about what’s happening in the world of privacy-focused collaboration. We’re grateful for your interest in the updates we’ve shared over the last year: new releases, the launch of CryptPad Cloud, product improvements, mentions in publications, or interviews with members of our team.

If you’re not subscribed yet, we’d love to have you join us. [**Sign up for our newsletter**](https://news.xwiki.com/cryptpadpreferencecenteren) to stay up-to-date with the latest news, features, and insights from the CryptPad team.

![screenshots of the CryptPad newsletter](/images/CP-newsletter-preview.png)

## Events and media

On top of all the work done, and constant improvements brought to CryptPad, the team has also taken part in various talks and conferences. CryptPad was also in the spotlight with featured articles and reviews.

### 🎙 Conferences and talks

* **FOSDEM 2025: [Fabrice](https://xwiki.com/en/Blog/Fabrice-Mouhartem-R-D-Engineer/)**, our R&D Engineer, shared the latest privacy enhancements in CryptPad, in a talk called **CryptPad: Recent advances in privacy and collaboration**. He showed how real-time collaboration can remain secure and user-friendly, even as new features are introduced. You can watch the full video on [our PeerTube channel](https://peertube.xwiki.com/w/fL96CjcPs3VJFfEhTPq7Wg). In addition, **Ludovic**, our CEO and founder, also held a presentation on **20 years of hacking open-source funding.** He tackled the real challenge of sustaining open-source projects in a world dominated by multi-billion-dollar companies. His talk is also available on [PeerTube](https://peertube.xwiki.com/w/gSienTSznmfp3RaiNdb71o).
* **CryptPad Enterprise webinar:** Back in March, **Ludovic** hosted **the first CryptPad webinar** dedicated to enterprise customers. The presentation and demo were followed by a Q&A session. It addressed concerns shared by potential CryptPad users in an enterprise context. [All of this content](https://xwiki.com/en/Blog/webinar-overview-cryptpad-enterprise/) is now available in case you missed the event.
* **Journées du Logiciel Libre: Fabrice** attended the event in Lyon and gave a talk on [**CryptPad and data privacy**](https://peertube.xwiki.com/w/eNUghLVhrFKsk5SwsrifeJ) (in French). He was also around to connect and chat about the project.
* **NGI Forum: Ludovic** represented us at this EU’s flagship event for the Next Generation Internet initiative. The 2025 focus was on open internet infrastructure, digital commons, and Europe’s path to digital sovereignty. Ludovic presented CryptPad as an NGI-supported project. He spoke on the role of open-source tools in building a more secure and privacy-friendly internet.
* **OW2con'25:** Besides receiving the **OW2 Community Award 2025**, our team was represented by Fabrice. He joined several conversations with developers and contributors about privacy-focused alternatives in collaborative software.
*   **Paris JUG:** **Fabrice and Ludovic** presented CryptPad to the Paris Java Users Group, 9 years after the initial demo. They talked about what changed in the project's first decade, and demonstrated the client-side API. [The video of the presentation](https://peertube.xwiki.com/w/tKLzwGvUtXFrHD7HukYAWA) is available in French.
*   **Capitole du Libre:** In his talk called [**Security by design through end-to-end encryption**](https://peertube.xwiki.com/w/3U3GUCdHa97nZLedfUQLAd) (available in French), **Fabrice** explained how CryptPad is built around cryptography, so privacy does not come at the cost of usability.
*   **Open Source Experience (OSXP):** Back in December, **Fabrice** attended this major open-source event to present the recent advances in CryptPad. His [talk](https://peertube.xwiki.com/w/sNtzAD7iz7AumehqmjMier) and [presentation slides](https://cryptpad.fr/file/#/2/file/EXqMaOb-+02VqEDN6YDcBWMp/) are both available in French if you want to check them out.
    

### 🗞 Coverage

*  **CryptPad in use at the United Nations:** We were extremely proud to see the United Nations using CryptPad Forms to gather endorsements for their [Open Source principles](https://unite.un.org/news/sixteen-organizations-endorse-un-open-source-principles).
*   **FOSS Force article**: Following the news that the United Nations have been using CryptPad, Larry Cafiero had [an in-depth conversation with CEO Ludovic Dubost about CryptPad](https://fossforce.com/2025/04/un-drops-google-for-cryptpad-an-encrypted-open-source-office-suite/).
*  **Review on Privacy Guides:** We were delighted to read the in-depth [review of CryptPad](https://www.privacyguides.org/articles/2025/02/07/cryptpad-review/) by staff writer [Em](https://www.privacyguides.org/articles/author/em/). This very accessible and thorough guide is a great introduction to CryptPad. The article covers all the practical information and unique quirks that come with end-to-end encryption.
*  **Le Monde**: We were very happy to see journalists at Le Monde using (once again) CryptPad. They shared their sources for [an article about drone warfare in Ukraine](https://www.lemonde.fr/international/video/2025/04/16/comment-les-drones-fpv-revolutionnent-le-champ-de-bataille-en-ukraine-le-premier-episode-de-notre-serie-video-tactiques_6596656_3210.html) and for a [video documentary](https://www.lemonde.fr/videos/video/2025/10/16/gaza-le-d9-israelien-un-bulldozer-de-guerre-au-service-de-l-aneantissement-de-l-enclave_6647187_1669088.html) about the militarized D9 Bulldozer used in the Gaza Strip.
* **Bearstech**: The French open-source cooperative Bearstech [has echoed CryptPad news](https://mamot.fr/@bearstech/114512086526972934). Their software recommendations are widely followed, so we were happy to be featured in their [open-source newsletter](https://www.linkedin.com/pulse/la-veille-des-ours-n61-bearstech-ifirf/) (in French).
* **Tuta’s de-Google list**: We have a lot of appreciation for Tuta's work on privacy-respecting email. We were very glad to notice CryptPad in [their list of recommendations for Google alternatives](https://tuta.com/blog/how-to-leave-google-gmail).
*   **CC2tv**: In [episode #402](https://www.youtube.com/watch?v=HBjkjFUGE3c), CC2tv, one of Germany’s longest-running tech shows, now a YouTube channel, discussed CryptPad’s privacy-first approach to online collaboration. The episode (in German) showcased our end-to-end encrypted office suite as a compelling alternative to Big Tech tools.
    

## Our team

Like in previous years, the team continued to be hard at work. Everyone's dedication made all the updates you discovered above possible. Back in September, we paused a bit and met offline for our yearly team building, organized by our parent company. We also welcomed [**Iulian**](https://xwiki.com/en/Blog/Iulian-Software-Development-Engineer-Intern/), who joined the team for 6 months to prototype post-quantum cryptography in CryptPad. This should improve the security of CryptPad against future threats.

## What to look forward to in 2026

Exciting things are ahead for this year:

❄ The [Winter release](https://github.com/cryptpad/cryptpad/releases/tag/2026.2.0) is just out, with the upgrade of the office apps and the redesign of the Drive tree. 

🚀 Working on the 2 NLNet projects: Scalable Server which will make [CryptPad.fr](http://cryptpad.fr/) more performant as our user-base grows, and CryptPad Notes, that will replace the outdated Rich Text app

🛠 Continue working on our office apps

🎙 New webinar coming soon

📅 Attending events, always a great chance to interact in person with our users and the open-source community
