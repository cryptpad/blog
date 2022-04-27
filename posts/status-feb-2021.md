---
title: "Feb. 2021 status: Dark mode and organisation plans"
date: 2021-02-24 11:57:52
author: David Benqué
tags:
  - status update
---

This is a new format of post we are starting on the blog: publishing the monthly updates that were until now only circulated in the internal XWiki newsletter. This will be an opportunity to regularly catch up on new features, research projects, funding/budget updates, and any other relevant news.

## FOSDEM presentations

Aaron and David presented different aspects of CryptPad at FOSDEM 2021. Please see the [updated blog post](https://blog.cryptpad.fr/2021/02/03/CryptPad-at-FOSDEM-2021/) for videos of both presentations.

## Dark mode

This month we followed up on the rebranding started with version 4.0 by thoroughly refactoring how styles, especially colors, are applied across CryptPad. This allows for better maintainance and easier customisation. The first custom theme is the long requested **dark mode**.

CryptPad will now follow the browser or operating system preference by default, and switch to a dark theme accordingly. The theme can also be set manually in Settings > Appearance.

![The CryptDrive in dark mode](/images/dark-drive.png)

Following the introduction of the dark theme in our 4.2 release, we noticed a few problems and got to work on correcting them. The most noticeable issue was the use of a dark background for rich text documents. Wanting to offer a "true" dark mode, we had intially switched the editor itself to a dark background, and made the default text color contrast with that automatically. It soon became apparent that this was a problematic choice in rich text documents where users are able to set colors for text. It may lead to text being un-readable depending on the theme used. One particularly painful example was a document about making web content accessible written in black text on a dark background. We reverted our decision and opted for a light background in the editor even when the rest of the interface is dark. There is a reason mainstream editors such as Microsoft Word do it this way. You can expect more polish on the dark theme in the upcoming 4.3 release.

![Web accessibility guide shown with black text on a dark background](/images/dark-shame.png)

*The web content accessibility guide that prompted us to revert our decision on the dark theme rich text editor. [The guide](https://cryptpad.fr/pad/#/2/pad/view/nOPkDL0nzbEi1DXnpEED0nqORBPF6pqS3SOUrKBqV9o/embed/) is by AccessiBloc.*


## Organization plans

On cryptpad.fr, another long-awaited feature were the **Organization plans**. We have been communicating this pricing on request for the last few months but the plans are now [live in the cryptpad.fr interface](https://cryptpad.fr/accounts/#org). These bigger plans have the additional option to download a personalised signed Data Processing Agreement (DPA) for organsations that need to demonstrate they operate according to the GDPR.

These plans come with 1 business day support and increased storage shared between a number of user accounts, priced as follows: 

- **25 Users** with 100GB of storage for 500€ a year (ex. VAT)
- **100 Users** with 150GB of storage for 1000€ a year (ex. VAT)

An additional On Premises option is available for organizations that require their own CryptPad instance, with installation and maintainance support by the development team. 

We were happy to welcome the first couple of subscribers on these plans and hope that they will contribute to making CryptPad financially sustainable in the longer term.

![The new organization plans on cryptpad.fr in dark mode.](/images/dark-accounts.png)


## A popular toolkit

We had an unexpected spike in traffic early in the month after the following tweet linked to a toolkit made on cryptpad.fr.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here’s an updated toolkit by people on the ground in India if you want to help. (They removed their previous document as it was outdated.)<a href="https://twitter.com/hashtag/StandWithFarmers">#StandWithFarmers</a> <a href="https://twitter.com/hashtag/FarmersProtest">#FarmersProtest</a> <a href="https://cryptpad.fr/pad/#/2/pad/view/ehTz+drfKPwi4fP5dn0mivwVCKhwNe7OD1YHDiBUj0Y/">https://cryptpad.fr/pad/#/2/pad/vi...</a></p>&mdash; Greta Thunberg (@GretaThunberg) <a href="https://twitter.com/GretaThunberg/status/1357054451769606147">February 3, 2021</a></blockquote>

This brought a lot of traffic to the service, as illustrated by the spike below. While this was a surprise, our infrastructure was prepared for it and held up very well.

![graph showing a big spike in visits to CryptPad.fr](/images/greta-stonks.png)

## Delivered: NGI Trust project: Secure Mobile Collaboration

We have wrapped up this exploratory project about using CryptPad on mobile devices. There will be dedicated posts about this project in the near future. This project allowed us to scope out, in depth, the options available to make CryptPad work as an "app". As a summary of our findings, here is what we plan to include in the new Frequently Asked Questions section of our documentation that will be part of the next release: 

---

### FAQ: Are you planning a mobile app? 

We are not planning a dedicated mobile application for the following reasons:
- It would dramatically increase the amount of code that has to be developed and maintained, effectively creating other "versions" of CryptPad for iOS and Android.
- CryptPad is open source and can be hosted by anyone who wants to offer the service. Therefore, users of a mobile application would have to specify which CryptPad instance they want to connect to, which would be confusing. To complicate things further, each instance may be running a different version of the software, depending on whether or not the latest updates were applied by the administrators.  

To address these problems, the development team is working on making CryptPad a "Progressive Web App". This means that it can be used on mobile through the web browser, behaving like an application while being the same software that runs on desktop browsers. This has the benefit of turning every CryptPad instance into a web app provider, rather than putting the burden of choosing the right instance on the user.

---

This approach has already started to inform new developments for CryptPad, for example the use of IndexedDB for caching documents which is already deployed. Further improvements will follow, including a full "offline" mode. 


This wraps up our first monthly status post. In March we will be shifting back to our NLNet Communities project and attempt to finish the outstanding deliverables around documentation for developers and instance administrators. 

