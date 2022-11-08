---
title: 'June 2021 status: Forms and a call to instance administrators'
date: 2021-06-28 11:24:33
author: "David Benqué"
tags:
- status update
- administration
- forms
cover: /images/form-preview.png
summary: 'This month we released two versions of CryptPad. 4.6 was a stability update addressing many minor issues while the team prepared for 4.7 and a major new feature: the new Forms application.'
---

This month we released two versions of CryptPad. [4.6](https://github.com/xwiki-labs/cryptpad/releases/tag/4.6.0) was a stability update addressing many minor issues while the team prepared for [4.7](https://github.com/xwiki-labs/cryptpad/releases/tag/4.7.0) and a major new feature: the new *Forms* application.

## Say hello to Forms!

![Preview of the new Form application](/images/form-preview.png)  

The *Poll* application in CryptPad was aimed at choosing a meeting date between a group of people. However it had some major shortcomings including "all or nothing" edit rights where participants could modify other people's answers. Part of our [Dialogue](https://nlnet.nl/project/CryptPadForms/) project proposal was to address these issues in a complete re-write of the application. Another aspect of the project aims to provide a new application for online surveys beyond simple polls.   

The new *Form* application is an answer to both of these proposals. Polls are now one of 8 question types that can be added to an online form. Earlier in the project we [spun out the reminders API element of forms into a full blown calendar app](https://blog.cryptpad.fr/2021/04/26/status-april-2021/). With *Forms* we are merging a variety of use cases into one application. As we have [indicated](https://social.weho.st/@cryptpad/106419898274848746) polls created with the old application remain available, but the creation of new ones is discouraged and all our future development efforts will be directed at *Forms*.  

We released the first Beta version of forms with CryptPad [4.7.0](https://github.com/xwiki-labs/cryptpad/releases/tag/4.7.0) (on June 16th). There are many things we still want to improve, including:   

- Export of responses (e.g. to .CSV)  
- Better visualization of responses (e.g. with simple bar charts)  
- "Required" questions that would print an error if left empty  
- Notifications for form authors (e.g. when someone has responded)  
- A default "poll" template to make it easy to replicate the behaviour of the deprecated *Poll* app  

We are gathering feedback on these and anything else that might be improved, using the *Form* app itself for a feedback survey that is open until **July 12th**. Please [let us know of any comments on the application](https://cryptpad.fr/form/#/2/form/view/gYs4QS7DetInCXy0z2CQoUW6CwN6kaR2utGsftDzp58/) and what you would like to see improved, especially if you use online forms regularly. We really appreciate the time of nearly 100 people who have already sent in their comments. These will inform our work as we improve *Forms* this summer.  

Details on how to use the *Form* application are available in the [CryptPad User Guide](https://docs.cryptpad.fr/en/user_guide/apps/form.html).  


## A call to instance administrators

This month we sent out our first—and last—mass email to CryptPad instance administrators. This was a strange feeling for a team that spends most of its time working on ways to **not** know anything about its users. However we felt that version 4.7.0 was a good time to remind all admins to upgrade to latest version, and to ask for their consent for future communications as this is now managed directly from the admin panel.  

First of all, how did we have their email? The configuration for a new instance includes providing an email contact for the administrator, and this is sent to the development team in the daily "ping" that lets us know how many declared CryptPad instances are active. This is all detailed in the configuration file that admins read when setting up their instance.  

In both releases this month we have made improvements to the administration panel of CryptPad instances. More settings, such as the setup for the Support ticket mailbox, are now available from the panel rather than buried in configuration files. This also includes new settings for administrators to manage how they communicate (or not) with the development team.   

The "mass email" was to encourage all administrators to upgrade to the latest 4.7.0 version in order to 1) benefit from all of the new features and security improvements made to CryptPad in the last few months (or years depending on the version they were on) and 2) manage further communication with the development team going forward. These communications will include security notifications and other things such as inclusion in a directory of open instances that we are working on setting up.   

---  

There is one last bit of news to wrap up: CryptPad is now included in [Catalogue GouvTech, a software directory curated by the French state](https://catalogue.numerique.gouv.fr/solutions/cryptpad)  

The next month will be spent improving *Forms* and starting work on our [INTEROFFICE project](https://blog.cryptpad.fr/2021/04/26/status-april-2021/) for [DAPSI](https://dapsi.ngi.eu), working towards improved import/export and document conversions from within CryptPad.  

