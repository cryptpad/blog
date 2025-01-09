---
title: The outage of December 8th, 2020 - a postmortem
date: 2020-12-16 15:30:00
author: Aaron MacSween
tags:
- storage
- postmortem
cover: /images/3000-connections.png
summary: On December 8th, 2020 a malfunction in the water-cooling system at a data-center in Roubaix, France caused an unrecoverable error in the physical machine which hosts CryptPad.fr.
---


On December 8th, 2020 a malfunction in the water-cooling system at a data-center in Roubaix, France caused an unrecoverable error in the physical machine which hosts CryptPad.fr. The service was unavailable for approximately 27 hours while we diagnosed a corrupted OS, provisioned a new server, and migrated user data to the new system.

## What happened

Our team works remotely across three different timezones, so for the sake of simplicity I'll summarize the timeline of the service outage in Central European Time (CET) using a 24-hour clock.

### December 8, 05:30 - Server update deployed

I occasionally start my working days very early in the morning when we have as few users connected as possible. On the days where a server restart is necessary, I do it at this time to minimize the number of active users that might be inconvenienced by the momentary service interruption.

During the process of deploying a minor patch to optimize how the service loads and evicts document metadata I noticed that our monthly full-disk backup was running. We run a less intensive incremental backup on a daily basis, but having a regular full-disk backup ensures that restoration does not become increasingly difficult over time.

We've been breaking our records for the highest ever number of concurrent users on CryptPad.fr on a regular basis, so I tend to pay close attention to how our server is performing and how small changes in our code affect its performance.

![A record number of concurrently connected clients, as reported by our admin panel](/images/3000-connections.png)

My colleagues hadn't started their shifts yet, but I left a message informing them that the server would probably be under more load than usual. We were considering also deploying an update to our client code, but we usually avoid doing so on backup days to help ensure that things go smoothly.

![Me jinxing our server for the day](/images/poor-server-performance.png)

### December 8, 12:42 - CryptPad goes down

