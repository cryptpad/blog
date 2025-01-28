---
title: CryptPad Funding Status January 2025
date: 2025-01-28
author: Ludovic Dubost
tags:
- funding
- status update
- open collective
- donate
summary: A summary of our budget for the year 2024 and planning for 2025
cover: /images/2025-budget-chart.png
---

![Chart showing the progression of the CryptPad budget over the years](/images/2025-budget-chart.png)

With the start of 2025 it is time for another update on the funding of the CryptPad project, following the status we did [last year](https://blog.cryptpad.org/2024/03/08/CryptPad-Funding-Status-January-2024/).  

## What happened with CryptPad's funding in 2024  

You can see in this table the details of the funding of the CryptPad project we expect for 2024, and what really happened  

|Year|Subscriptions  <br>(k€)|Donations  <br>(k€)|Research Projects  <br>(k€)|Client Roadmap Funding  <br>(k€)|Other Client Revenue (Cloud / Support)  <br>(k€)|Crédit Impôt Recherche Tax Cut  <br>(k€)|Extra Crédit Impôt Recherche (PHD)  <br>(k€)|Total  <br>(k€)|
|-|-|-|-|-|-|-|-|-|
|2022|46,5|12,7|100|||58|40|257|
|2023|54,5|25,7 + 12k Unexpected revenue (\*)|216|223|10|48|25.5|614.7|
|2024 (Expected)|65|30|293|50 to 150|0 to 100|24|101|513 to 763|
|2024 (Real)|76|16,4|408|16|16|12|101|645.4|

  
On the spending side we expected and did the following:  

|Year|Number of Employees (Full-time Equivalent)  <br>(k€)|Team Salaries incl. cost increase  <br>(k€)|Other costs  <br>(k€)|Extra hires  <br>(k€)|Total|
|-|-|-|-|-|-|
|2022|4|272|35|0 (\*)|307|
|2023|7|528|101|0 (\*)|629|
|2024 (Expected)|8 to 9|523|80|50 to 100|653 to 703|
|2024 (Real)|8.5|482|106|\-|588|

  

And the following balance:

|Year|Total Revenue  <br>(k€)|Total Costs  <br>(k€)|Balance  <br>(k€)|
|-|-|-|-|
|2019|153,5|160|\-6,5|
|2020|236,5|242|\-5,5|
|2021|267|254|13|
|2022|257,2|307|\-49,8|
|2023|614.7|614|0.7|
| 2024 (Expected)|563 to 763|603 to 703|+40 to  <br>+100|
|2024 (Real)|645.4|588|+57|

  

Overall, while we have growing revenue level from 2023 to 2024, we are a bit disappointed by our ability to grow the CryptPad Client revenue. The big project in Germany which we counted for 2024, took time to be relaunched by the ZenDis organization and did not bring roadmap funding as we hoped it could. Also as we have been quite busy delivering on the French Cloud project, we took more time that we expected to launch the CryptPad Cloud project, which we hope can bring some higher Enterprise revenue to the CryptPad project.  

Now we have been able to grow 40% the [https://cryptpad.fr](https://cryptpad.fr) flagship instance revenue. We are now almost at **1000 paying accounts on this instance**, which is our main client revenue aside from the research project revenue.

On the donations side, while we value a lot of the donations we are receiving, they unfortunately account for just a little part of what we need, and went down a bit this year as we did not receive a large donation like we received last year from Binance. However we wanted to mention a 1000 Euros donation from FUTO ([https://futo.org/)](https://futo.org/) which the FUTO team announced on their [peertube](https://peertube.futo.org/w/169654c7-cf94-484e-b83e-bf9eed1e3827). We want to particularly mention it here as it feels good to be supported by a team having a similar mission than ours. We are also very happy to have a regular donation from DSNCON Gmbh ([https://opencollective.com/dsncon-gmbh)](https://opencollective.com/dsncon-gmbh) and the C4DT lab from EPFL [https://c4dt.epfl.ch/](https://c4dt.epfl.ch/).  

And more importantly, as we were not able to pick up Enterprise revenue, we needed some research project funding. For this we have been extremely happy that the [NLNet Foundation](http://nlnet.nl) has awarded us 135k of funding as part of their NGI Assure fund, which has allowed us to work on improving the CryptPad code base in 3 important areas:  

* Accessibility, with many accessibility issues fixed during the year  
* Authentication and 2FA (SSO and 2FA)  
* Testing with the creation of an end to end test suite allowing to verify the quality of the CryptPad software.  
    

We'd like to thank NLNet and the [NGI research program](http://ngi.eu) for this funding which has been key this year to be able to continue to improve the quality of the CryptPad software this year. We feel it's particularly important to show the impact of the Next Generation Internet initiative, as it seems unclear if this initiative will continue, at least with the same structure. CryptPad would not be what it is today, without the NGI funding from the European Community.  

  

## What did we do in 2024 with our funding  

You can find all the statuses of the Year 2024 on our blog in the status-update section:  

  

[https://blog.cryptpad.org/tags/status-update/](https://blog.cryptpad.org/tags/status-update/)  

In particular in 2024 we have worked on the following:  

* We released 8 versions of CryptPad: 5 major and 3 minor and these are now following a [date-based numbering](https://blog.cryptpad.org/2024/03/29/status-2024-03/)  
* We finished the NLNet Blueprints project funded by NGI Entrust, publishing a new [R&D website for CryptPad](https://blueprints.cryptpad.org/) that includes our whitepaper, threat model, prototypes, and many other research outputs.  
* We've continued to [improve accessibility](https://github.com/orgs/cryptpad/projects/5/views/2) with 29 issues closed this year  
* We improved 2 factor authentication, [single-sign-on](https://github.com/cryptpad/sso) and user management.  
* We created and published an [end-to-end test suite](https://github.com/cryptpad/e2e-test-suite) to [automate CryptPad testing](https://github.com/cryptpad/e2e-test-suite) for each release.
* We separated the OnlyOffice code from the cryptpad code, allowing to reduce the size of the cryptpad server when you don't need the OnlyOffice features. It will also reduce the size of the server as it will also be possible to not carry old versions of the OnlyOffice code for new installs.  
* We started work on an API allowing to use CryptPad as a document editors for document stored outside of CryptPad. This work is not fully finished but well advanced as it works in our test environments. This API will have two versions:
    * one compatible with the OnlyOffice API allowing to use CryptPad as an OnlyOffice server to edit documents.   
    * another support end to end encryption and allowing to build an integration between Zero Knowledge storage servers and CryptPad editors     
* We have worked on performance and made significant improvements, with the [CryptPad Sodium Plugin](https://github.com/cryptpad/cryptpad-sodium-plugin), and also added performance measurement. This allowed us to divide by 2 the CPU used on our flagship instance cryptpad.fr, allowing us to scale more and have less downtimes and slowness.  
* As part of the integration API project and the CryptPad Sodium plugin project, we also worked on a plugin API which is for now undocumented but will allow better extensibility of CryptPad.  
* We have made many improvements and fixes, closing 147 issues during the year with more than 1296 commits in the core repository but also other repositories such as sso, nextcloud-open-in-cryptpad, helm and our onlyoffice repositories: [https://github.com/cryptpad/](https://github.com/cryptpad/)  

## 2024 Funding & Budget  

Last year, we were waiting for the finalization of the French BPI projects which were finally signed in the mid-year. XWiki SAS is happy to be [part of the three projects selected](https://xwiki.com/en/Blog/France-2030-funding-XWiki-and-CryptPad/).

Thanks to these projects we have funding for the next 3 years for the CryptPad project which allows to have a basis for the team, however we also have a lot of engagement associated to that funding. The funding is very much directed towards the integration APIs and the OnlyOffice integration in the project.  

Also CryptPad was selected to join the German "Sovereign Workplace" project, [now called openDesk](https://xwiki.com/en/Blog/XWiki-joins-OpenDesk/). During 2023 we have received significant funding, in particular for the Diagram application, the NextCloud integration, but also security and accessibility. For 2024, however we don't know if we'll get funding. The project is currently more in deployment mode and also in transition to the ZenDis organization (Zentrum Digitale Soveränität).  

We also hope to be able to receive more funding through the "CryptPad Cloud" offer and also through CryptPad support contracts. If you are a [company](https://cryptpad.org/use-case/enterprise/), [educational institution](https://cryptpad.org/use-case/education/) or a [nonprofit](https://cryptpad.org/use-case/nonprofit/) and wish to run your own CryptPad instance, check our [cloud and support offerings](https://cryptpad.org/pricing/). Subscribing to these offers will help the CryptPad project improve.  

Your support through [Open-Collective](https://opencollective.com/cryptpad) or subscriptions on [CryptPad.fr](https://cryptpad.fr) is also very important as useful as it creates an independent revenue stream directly from our users.  

## Expected funding for 2025  

You can see in this table the details of the funding of the CryptPad project we expect for 2025:  

|Year|Subscriptions  <br>(k€)|Donations  <br>(k€)|Research Projects  <br>(k€)|Client Roadmap Funding  <br>(k€)|Other Client Revenue (Cloud / Support)  <br>(k€)|Crédit Impôt Recherche Tax Cut  <br>(k€)|Extra Crédit Impôt Recherche (PHD)  <br>(k€)|Total  <br>(k€)|
|-|-|-|-|-|-|-|-|-|
|2022|46,5|12,7|100|||58|40|257|
|2023|54,5|25,7 + 12k Exceptional revenue (\*)|216|223|10|48|25.5|614.7|
|2024 (Real)|76|16,4|408|16|16|12|101|645.4|
|2025 (Expected)|100 to 120|20 to 30|340 to 380|10 to 30|10 to 30|38|50|568 to 678|

We have guaranteed funding from the French BPI project for 2024, regular subscriptions and donations and also CIR Tax cuts. This brings us 520k of guaranteed revenue. We can then expect from 40 to 110k from extra funding through increased revenue, donations, an extra research project or client revenue through CryptPad Cloud or support.  

  

On the spending side we expect the following:  

|Year|Number of Employees (Full-time Equivalent)  <br>(k€)|Team Salaries incl. cost increase  <br>(k€)|Other costs  <br>(k€)|Extra hires  <br>(k€)|Total|
|-|-|-|-|-|-|
|2022|4|272|35|0 (\*)|307|
|2023|7|528|101|0 (\*)|629|
|2024 (Real)|8.5|482|106|\-|588|
|2025 (Expected)|9|520|114|\-|634|

For 2025, we want to plan for our Junior team members to all be full time in the team.  

And the following balance:  

|Year|Total Revenue  <br>(k€)|Total Costs  <br>(k€)|Balance  <br>(k€)|
|-|-|-|-|
|2019|153,5|160|\-6,5|
|2020|236,5|242|\-5,5|
|2021|267|254|13|
|2022|257,2|307|\-49,8|
|2023|614.7|614|0.7|
|2024 (Real)|645.4|588|+57|
|2025 (Expected)|568 to 678|634|\-66 to +44|

## What does it mean for CryptPad ?  

In 2024 we have continued to increase the team size which we are stabilizing. For the 2025 budget we start the year negative, but thanks to the extra revenue done last year we can cover in case things don't turn as well as we would like.

Thanks to our long term project, we can have a stable team working regularly to improve CryptPad. However for the following years we have some risks and it becomes important that we find some more sustainable revenue.  

Also this year has shown us that it was not easy to deliver the work for the research project, and also continue to improve the core of CryptPad and the 10 pads that we have in the software. **CryptPad is becoming a very big project** and maintaining and improving it is a lot of work.  


### You can also help CryptPad be more sustainable  

On the cash flow side, XWiki SAS has also done good sales and is able to cover the short term needs. However over the long term we have risks of research funding reducing and we need to replace this funding with more sustainable funding. For this, the help of our community is more than welcome.  

If we want to be able to work on both Enterprise revenue and also continue to improve CryptPad features which are given for free, it is very important to bring additional, independent funding to CryptPad through **cryptpad\.fr [subscriptions](https://cryptpad.fr/accounts/) or through regular (monthly or yearly) [donations](https://opencollective.com/cryptpad) or through [enterprise clients](https://cryptpad.org/pricing/enterprise/)**, as this would increase recurrent revenue which is greatly needed.  

**For CryptPad to be less dependent on short or medium term projects, the recurrent funding for the maintenance of the core software is **essential.****  

Our users, paying users and donors are our credibility. When we discuss with potential customers or project partners, each user is key, each instance being installed, each pad being opened, each mention of CryptPad. You are our credibility.  

We'd like to thank all of you and encourage anyone to join them on         [cryptpad.fr](http://cryptpad.fr) or [opencollective](https://opencollective.com/cryptpad).

We'll also be at FOSDEM this week-end. If you'd like to talk to us, come at the XWiki/CryptPad Table.  

Thanks

Ludovic, CEO of XWiki SAS for the CryptPad team