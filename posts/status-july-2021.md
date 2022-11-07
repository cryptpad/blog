---
title: 'July 2021 status: Research on Forms and file import/export'
date: 2021-06-29 11:24:33
author: "David Benqué"
tags:
- forms
- ngi
- research
- status update
cover: /images/forms-usage-pie-chart.png
---

This month we released two versions of CryptPad. [4.8.0](https://github.com/xwiki-labs/cryptpad/releases/tag/4.8.0) included some early work on [INTEROFFICE](https://dapsi.ngi.eu/meet-interoffice-and-its-cryptpad-project/) format conversions. [4.9.0](https://github.com/xwiki-labs/cryptpad/releases/tag/4.9.0) addressed some early feedback on the Forms application as well as requests for a way to add links (URLs) to the Drive and to share them with contacts. 

During both release cycles, since the launch of Forms last month, we have been conducting a lot of research. First about the use of the Forms application itself, and now also to inform work on INTEROFFICE.

## Forms survey and interviews

![The majority of more than 300 participants in our survey indicated that they use forms in a professional or research context](/images/forms-usage-pie-chart.png)

The first thing we did after launching the new Forms application was to use it to survey people on cryptpad.fr. We asked them about their use of online forms and recruited some volunteers for one-to-one interviews. These are still ongoing. Once they are complete and analyzed, we will use all of the findings to inform the next round of developments on Forms.

In the meantime, [4.9.0](https://github.com/xwiki-labs/cryptpad/releases/tag/4.9.0) included some minor improvements (e.g. randomizing ordered-list questions) and bug fixes based on early feedback. Unfortunately one of the bugs affected our own [survey about file import/export](https://cryptpad.fr/form/#/2/form/view/kdhTrcywvS+ToQ3r4DI75sbfz+uyUPlHRWJhyWF7pVI/) (see next section). We found that setting an expiration date far enough into the future (above 23 days) caused the Submit button to disappear. So if you filled it out and weren't able to submit, know that this is now fixed!

## INTEROFFICE survey

We have started work on INTEROFFICE, our project about improving conversion between document formats in CryptPad (and in the browser in general). We already have some knowledge of requested conversions from a couple years worth of support tickets and feature requests. However after seeing the relatively high number of responses to the Forms survey (300+), we decided to conduct one for file import/export to get even more insight into what people use and request.

The [File import/export survey](https://cryptpad.fr/form/#/2/form/view/kdhTrcywvS+ToQ3r4DI75sbfz+uyUPlHRWJhyWF7pVI/) will be open until the 8th of September. Please fill it out if you haven't already, and now you can actually submit!

## Other news

The work on INTEROFFICE also includes a series of business mentoring sessions as part of the DAPSI project. This month we started putting some of the advice received into practice by preparing a new project website that we hope to launch this fall. This will include a list of public instances to share the load of free users with cryptpad.fr. The project site will be separate from the flagship instance and it will offer a range of services to host your own instance, from one day installation help to fully managed service.

![CryptPad's home page in Japanese](/images/cryptpad-in-japanese.png)

🇯🇵 CryptPad is now fully translated to Japanese. Big thanks to [@suguru@mstdn.progressiv.dev](https://mstdn.progressiv.dev/@suguru) for all the work!

This wraps up our news for the month. The coming cycle will be on the quiet side as the team takes turns taking much needed breaks. 
