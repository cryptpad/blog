---
title: "Temporary AI Policy for CryptPad Development"
date: 2026-11-09
author:
  - Ludovic Dubost
  - Fabrice Mouhartem
tags:
  - cryptpad team
  - funding
  - ngi
  - survey
  - security
  - quality
summary: "The stance on AI for CryptPad development and next steps"
---


## Introduction

[CryptPad](https://cryptpad.org/) is an open-source end-to-end encrypted (E2EE) office suite. It has been developed since 2014 in javascript, building a real-time E2EE collaboration engine along with an integration for various applications for document processing (spreadsheets, documents, presentations, markdown, …) and collaboration (calendar, teams, drive, forms, …) in mind. CryptPad is distributed as a web application that puts the emphasis on the ease of use while staying secure under our [threat model](https://blueprints.cryptpad.org/document/threatmodel/).

Due to the ever-growing presence of Artificial Intelligence (AI) tools in development processes and recurrent questions from our community, until we write a definitive AI policy, we are providing this document to disclose the stance of the CryptPad project (as part of [XWiki SAS](https://xwiki.com/)) with respect to AI.

## LLM usage on the CryptPad project so far

On the core developer side:

* No features have been coded by agents. All commits are reviewed by the core developers of CryptPad.
* LLMs have not been used so-far by the developers of the project further than asking questions.
* All commits are humanly reviewed by committers.
* We have used LLMs for read-only security issues discovery and analysis.

On the contributor side:

* We have not provided any specific guidlines to contributors.
* All contributions have been humanly reviewed.
* If a contribution becomes too difficult to review, for instance because there is a large batch of AI generated code, we drop it.
* We have no knowledge of having accepted a heavily LLM generated contribution.
* We have received contributed security issue reports produced by LLMs.

Additionally, CryptPad has no AI features in the product itself.

## NLNet

NLNet is a foundation funding several open-source projects related to the Internet via the [Next Generation Internet](https://nlnet.nl/NGI/) (NGI) programmes. CryptPad has been funded by NLNet on several projects and we thank them for that.

| Project                                                                   | Fund type         | Start | End  | Summary                                                             |
| ------------------------------------------------------------------------- | ----------------- | ----- | ---- | ------------------------------------------------------------------- |
| [CryptPad](https://nlnet.nl/project/Cryptpad)                             | NGI0 PET          | 2019  | 2019 | Real-time collaboration with client-side encryption                 |
| [CryptPad Auth](https://nlnet.nl/project/CryptPad-Auth)                   | NGI Assure        | 2021  | 2024 | Implement external identity mechanisms to E2EE collaborative editor |
| [CryptPad Auth Improvements](https://nlnet.nl/project/Cryptpad-Directory) | NGI Assure        | 2024  | 2024 | Better user management, 2FA and SSO for CryptPad                    |
| [CryptPad Blueprints](https://nlnet.nl/project/CryptPad-Blueprints)       | NGI0 Entrust      | 2022  | 2024 | Server-side encrypted collaborative editor                          |
| [CryptPad for communities](https://nlnet.nl/project/Cryptpad-Communities) | NGI0 PET          | 2019  | 2019 | Collaborative web editor with client-side encryption                |
| [CryptPad Notes](https://nlnet.nl/project/CryptPad-Notes)                 | NGI0 Commons Fund | 2025  | …    | E2EE collaborative rich text editor                                 |
| [CryptPad Quality Test Suite](https://nlnet.nl/project/CryptPad-QA)       | NGI Assure        | 2024  | 2024 | Continuous testing of critical CryptPad functionality               |
| [CryptPad Scalable Server](https://nlnet.nl/project/Cryptpad-scaling)     | NGI0 Commons Fund | 2025  | 2026 | Improve the architecture of CryptPad                                |
| [CryptPad WCAG](https://nlnet.nl/project/CryptPad-WCAG)                   | NGI Assure        | 2024  | 2024 | Accessibility improvements to CryptPad suite                        |
| [CryptPad: Project Dialogue](https://nlnet.nl/project/CryptPadForms)      | NGI0 PET          | 2020  | 2020 | Secure surveys and polls for Cryptpad                               |

### NLNet AI Policy 1.1

As some CryptPad’s features are still funded by NLNet, we are following the [NLNet AI Policy 1.1](https://nlnet.nl/foundation/policies/generativeAI/1.1/) so far.

The key points of NLNet policy are that AI may be used to produce code as long as it’s fully disclosed and that the resulting code is still compliant with a FOSS license. Moreover, the use of AI-tools should not degrade quality, clarity, reliability, or reproducibility of the work.

As of November 2026, CryptPad is being funded by NLNet on the two following projects:
- A [refactor of the server](https://nlnet.nl/project/Cryptpad-scaling/), to make it more modular and scalable, that has been released in version [2026.10.0](https://github.com/cryptpad/cryptpad/releases/tag/2026.10.0);
- A new [Note application](https://nlnet.nl/project/CryptPad-Notes/) based on BlockNote that is still under development.


### NLNet AI Policy 2.0

On October 20th, NLNet [updated](https://nlnet.nl/foundation/policies/generativeAI/2.0/) their policy to restrict the use of LLMs and AI-tools to be read only (with transparency) and developers are not allowed produce any artifacts (including code, design and documentation) under NLNet grants.

Until now, CryptPad is compliant with these restrictions, and for transparency’s sake, LLM-based tools are being used for security scans on the code base during the development process to catch oversights.

## XWiki SAS Position

Although we have not used AI for producing code or documentation in CryptPad, our parent company XWiki SAS has started experimenting with AI systems, trying to understand their impact on the development process, their efficiency, the quality benefits and risks. We do see some areas where LLMs can bring a significant benefit to the end goal of the project. We also see significant risks of not following proper development processes and other risks concerning LLM usage.

While as citizens we are concerned about the risks associated with AI usage and negative externalities, both at our level and for society in general, we also have to evaluate the positive benefits AI can bring to small teams and to our end goals.

We believe we need to keep an open mind and study all aspects before deciding on a final policy.

## Next steps

We plan to create the projects AI policy. We will follow the following process:

1. Run a survey aimed at our developer team to understand the opinions of the whole team.
2. Run a survey aimed at our users and community to understand their opinion on LLM usage.
3. Study the viability of the project with and without LLMs.
4. Define our LLM policy taking into account all the prior information.
5. Publish our policy for review.
6. Implement our policy.

We will keep our community informed about the evolution on this topic!