CryptPad is developed by a company called [XWiki](https://xwiki.com/). We host everything using virtual machines provisioned on the same dedicated physical servers as the rest of the company's infrastructure. Performance metrics and monitoring for our other sites suggests that the host machine did not fail instantly, rather, its performance degraded over a relatively short period of time. Some services failed sooner as the host system tried to de-prioritize less critical systems.

The last line in our server's log was written to the disk at 12:42. I was away from my desk to eat a meal, so I didn't notice that anything had gone wrong. I returned to find some user reports sent at around 13:00 that the service had been unavailable for some time. We occasionally receive such reports that turn out to be user error (typos in URLs or DNS problems), but in this case it was easy to confirm as a systemic problem since my CryptPad tabs were also disconnected.

My first assumption was that an error in the the code I'd deployed earlier in the day that had caused the server to crash. I tried to log into our servers from my terminal with no success, then tried to ping the server's domain name, then its raw IP address, at which point I realized that the machine was completely powered down or otherwise unreachable.

The last time we were surprised with this kind of outage was in [November 2017](https://www.theregister.com/2017/11/09/ovh_datacenters_go_titsup/) when a power outage and a generator failure took several data-centers completely offline. That outage lasted 3.5 hours, which seemed very bad at the time, but I was expecting something similar.

### December 8, 13:35 - Infra is on it

Since the same physical infrastructure hosts a large number of sites the outage had been noticed by many of our company's employees almost instantly. We have lots of monitoring in place to send warnings when things are performing poorly (or not at all), but I learned via our company's internal chat service that at least one of our physical servers had had a critical failure and that Kevin (our resident infra expert) was working on it. CryptPad's track record for uptime until this point was very good, and most of that was due to Kevin, so I tried to leave him alone so he could focus on diagnosing and possibly fixing the problem. Since there didn't seem to be anything I could do on that front to help the situation I started to respond to the related GitHub issues and messages in our public chat channel to inform our users what was going on.

At this point I also noticed several messages from my colleagues congratulating me on my five-year anniversary at the company. I'd forgotten the date, and grateful as I was for the wishes, this wasn't how I'd expected to celebrate the milestone.

### December 8, 15:00 - Host machine comes back online

By 15:00 the physical server that had gone offline had been powered back up. This meant that VMware (the software we use to host many virtual machines on one very powerful machine) was running again, though some more work was needed to bring many of its hosted VMs back online. Kevin immediately began running a range of integrity checks to confirm that the hardware was functioning correctly before relaunching services. Some VMs that required fewer resources were able to be re-launched very quickly, but CryptPad requires more storage than most of the wikis we host, and disk checks tend to require more time than other diagnostics.

At 15:40 these disk integrity checks were interrupted when one of the data-center technicians (who I'm sure was also having a bad day) had to take the server back offline to transfer our hardware to a new location in the same building. Access was restored just a few minutes later, but we had to restart our integrity checks.

### December 8, 16:20 - First disk integrity check completes

Forty minutes after the manual intervention, the first of three disk checkups had completed. VMware was reporting that all systems were operational, however, the VM that usually hosts our API server was failing to boot. Kevin was able to launch a Debian rescue system from a live disk and mount the system for inspection, but there was still no obvious indication why the system wouldn't boot. He proceeded to launch checks for the remaining two disks while he continued to search for the cause of the failure.

### December 8, 18:30 - Initial failure traced to a cooling malfunction

Throughout the duration of this downtime Kevin had been on and off the phone with the data-center technicians getting updates about what had happened and whether we should expect any further problems. By 18:30 we were informed of the cooling system's malfunction. While it was somewhat comforting to know that the problem had nothing to do with code we'd written, it was also frustrating to be reminded that there will likely always be physical events like this that we can neither control nor predict.

![](/images/physical-internet.png)

As twitter user [@RimaSghaier](https://twitter.com/RimaSghaier/status/1336398196109697025) noted, the internet is still _very physical_.

### December 8, 19:30 - File transfer commences

By 19:30, between myself, Kevin, Ludovic (the company's CEO), and one of Ludovic's friends who has some more experience with the intricacies of bootable filesystems,  we'd made no progress diagnosing why the affected VM would not boot outside of the environment of the rescue disk. We had access to all the system's files and all of the integrity checks had passed, but there seemed to be problem with the root filesystem. We decided that the safest thing to do was to provision a new VM and begin transferring the relevant files. We could interrupt the process if we discovered the reason for the failure, but it was already late in the day and we had no promising leads.

It took only a few minutes to provision a nearly identical VM and we immediately began transferring files via the data-center's internal network. Unfortunately, there was around 750GB of data to transfer at a variable rate that did not seem very promising.

Until this point I'd been very hopeful that _at any minute_ we would find some trick to get the original server back online. As it became increasingly apparent that this was unlikely and that we'd need to wait for the file transfer to finish we shifted our focus to damage control.

The API server that hosts our database and Nodejs server had been offline, but we actually serve our static assets (HTML, Javascript, etc) from a different machine that had stayed online. I'd been distracted by the actual system outage and hadn't thought to update our front-end to inform all our users of what was going on, though I had been posting to our [Mastodon](https://social.weho.st/@cryptpad) and [Twitter](https://twitter.com/cryptpad) accounts.

I hacked together and deployed some very basic HTML as quickly as I could, explaining what was happening and directing users to our social media for updates. This was deployed by 19:43.

![CryptPad's down page](/images/cryptpad-down-page.png)

### December 8, 20:00 - I try to get some sleep

Finally, after about 7 hours of downtime and a 14.5 hour shift on my part, we left the servers alone to continue their work and decided to get some rest for the following day. We expected the file transfer to take at least 10 more hours to complete, so I set my alarm for the following morning and called it a day.

### December 9, 16:14

December 9th was not especially eventful. I spent most of the day idly monitoring the progress of the network file transfer. I was far too distracted to be productive with anything else, and anyway it seemed prudent to save my energy for when the transfer completed.

By about 13:30 the transfer was 90% complete and I began to pre-configure as much as possible on the new system so that we could bring everything back up as quickly as possible. I prepared and reviewed a list of final tasks with Kevin and Yann in the final 30 minutes of the transfer, and we started working as soon as it finished.

We were able to complete the system's setup in around 20 minutes, including a last-minute configuration fix to restrict the service to our IP addresses before we launched it. This restriction allowed us to access CryptPad as normal before anyone else. We took about ten minutes to test the platform, loading any documents we'd been editing leading up to the crash and confirming that everything was behaving as expected.

Finally, by 16:14, after a bit more than 27 hours of downtime, we removed the IP address restriction and removed the downtime notice I'd deployed the evening before.


## Difficulties and lessons learned

I'll start by saying in very simple terms that _this experience **sucked**_. I know it was very frustrating for our users who couldn't access their documents while the server was offline. I certainly had a terrible two shifts. It was stressful for everyone on our team, and I suspect it was similarly unpleasant for the data-center technicians as well.

It should be more obvious given the root meaning of the word _internet_, but we all depend on many systems functioning to maintain our daily routines. The majority of our users only contact us to report bugs. Kevin and I mostly end up chatting when one of us notices irregular server behaviour. We only contact OVH when our servers have problems, and they probably don't deal too much with their municipal electricity and fuel providers except when their power goes out and they fall back to using generators. _We are most aware of the systems that sustain us when they break_.

On a positive note, though, I was pleasantly surprised by how understanding people were about the situation. One of our paying users cancelled their subscription, but it seems the outage served to remind many people that there are humans working on this project, and so we've actually seen an increase in the rate of donations and subscriptions in the week since. We greatly appreciate everyone's generosity!

Some users seem to have understandably lost some confidence in our platform, as we've seen slightly fewer users at the usual peak hours (2700 concurrent connections instead of 3000). On the other hand, it seems like the downtime page led to a significant increase in our follower count on social media.

Many of our users rely on CryptPad as a persistent home for their documents, and in these cases downtime is very inconvenient. During the outage, however, I learned about [this software](https://github.com/tosterkamp/random-redirect) which randomly redirects users to publicly hosted instances of open-source software platforms. If you use CryptPad as a place to collaborate rather than a place to store documents, then you could try [cryptpad.random-redirect.de](https://cryptpad.random-redirect.de/) to find alternatives. If you host a CryptPad instance you could even inquire about adding your server to the list. One of the great things about open-source software is that failures that affect one server or service do not need to have global effects.

Despite the positive aspects of our community's response to this event, I regret that it took so long migrate to a new machine. The simple fact is that while we (mostly Kevin and Ludovic) have put in a lot of effort to making sure that our hosting infrastructure is reliable, we were unprepared for the task of rapidly migrating our entire database to a new machine. We're hosting about six times more data now than we were at the start of the year. Until now we've had little cause to consider the increasing difficulty of managing this growing dataset and with everything else that has happened this year there has been little opportunity to do so. This event made it abundantly clear that we're going to have to find the required time.

## What we plan to do

It would be an understatement to say that I have a bit of an idealist stance when it comes to software. This is why I work on open-source, privacy-preserving tech. It's terrible that modern, web-based software is as fragile as it is. That said, the alternative of emailing static documents to colleagues (or between devices) also makes it difficult to be productive.

It's a bit ridiculous that a broken cooling system in northern France can mean that our 20,000 daily active users lose the ability to edit or even read their documents for more than a day. More frustrating is the fact that we were very nearly in a good position to mitigate many of the adverse effects of this outage. We've been working on some new _offline-first_ functionality in CryptPad over the last few months and, as noted above, we were considering deploying the first phase of these improvements the day of the outage.

Our first offline features were deployed yesterday as a part of our [3.25.0 release](https://github.com/xwiki-labs/cryptpad/releases/3.25.0). Now, every time you load a document in CryptPad you're also populating an advanced cache in your browser. For now this only has the effect of reducing the total time to load cached documents, since we still wait for confirmation from the server that this is the most recent version of the content before removing the loading screen.

Our next step will be to merge a branch of our code which will instead load and display the last known state of any document in your local cache in offline mode, regardless of whether you're able to reach our database server. This would have alleviated some of the inconvenience of our outage, since users were still able to load the platform's HTML and JavaScript that would have at least let them access cached documents.

The next major feature will be the use of [service-workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to enable browsers to use very advanced caching policies and load our client-side code even while entirely offline, allowing full access to cached documents under almost any circumstance. We expect to deploy these updates in early January 2021 as a part of our upcoming _4.0.0_ release.

[One of my favourite academic papers](https://www.cs.jhu.edu/~huang/paper/grayfailure-hotos17.pdf) defines the term **gray failures**, in which well-intentioned attempts to introduce redundancy into online systems can paradoxically increases the likelihood of service degradation or interruptions. In the last few weeks both Amazon and Google (some of the richest companies on the planet, in case you haven't heard of them) have experienced severe service outages. There are very few easy answers in this area, but we're going to learn from this situation and work on solutions that would have helped at least let us recover more quickly.

If the next data-center failure happens in another three years I hope it will only last a small fraction of the time, and that our software will be so resilient you'll hardly notice. In the meantime our team greatly appreciates all your support!

