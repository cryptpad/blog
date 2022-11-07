---
title: "Against #chatcontrol"
date: 2022-05-19 17:05:00
author: Aaron MacSween
cover: images/chatcontrol-cryptpad-graphic.png
summary: Something terrible is happening in the EU and we need help to stop it
tags:
  - cloud
  - ethics
  - funding
  - privacy
  - press
  - security
  - social media
  - storage
  - chatcontrol
---

Something terrible is happening in the EU and we need help to stop it. Many people are very busy and understandably don't have the time to engage deeply with politics. I'll start with a brief summary and link to some resources on simple actions you can take to help prevent a bad law from being passed.

![no #ChatControl - EU citizens, make your voices heard to stop this dangerous proposal. It would do nothing to protect the most vulenerable, and put everone at risk. Contact your MEP. Give feedback through the EU portal](/images/chatcontrol-cryptpad-graphic.png)

## The short version

The office of the [European Commission's' Directorate-General for Migration and Home Affairs](https://ec.europa.eu/home-affairs/index_en) recently [announced new legislation](https://ec.europa.eu/commission/presscorner/detail/en/ip_22_2976), so called #chatcontrol, which would mandate that online platforms scan user-generated content like text, images, and videos to detect instances of child sexual abuse materials (CSAM) and grooming behaviour.

This policy would extend to providers of encrypted platforms (like CryptPad) through a practice known as [client-side scanning](https://www.internetsociety.org/resources/doc/2020/fact-sheet-client-side-scanning/). In this approach, encrypted platform providers are expected to deploy code to your device which will access and use your encryption keys against you, analyzing your private content and reporting back to the provider if it matches a set of rules defined by a government agency. All of this would be applied indiscriminantly with no need for a court order or reasonable suspicion.

This proposal already faces opposition from members of the European parliament, but they are the minority and they require more public support in order to stop this law from passing. Patrick Breyer, a former judge and current member of European parliament wrote a [comprehensive and accessible analysis](https://www.patrick-breyer.de/en/posts/messaging-and-chat-control/) of what the law would mean for citizens. If you don't have time to read the full article, skip to the [**what you can do**](https://www.patrick-breyer.de/en/posts/messaging-and-chat-control/#WhatYouCanDo) section to see how to join those organizing to oppose this proposal on social media and beyond.

Such a system will affect people from around the world, not just Europe, but it is primarily Europeans who can do something about it. If you are a European resident or citizen you can also check [how your EU representatives voted](https://mepwatch.eu/9/vote.html?v=134463) on [the precursor to this legislation](https://european-pirateparty.eu/parliament-approves-chatcontrol/). From there it is possible to find your representatives contact information [by name or by country](https://www.europarl.europa.eu/meps/en/home).

## An overview of #chatcontrol

It's extremely useful to have short, descriptive names like "[#chatcontrol](https://twitter.com/hashtag/chatcontrol "The chat control hashtag on Twitter")" for laws like this so that they can easily become a part of a broad public conversation. That said, some people have taken it to mean that these laws would only apply to messaging services and email. Our team read through the full proposal the day after it was released, and it's obvious that our flagship instance ([cryptpad.fr](https://cryptpad.fr)) would be an eligible target if the upcoming parliamentary vote passes.

That would mean that at any time we could be served with a "detection order" and be expected to begin scanning the data of all of our users for illicit content. The people proposing this legislation would like the public to believe the classic argument that [_"if you have nothing to hide, you have nothing to fear"_](https://en.wikipedia.org/wiki/Nothing_to_hide_argument), that the surveillance mechanisms they want to deploy are reliable and safe, but that simply isn't true.

### Client-Side Scanning is an experimental technology

> [Client-Side Scanning] has been promoted as a magical technological fix for the conflict between the privacy of people’s data and communications and the desire by intelligence and law enforcement agencies for more comprehensive investigative tools. A thorough analysis shows that the promise of CSS solutions is an illusion.
>
> from [The Risks of Client-Side Scanning report](https://arxiv.org/abs/2110.07450)

In October 2021 a group of fourteen broadly respected experts in the fields of cryptography, privacy, security, and digital policy collectively published a report of the risks of deploying client-side scanning as a tool for combatting child abuse. The report makes it very clear that the technologies are highly experimental and unreliable. They suffer from high rates of both false negatives (failing to detect their intended targets) and false positives (incorrectly identifying benign content as harmful). Worse still, these detection tools are usually trained with biased data sets that are far less accurate when applied to underrepresented subjects. Typically this means people of color, members of the LGBTQ+ community, and people with disabilities, making it very likely that this surveillance will disproportionately affect people who are already marginalized.

If that wasn't bad enough, that only assesses how these tools perform under ideal circumstances. Things get far worse when we consider _adversarial scenarios_; cases where certain people are deliberately trying to manipulate the likelihood of false negatives or false positives. In recent years researchers have demonstrated techniques where an image can be imperceptively modified to avoid or trigger detection. This means it's not only possible for people distributing CSAM to become practically invisible, but that the next meme you download to your device might have been manipulated to have you flagged as a sexual predator.

It probably sounds like the techniques involved are incredibly sophisticated, and they are, but that sophistication is matched by publicly available tooling. For context, researchers from Apple developed an algorithm intended to accurately detect CSAM and it was [broken within 48 hours](https://twitter.com/matthew_d_green/status/1428179884954853379). Since then, many people have tinkered with different approaches and improved on the initial results, often [publishing their code for anyone to use](https://gist.github.com/unrealwill/c480371c3a4bf3abb29856c29197c0be). If client-side scanning is mandated in the EU then it is practically guaranteed that tools for evading or abusing it will become widespread and progressively easier to use.


### Deeper risks

> "The ability of citizens to freely use digital devices, to create and store content, and to communicate with others depends strongly on our ability to feel safe in doing so. The introduction of scanning on our personal devices—devices that keep information from to-do notes to texts and photos from loved ones—tears at the heart of privacy of individual citizens. Such bulk surveillance can result in a significant chilling effect on freedom of speech and, indeed, on democracy itself."
>
> from [The Risks of Client-Side Scanning report](https://arxiv.org/abs/2110.07450)

There is broad consensus among people familiar with the proposed technologies that they are not sufficiently accurate for widespread deployment. That might be good enough to stop this bill, but it's likely that we'll just have to fight such legislation again in the near future when scanning technologies become marginally more accurate. There are deeper reasons why it's important to say not only that such an approach is unacceptable now, but that it will _never_ be acceptable.

First, tools for encryption remain widely available, and distributors of CSAM can always continue to use existing file hosting platforms to host data that they have encrypted themselves. We can't eliminate encryption because it is key not only to protect civil liberties, but for basic tasks like online commerce. So there will always be a deeper, darker hole where predators can hide, meanwhile everyone else's privacy will be in jeopardy.

Second, it's crucial that we critique not just the technology that would be deployed, but the people deploying it. Databases of CSAM are extremely sensitive in nature and obviously can't be reviewed by the public. As a natural consequence, it is impossible to independently verify that other types of media are not added to the database. A system that scans for CSAM today can be used tomorrow to detect and report criticism of the government, or its police force.

We don't have to look far into the past or beyond Europe's borders to find examples of data misuse. The [Luca app](https://www.berlin.de/en/news/coronavirus/6493422-6098215-luca-app-how-the-digital-contact-tracing.en.html) which was intended strictly for COVID19 contact tracing in Germany was [illegally accessed by police](https://www.washingtonpost.com/world/2022/01/13/german-covid-contact-tracing-app-luca/) early in 2022 to investigate a suspicious death.

Finally, and perhaps most horrifying of all, is the risk that in trying to stop the distribution of CSAM, the agencies carrying out this task might inadvertently reveal information from their database of known material. [Model-extraction attacks](https://arxiv.org/abs/2108.13873) are a technique for reverse-engineering machine learning (ML) models, such as the ones used to detect CSAM videos and grooming text in the EU proposal. By making a large number of queries against an ML system and observing the results an attacker can learn what qualities it searches for. With that information it becomes possible to apply those qualities to synthetic images, producing results that are remarkably similar to those in the secret database of training data. The website [this person does not exist](https://thispersondoesnotexist.com/) serves as an example of the level of detail that can be expected.

Our position, and the consensus of experts on the matter, is that client-side scanning is far worse than a _slippery slope_ which _might possibly lead to abuse_ at some distant date in the future. Its risks are so numerous and its safeguards so inadequate that it's fair to question whether it could ever be safely deployed.

## What this law will could mean for CryptPad's future

Client-side scanning is fundamentally incompatible with privacy. It cannot be implemented responsibly, and its adverse affects will further entrench existing inequalities in society. Knowing this, it would be unethical for us to deploy such a system against our own users.

If this proposal passes its vote and becomes mandatory within the EU we will most likely have to move away from acting as a service provider. This would eliminate revenue which accounts for approximately one third of our budget and put extraordinary pressure on our team when we are already severely under-resourced for the goals we are trying to accomplish.

On a positive note, CryptPad is better prepared for this eventuality than many other platforms by virtue of being open-source. Anyone with the required expertise can host a server, meaning that even without active involvement from our team, our work can provide continued benefits to the public, which is our ultimate goal regardless of whether Europe enforces indiscriminate surveillance. To that end, we recently compiled [a list of publicly available CryptPad instances](https://cryptpad.org/instances/) hosted by trustworthy third-parties, and we welcome new additions to this list.

In the longer term, however, being unable to offer our platform as a commercial service will make it very difficult for us to continue improving the software at our current pace. We will become increasingly dependent on [donations](https://opencollective.com/cryptpad "CryptPad's open collective campaign") to continue, and it's possible that our opposition to this policy will affect our eligibility for research projects funded by the European Commission.

In recent years Europe has earned a solid reputation as a welcome home to leaders in the field of privacy-preserving technologies. As such, we are far from alone in opposing this legislation (see statements from [The European Pirate Party](https://european-pirateparty.eu/chat-control-leaked-commission-paper-eu-mass-surveillance-plans/), [the Chaos Computer Club](https://www.ccc.de/en/updates/2022/eu-kommission-will-alle-chatnachrichten-durchleuchten), [Tutanota](https://tutanota.com/blog/posts/eu-surveillance-csam/), [Protonmail](https://protonmail.com/blog/joint-statement-eu-encryption/), [EDRi](https://edri.org/our-work/protecting-digital-rights-and-freedoms-in-the-legislation-to-effectively-tackle-child-abuse/)). I'm confident the people working to strengthen safeguards for privacy will find ways to continue, even if they are forced to do so elsewhere. What is less certain is how much damage will be done to people's trust in elected officials and public institutions. It's vital that we organize to defeat this legislation, and work to strengthen institutions so that such a proposal is never considered again.

> Given recent experience in multiple countries of hostile-state interference in elections and referenda, it should be a national-security priority to resist attempts to spy on and influence law-abiding citizens. CSS makes law-abiding citizens more vulnerable with their personal devices searchable on an industrial scale. Plainly put, it is a dangerous technology. Even if deployed initially to scan for child sex-abuse material, content that is clearly illegal, there would be enormous pressure to expand its scope. We would then be hard-pressed to find any way to resist its expansion or to control abuse of the system.
>
> from [The Risks of Client-Side Scanning report](https://arxiv.org/abs/2110.07450)
