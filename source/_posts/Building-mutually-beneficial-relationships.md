---
title: Building mutually beneficial relationships
date: 2017-06-02 13:52:47
author: Caleb James DeLisle
tags:
  - Open Source
  - Cloud
  - Ethics
---
 
*People hosting instances of CryptPad should read at least the
[Changes in CryptPad](/2017/06/02/Building-mutually-beneficial-relationships/#Changes-in-CryptPad)
section*
 
*Thanks to Scott Alexander for some of the
[ethical foundations](http://slatestarcodex.com/2014/07/30/meditations-on-moloch/)
of this post.*
 
---
 
You ever wonder why Open Source software always seems to be slightly harder
to use and slightly buggier and slightly less *polished* than proprietary
competitors?
 
How about this: Why is it that good people who want to make good things somehow
end up making evil things for evil corporations which sell them to other good
people who would (presumably) rather buy good things.


## It's all about incentives
 
It's hard to talk about incentives without sounding like a miserly tool, but if
we're going to hack ourselves out of a situation that nobody really wants to be in,
we're going to need to understand them pretty well.
 
* Why is Open Source habitually *90% of the way there* ?
* Why is Facebook more addictive than it is useful ?
* Why is it that when you get something for free, even from a well funded
government program, it's reliably worse than something you buy?
 
It's all about incentives.
 
### In a restaurant, you're the customer
 
I love going to restaurants. I have no car and few possessions so restaurants are
the way I spend my income. Not only do I love food but I love the relationship
which I have with restaurateurs. When I walk into a restaurant, I want to be fed
delicious food and they want to be paid, not only that, they want me to be happy
so I will return many times and bring my friends. I want them to be happy so they
will give me bigger portions and maybe a little dessert on the house. Our
incentives are aligned perfectly. We are practically a team.

### In a soup kitchen, you're just a user

It is hard to deny the importance of soup kitchens to the fabric of society.
Part of what makes us able to claim to be civilized is the fact that we don't let
people simply die if they're down on their luck. Soup kitchens, however, are not
restaurants. When you walk into a soup kitchen, you are generally greeted kindly
but there is a subtle distinction from a restaurant, at a restaurant you're the
customer and at a soup kitchen you're just a *user*. Many soup kitchens are
organized around religious groups and  evangelizing their belief is a significant
part of their motivation, but even secular organizations are motivated by some
sort of a higher calling.

### Open Source is a soup kitchen

I've been developing Open Source both professionally and personally for 7 years
and I'm going to tell you something that many Open Source developers won't admit.
Open Source software is not made for you. Sometimes Open Source developers are
motivated by the Free Software ideology and they imagine their code as
transforming the world, sometimes they just want to solve some problem for
themselves and they give away the resulting code. Open Source software is almost
never developed for the simple purpose of making another person's life a little
easier.
 
## If you aren't the customer you're the product
 
This aphorism has become popular with the rise of ad-tech and social network
websites. The phrase invokes an image of free services coming like free grain
because you are, in fact, the pig on his way to slaughter. In some way this is
true, Silicon Valley business models are becoming disturbingly like human
farming.

However, the phrase also invokes an image of an evil entrepreneur plotting to
enslave humanity by creating a slick social network. If 1 in 1000 companies is
successful then logic implies there must be thousands of evil entrepreneurs
running around everywhere. If this is true then where are all of the failed
evil plotters? I've never met an entrepreneur who was anything less than an
aspiring saint.
 
I think the real reason why social networks become human farms is because people
don't want to pay for development of web services and stuck between a successful
human farm and a failing soup kitchen, entrepreneurs begrudgingly choose to farm.
 
## Breaking out
 
If we're ever going to stop living in a world of farms and soup kitchens, we're
going to need to get serious about incentives. Part of my intention in starting
the CryptPad project is to build something that is not a farm nor a soup kitchen.
I want to have a mutually beneficial relationship with every one of CryptPad's
users, including you. I don't want to be a charity worker beholden to an NGO or
a post office clerk drawing a paycheck from the state. I want you to be my boss,
I want to obsess about making your life better, I want fair exchange of value
and aligned incentives.
 
## Changes in CryptPad
 
[As you may already know](/2017/05/23/CryptPad-use-it-love-it-support-it/),
cryptpad.fr now limits your data storage and allows you to buy an account which
will raise that limit. The code for limits and accounts is also in the CryptPad
codebase and turned on by default. If you are installing CryptPad, you have
three choices.

1. Leave it exactly as it is: People will be limited to 50MB of storage and they
will see a *Support CryptPad* button. In the development time this donated money
buys, we will pay special consideration to the needs of CryptPad admins like you.
2. Share the revenue: If you specify some configuration parameters and send us
an [email](mailto:sales@cryptpad.fr), the donation button will become an
*Upgrade Account* button, allowing them to take a plan with additional storage
quota. When people upgrade their account on your server, we will credit you 50%
of the revenue earned. This helps us pay the cost of development and helps you
pay the cost of hosting.
3. Disable the donate button: If you do this, we hope you will help CryptPad in
some other way such as by taking an on-premises support contract.

If you run a public CryptPad instance, please don't increase the 50MB per user
storage limit. This limit is what makes people subscribe and what pays for
CryptPad development. Running a CryptPad instance which offers a "better deal"
is effectively using the project against itself.

Finally, new versions of CryptPad always check for new or expired accounts from
our account server. We have added a parameter called *adminEmail* which will be
sent along with the domain and version of CryptPad you're running. This way we
can notify you if we're aware of any a serious problems with your CryptPad
instance. We take your privacy seriously and will never sell your email or send
you marketing spam. If, however, you want to keep your CryptPad instance
completely  hidden from us, you can set this parameter to **false** and it will
never query the account server.
 
## Coming next
 
Our objective is to help you collaborate, stay organized and get things done
faster and easier. We want to provide maximum value to you and we want you to
provide value to us so that we can continue doing it. As was said in the
previous post, the big issues which we are planning to tackle soon are:
 
* File upload for PDF and image embedding
* Text coloring based on the authors of the document
* Workgroups for team collaboration
* Zero Knowledge spreadsheets
 
As always, we will be continuing to put great effort into understanding your
problems, how you go about solving them, and how we can make little changes to
make CryptPad fit your needs better.
 
Caleb
 
