---
title: "Announcing two new applications in early access: Document and Presentation"
date: 2021-10-20 11:14:03
author: David Benqué
tags:
  - interoperability
  - document
  - presentation
---

Today we are beginning to roll out some major new features for CryptPad. We have integrated the two remaining OnlyOffice editors for text documents and presentations into CryptPad's real-time encrypted collaboration engine. This completes the OnlyOffice suite, as spreadsheets have been available for some time. Like our spreadsheet editor, these two new applications [only rely on OnlyOffice's client-side components, not its server](https://docs.cryptpad.fr/en/FAQ.html#what-is-the-relationship-between-cryptpad-and-onlyoffice). This work is combined with our ongoing efforts to improve import and export of documents funded by [NGI DAPSI](https://dapsi.ngi.eu/). As a result CryptPad will be much more inter-operable with existing office suites and their file formats, for example with the ability to import and export .docx, .pptx, .xslx, as well as the open document .odt, .odp, and .ods. Additionally, documents in these formats that are uploaded to CryptPad will no longer be treated only as static files. A new "Open in" menu will make them editable in the corresponding CryptPad application.

![Preview of the new Document application.](/images/OO-doc-preview.png)

![Preview of the new Presentation application.](/images/OO-slide-preview.png)

When we launched OnlyOffice spreadsheets [at the beginning of 2019](https://github.com/xwiki-labs/cryptpad/releases/2.16.0), we were inundated with support tickets as teething issues inevitably surfaced. As a team of three people handling both development and the administration of cryptpad.fr, support is a key part of our work but also the most time consuming. With two new OnlyOffice applications included in this launch, we had to find a way to avoid a similar scenario. Meanwhile, we also do not want to compromise on the fact that CryptPad is free software, and that cryptpad.fr does not limit functionality to users who can afford a subscription (only storage and priority support). The solution we have settled on is to launch the new Document and Presentation applications as *early access*.

On cryptpad.fr this means that, at first, only people with a subscription will be able to create new documents and presentations in the new applications. They will see a warning that these applications are experimental and should not yet be trusted with important data. Anyone else will be able to open and/or edit these documents as normal when they are shared. Once we are confident that the applications are stable and ready for widespread use, the early-access limitations will be lifted and the applications will be available to everyone on cryptpad.fr.

The code remains open source and will be available to all other CryptPad instances if the administrators choose to enable early-access applications. 

We think this will result in a smoother launch and ultimately in a better experience with CryptPad for everyone. We are not interested in putting paywalls around various parts of the platform but we do have to find ways to manage our workloads in order to continue developing it. Projects such as NGI DAPSI come with deadlines that have to be met in order for us to receive the funding. 

*Early access* means that everything remains open-source, and eventually will be available to everyone. It rewards people who support the project with a first view of much anticipated applications. This is a new thing for us, however a few weeks of delay to access new applications is, we believe, a relatively minor step. The bigger picture is that we are working towards the long-term success of CryptPad. This involves being fully funded by our users while they currently account for only 1/3 of our budget (subscriptions on cryptpad.fr and donations combined). EU research projects such as NGI DAPSI currently cover the remaining 2/3. We have more ideas to encourage people to support the project, and to involve them in the future of the platform. One of them is giving subscribers a vote on our roadmap to decide which new features get prioritized. We will come back to this in due course.

Everyone benefits from sustainable open-source. For example, our work for NGI DAPSI has advanced the state of the art in document conversion in the browser, rather than on the server where user data is exposed. This will be released independently of CryptPad so other projects can re-use it. If you are eager to see this in action, and to test the new Document and Presentation applications, please consider subscribing to a plan on [cryptpad.fr](https://cryptpad.fr) to help make CryptPad sustainable for everyone.