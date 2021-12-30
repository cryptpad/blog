---
title: Preparing for 2022
date: 2021-12-30 12:52:20
author: Aaron MacSween
tags:
  - retrospective
  - roadmap
  - status update
---

With the end of the year nearly upon us I am keeping up my tradition of writing a [retrospective](/tags/retrospective/) of what the CryptPad team has done over the past twelve months and an overview of our plans for the next twelve.

## The year in retrospect

### NGI research

We've been very fortunate to have received continued support from the European Commission's [Next Generation Internet Initiative](https://www.ngi.eu/). We completed two research projects funded by [NGI0 PET](https://nlnet.nl/PET/) and launched a new project funded by [NGI DAPSI](https://dapsi.ngi.eu/) which will wrap up in January.

We released the last components of the [_CryptPad for Communities_ project](https://nlnet.nl/project/Cryptpad-Communities/) which made the platform quite a bit easier to set up and administrate. We deployed our [administrator guide](https://docs.cryptpad.fr/en/admin_guide/index.html), added a variety of configuration options on the [admin panel](https://docs.cryptpad.fr/en/admin_guide/admin_panel.html), and developed an instance diagnostics page to automatically detect common configuration issues and suggest remediations.

NGI0 also funded this year's [_Dialogue_ project](https://nlnet.nl/project/CryptPadForms/) which comprised of a new _Form_ app and a variety of supporting features, including a new _calendar_ app, an internal reminders API, and more admin panel features for broadcasting instance-wide announcements.

In [our April status update](/2021/04/26/status-april-2021/) we introduced the DAPSI-funded _INTEROFFICE_ project, through which we've aimed to improve interoperability with other platforms through the use of common file extensions. Unlike most online platforms which convert between formats on their cloud infrastructure, we've had to develop new methods which process data entirely in your browser so that your private data is never revealed to anyone.

![A graph of desired workflows for conversion between different formats based on the results of our user studies](/images/expected-conversion-workflows.png)

Our [October status update](/2021/10/21/Announcing-new-apps/) went further, announcing our integration of OnlyOffice's Document and Presentation editors. These are fully open-source and available to anyone self-hosting the platform but remain in _early access_ for premium users on [CryptPad.fr](https://cryptpad.fr). This phased release model is new for us, but so far it's been very effective as a means to solicit quality feedback from a few active users without us getting overwhelmed by duplicated bug reports.

### Community contributions

Each new feature we add to the platform requires text in the form of labels for buttons, descriptions of the effects of different account and document settings, and of course various warnings, prompts, and error messages. CryptPad is hosted on hundreds of different servers all around the world and used by people who don't necessarily speak English or French. As such, all that text needs to be translated.

For the past few years, German-speaking members of our community have very reliably kept up with all the new text we've added, and have even gone as far as to translate our user guide. This year they've been joined by native speakers of Japanese, Russian, and Brazilian Portuguese to make the platform more accessible to a much broader range of people.

![Status of CryptPad's translations as of December 2021 with six languages at least 99% complete](/images/translations-status-2021-12.png)

### Project maintenance and administration

Revenue from premium accounts on CryptPad.fr goes towards answering premium support tickets first. Any funds that are left over are combined with donations to our [OpenCollective campaign](https://opencollective.com/cryptpad) to fund all the work that isn't covered by our research grants. That allows us to review translations, keep our documentation up to date, write detailed release notes, triage bug reports, and answer questions submitted via email or social media.

This year there have been multiple occasions when a new version of a major browser broke support for critical features, forcing us to drop whatever we were doing at the time and find alternative solutions for these regressions. When code isn't simply rotting out from underneath us, there are always critical security notices that need to be attended to, most recently with the sudden disclosure of [vulnerabilities in the log4j library](https://en.wikipedia.org/wiki/Log4Shell).

This year we saw an increasing number of subscriptions and donations from our supporters which allowed us to keep up with these surprises and to catch up on a bit of a backlog of maintenance. It helped that 2021 was overall somewhat less surprising than 2020, but we don't want to rely on that continuing to be the case.

## What the future holds

Our general plan for the coming year is to scale back the proportion of our budget which is covered by European research grants and to focus more heavily on projects sponsored directly by clients. To that end, we'll soon add a number of pages to our project website ([CryptPad.org](https://cryptpad.org)) which will differentiate the open-source project from our commercial offering on CryptPad.fr. We'll list various support packages tailored for _education_, _enterprises_, and _NGOs_.

![Screenshot of CryptPad.org, providing general information about the open-source project](/images/cryptpad-org-2021-12.png)

Earlier this year we included options in the platform's admin panel to allow administrators to mark their instance as intended for public usage, and to opt-in to inclusion in a directory of public instances. We wanted to wait and see if there was sufficient interest in such a listing before we went to the trouble of building it. The good news is that at this point 11 operators have opted in, so it seems worthwhile to build. The bad news is that a number of these don't seem to be configured correctly. We plan to reach out to these administrators in the near future to rectify these concerns before including them in the directory.

### Wrapping up our the INTEROFFICE project

The last remaining milestone for our INTEROFFICE project is to publish our client-side office conversion utilities as an open-source software library usable outside of CryptPad. After that our work and that of the other grantees will be evaluated by NGI DAPSI's expert reviewers, but this won't be the end of our efforts to improve office functionality.

Local computation (executing functions on your device instead of one in the cloud) is a critical component of privacy-respecting software, but there are other clear advantages to it. It enables more functionality to continue to operate when you are offline or on an unstable network connection. It also makes it feasible to host web services on less powerful devices, potentially making network infrastructure accessible to a wider audience. We hope that these diverse interests will align more developers to work toward the same goals for the public's benefit.

We plan to present the results of this project at FOSDEM in early February and hopefully to continue working with the broader community to make this approach the norm.

### Stronger and more diverse authentication measures

Many administrators of third-party instances will be happy to hear that we're going to start working on adding support for identity provider services like LDAP and SSO. This will allow them to restrict who can access their services, adding an extra layer of security for existing users of their service.

We'll complement this top-down approach to security with another bottom-up method, employing various second-factor authentication methods to give individual users more control over access to their account. We hope to introduce both app-based TOTP and emailed magic links. We'll publish a survey in the near future to determine how to prioritize these and possibly other methods.

### Better support for offline access

With all of our pending research projects wrapping up we're going to revisit some promising prototypes which we developed in late 2020. We experimented with using the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to cache CryptPad's browser code, allowing it to be loaded as normal even while fully offline. The basic concept is pretty simple, but it required a lot of additional controls in the UI to choose to operate offline, to update the cached version, to allow persistent storage on the device to be used, and so on.

Solving these basic usability problems related to offline functionality will provide a solid basis for us to develop CryptPad to be more like a mobile or desktop application, paving the way for more advanced (and highly requested) features like filesystem synchronization.

### Accessibility

We've corresponded with a number of groups that aim to improve the state of accessibility in open-source software, but we've lacked the time to follow through on their recommendations in a meaningful way. This is going to be a clear priority for our team with dedicated time on our roadmap in the new year.

### Hiring

There's a lot more that we would like to do in 2022, but realistically the work described above is likely to take a lot of time to get right. In order to accomplish more of our goals we'll need to hire additional team members, possibly as many as three.

If you are a web application developer with an interest in privacy and usability we want to hear from you. Our team works remotely, but for accounting purposes we'd prefer candidates from within the EU. We offer flexible working hours, competitive salaries for western Europe, four-day weeks every second week, and the opportunity to serve the public interest through free software.

If you think you could help us accomplish our goals, send us (jobs@cryptpad.fr) a brief introduction and a CV or resume indicating your relevant qualifications or experience. We tend to receive a disproportionate number of applications from certain demographics. To account for that bias, we'd like to encourage members of communities that are underrepresented in the tech industry to overcome their hesitation and apply. We want to hear to from you!

## Get ready!

We've gotten this far because we've had your help. You've introduced CryptPad to friends, family, and colleagues. You've written [great bug reports](https://marker.io/blog/write-bug-report) that have helped us find and fix stubborn problems. You've [boosted](https://social.weho.st/@cryptpad), [retweeted](https://twitter.com/cryptpad), and [liked](https://pixelfed.social/cryptpad_design) our updates. You've [translated the platform](https://weblate.cryptpad.fr/projects/cryptpad/app/) for your community, [subscribed to a premium subscription](https://cryptpad.fr/accounts/), [donated to our cause](https://opencollective.com/cryptpad), all of which have had a tremendous impact.

We're extremely grateful for all your support, proud of what we've created together, and excited to continue this journey with you in the new year!

See you in 2022!
