---
title: 'April 2021 status: Calendars and a major new research project'
date: 2021-04-26 14:05:43
author: "David Benqué"
tags:
- status update
- calendar
- administration
- research
- funding
cover: /images/BETA-calendar-preview.png
summary: "This month we released CryptPad 4.4.0, and 4.5.0 is just around the corner: a new calendar app, improvements for instance administrators, and a new research project"
---


This month we released CryptPad [4.4.0](https://github.com/xwiki-labs/cryptpad/releases/4.4.0), and 4.5.0 is just around the corner. From a user perspective, these two releases bring some major new functionality in the form of a calendar app. We have also made some improvements for instance administrators by introducing instance-wide "broadcasts". Finally there are some exciting things on the horizon as we have secured funding for a new research project. 

## Calendar

The new calendar app made its debut as a [BETA preview](https://social.weho.st/@cryptpad/106064064521575394) in 4.4.0 and will be fully released in 4.5.0. This application is not directly funded by any of our current research projects, but rather makes the most out of the [Dialogue project](https://nlnet.nl/project/CryptPadForms/) funded by NLNet/NGI Zero. For Dialogue, we have planned a full re-write of our current Polls app as well as a new Survey app (see [our roadmap](https://cryptpad.fr/kanban/#/2/kanban/view/PLM0C3tFWvYhd+EPzXrbT+NxB76Z5DtZhAA5W5hG9wo/) for more details). Both of these include a **Reminders API** to notify authors, for example when surveys are completed. Rather than limit this API to the upcoming apps, we took this as an opportunity to bring full calendar functionality to CryptPad. When it is released, the calendar app will include the following features: 

- Creation of calendars and events for CryptPad users and teams.
- A typical calendar UI with month, week, and day views, drag and "resize" events, etc thanks to [Toast UI](https://ui.toast.com/tui-calendar).
- Sharing calendars similarly to any other CryptPad document (access rights, sharing with contacts, via a link, etc).
- Import/Export of .ics files for interoperability with other calendar apps.
- Setting reminders for events, and receiving reminders as CryptPad notifications.

![A beta preview of the calendar application](/images/BETA-calendar-preview.png)

We are aware that some features are missing, such as recurring events. This is likely to generate some "feature request" messages from users that we will have no funded time to address. However our hope is that this initial feature set still brings enough benefits to CryptPad users on the whole to make it worthwhile. 

## Admin Broadcasts

Another part of the Dialogue project is to enable administrators to **broadcast** messages to all users on their instance. This is now possible as of version 4.4.0, with the following use-cases available in the Broadcast tab of the Administration panel: 

- **Maintenance**: to notify users of planned work that may disturb their use of the platform. Admins enter a start and end time and users receive notifications prior and during the planned maintenance.
- **Survey**: to direct users to a survey via an external link. Admins enter the survey URL and users receive a notification and a survey link in the user menu. Users of [cryptpad.fr](https://cryptpad.fr) can make use of this with our new survey to gather feedback on their usage.
- **Custom message**: to send any message as a notification to all instance users. The message can be translated in all languages available on CryptPad, and will be seen by new users registering as long as it remains active. 

Instance administrators are set to receive more support as we wrap up our [Communities](https://nlnet.nl/project/Cryptpad-Communities/) project. The last of our 3 documentation guides will cover instance installation and administration, and the only remaining feature of the project will allow admins to restrict registration on their instance.

While we are on the topic of administration, we have added [one line](https://github.com/xwiki-labs/cryptpad/commit/4d5d809447130710728ea85caf53c38f084ebb26) to the [example Nginx configuration](https://github.com/xwiki-labs/cryptpad/blob/main/docs/example.nginx.conf) for CryptPad.

```diff
+ add_header Permissions-Policy interest-cohort=();
```

This opts the instance out of [Google's FLoC network](https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea), we encourage all administrators to make this change. 

## INTEROFFICE for DAPSI 

Finally, we are delighted to announce that we have secured €100K in funding from the [NGI Data Portability & Services Incubator](https://dapsi.ngi.eu/) (DAPSI). Our project is called INTEROFFICE: INTER-operable Office File Formats Integrated with Client-side Encryption.

Our focus in this project will be to develop solutions for converting documents to/from popular office formats (.xlsx, .docx, .odt, .csv, etc). There are, of course, already solutions to this problem but none that operate solely *in the browser* which makes them unsuitable for CryptPad. Our experience with .xslx import/export in CryptPad Sheets has been useful to us in scoping out this space, and in confirming how lacking it currently is. Our goal with INTEROFFICE is to bring multi-format document conversions to the client, and to CryptPad, which we hope will: 

- Address a common barrier to the adoption of CryptPad (unsupported office formats).
- Make it easier for users to retain local copies of their documents, integrate them in broader office workflows, or simply leave the platform with their data. 
- Make CryptPad more versatile and useful.
- Make it easier for anyone else working in this space to do client-side document conversions since we plan to release this work as open-source modules.

We are excited to start work on this, and will use future monthly status posts to keep everyone updated on progress. 
