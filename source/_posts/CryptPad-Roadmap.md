---
title: CryptPad Roadmap
date: 2018-07-13 12:41:04
author: Caleb James DeLisle
tags:
  - Roadmap
  - Financing
---
CryptPad was started as an experimental platform as part of the [OpenPaaS::NG research project](http://ng.open-paas.org/). Since then it has developed into a suite of editors for many different types of documents, all without ever leaking the content that you edit to the server or the server operators. Now, in order to keep the project moving, we need your help.

We have created a roadmap of the features which we would like to develop over the next year and **we're hoping to raise 60,000€** to finance it. Fortunately, **XWiki SAS is willing to match your donations euro-for-euro**. XWiki SAS is a company with open source at its heart and it was the company where CryptPad was first envisioned. XWiki SAS normally sells days of development time at about 1,000€ each, but since this project is dear to our hearts, we are also discounting the structure costs (things like the office and business taxes) for this project. **We believe in CryptPad, but in order to succeed, we need you to believe in it too**.

The following is a 48 week roadmap which will fund one developer to work on CryptPad. You can donate to this roadmap on https://opencollective.com/cryptpad or on https://accounts.cryptpad.fr/#/donate, if you would like to make a donation by wire transfer or by cryptocurrency, please get in touch with us at [sales@cryptpad.fr](mailto:sales@cryptpad.fr) and if you are involved in EU research projects and would like to work with us and this cutting edge Privacy Enhancing Technology, please contact [research@xwiki.com](mailto:research@xwiki.com).

# Goal 1 - Spreadsheets & Office Documents
CryptPad is excellent for quick editing of meeting notes and plans, and it is able to store and view images and PDF files, but it does not allow editing of more complex types of files such as spreadsheets and word documents. Fortunately there is an open source web-based editor called OnlyOffice which allows editing these complex document types, but it is a highly complex piece of software and we will need time and effort to integrate it into CryptPad. Even after it is fully integrated, the conversion of xlsx files to OnlyOffice's internal format will still need to be carried out be specialized software either on the user's computer, or on a cloud service (not Zero-Knowledge!). However, we think that editing of spreadsheets and other documents in OnlyOffice is achievable without leaking any of the content back to the CryptPad server, so your spreadsheets will remain a secret.

* Spreadsheets, documents and presentations in CryptPad
* Realtime collaborative editing of office documents
* No import/export for now, this will come later
* No embedding of images from CryptPad until later

We expect office file editing will take **30 days, a cost of €7,500**

# Goal 2 - Comments on Rich Text Pads
Many people use a workflow which includes the use of comments in a document. This is already standard in Google Docs and we need to be able to support it in CryptPad, in order to add comments we will need to add some HTML into the document without causing any problems for CKEditor (our rich text editor) and without causing it to be treated as part of the pad and synced over the wire.

* In the rich text pad, you will be able to add a comment by selecting some text, right clicking it and clicking "add comment"
* Comments will be shown in the right margin and associated with the text which highlighted them
* Comments will be able to be replied to, or "resolved" (they will no longer be shown, but still be visible in history of the document)
* If you delete the text with which a comment was associated, the comment will automatically be resolved

We expect Comments on Rich Text Pads to take about **10 days of development, a cost of €2,500**

# Goal 3 - Contacts and Messaging
To be able to easily share documents and get the attention of a person, we would like to implement Contacts and Messaging in CryptPad, currently we have a rudimentry implementation which allows chatting with contacts, but the contact request feature needs to be stabilized with a better process for contact requests, better integration with pad-sharing menu and more clear notifications. We would also like to add a small chat window in each document so that everyone working on that document can chat about it. Finally, we would like to add the ability to at-reference someone when writing a comment on a pad, which will cause a message to be sent to them.

* The share menu will include a list of contacts with whom you can share the pad
* You will be able to email somebody a link which will invite them to become a contact of yours
* Messages (pads shared with you, comments referencing you) will be shown in the upper-right when you come to CryptPad
* When writing a comment (Goal 2), you will be able to at-reference a contact (with auto-complete) and they will be notified
* Replying to (and resolving) a comment will also cause the author of the comment and anyone who replied to be notified

We expect Contacts and Messaging to take about **20 days of development, a cost of €5,000**

# Goal 4 - Shared Drive
When planning a significant project, often there is the need to have many pads for the different aspects of the project. Currently all of the collaborators on the project must share all of the pad links with each other and they must each organize them in their personal drives. Personal drive organization is a nice feature because it allows each person to organize their work the way that makes the most sense to them, but sometimes it is more advantageous to have a folder in everybody's drive which contains pads that are shared between all of them.

Shared folders are complicated to implement. Unlike your personal drive which is just one realtime object (essentially it's a pad), each shared folder must be a separate realtime object. Also, like a user account, a shared folder must be able to own pads, otherwise pads in that folder which are not in anyone's personal drive risk being deleted by the server as per our expiration policy.

* You will be able to create a shared drive, just like you create a pad
* In your drive, you will be able to explore inside of the shared drive and organize it just like a folder
* You will be able to share the link to the Shared Drive with other people, when they click the link, it will import the shared drive into their personal drive

We expect Shared Drive to take about **20 days of development, a cost of €5,000**

# Goal 5 - Federated Messaging
There are about 150 CryptPad instances in existence, operated by people and organizations who want the privacy which CryptPad offers and also the additional security guarantee, decentralization and customization of their own instance. We want to support this usage while still allowing people on one instance to chat and message people on another instance. We want to support the ability to add contacts (Goal 3) with people registered on a different instance. You will then be able to at-reference them in a comment or share a pad with them using the share menu as you would with a person using the same instance as you.

* When you are on a pad or shared folder on somebody else's instance, you will be able to import it to your instance
* Clicking a link to become a contact will work, even if you are registered on a different instance
* Once you have made a contact, all features in Contacts and Messaging will function across instances

We expect Federated Messaging to take about **30 days of development, a cost of €7,500**

# Goal 6 - Better permissions
Initially, all pads were "open" pads, meaning they were accessible to anyone and there was no owner. Open pads are deleted automatically when they have not been touched in 3 months, unless a registered user has a reference to them. Once we added the ability to have registered users, we needed to make sure that users would not have the pads in their drive disappear off the server, so we implemented what we call pinning. Pinning is a way of claiming that a pad is important to you and that it should not be deleted. However, this left a problem, still pads had no owner, meaning nobody had the right to delete them. Once a pad was created, there was no way to delete it which was a serious problem for pads contining confidential information.

In order to allow pads to be deleted, we implemented _owned pads_, and the splash screen registered users now see when they create a new pad. So now you can delete it from the server when you are done with it. However, two problems remain:

1. The owner of a pad is the person who created it and there is no way to add owners or share ownership
2. There is no way to revoke access once it has been given

In order to solve #1, we will add the ability to share ownership with other people. For solving #2 in a Zero-Knowledge compatible way, we will need to introduce the concept of redirects, links which re-direct to the actual ID and key of the pad. Revoking access will be a matter of changing the pad's ID and then updating all of the redirects which are *not* to be revoked. This will allow the creation of pads which can only be viewed by registered users who are invited. Even view-only links to a pad will be able to be revoked by the owners of that pad.

* Pads which are only accessible by people invited, or members of a group
* Grant and revoke access
* Create new links to a pad, and revoke them

We expect better permissions will take about **40 days of development, a cost of €10,000**

# Goal 7 - Color-by-author
After something is typed into a pad, the person who typed cannot be determined, we would like to change this and allow the etherpad-like behavior of shading the text differently based on who typed it. This will require getting the author from each patch in the stream of changes to the pad and making it available to the pad structure. In CryptPad there is a special message type which is called a checkpoint, it replaces the entire pad so that when a new person arrives in the pad, they don't need to download more history than the previous 2 checkpoints. We will need to take special care to preserve the editor of each piece of the document when we create checkpoints, finally we will need to be able to shade the text based on it's author, without either messing up CKEditor or causing the shading to be sent over the wire as if it were part of the pad.

* When an option is selected, text in the rich text app will be shaded with a color based on the author of that text
* The user list will show users who have joined and then left again, along with the color of their changes
* Right-clicking on the text will show the name of the person who wrote it (including whether they are one of your contacts)

We expect Color-by-author to take about **20 days of development, a cost of €5,000**

# Goal 8 - Offline and Suggested Edits
Like color-by-author, Offline and Suggested Edits is a reasonably complicated feature to implement. When working on a complex document, it is nice to be able to propose a change without actually changing the document, or make a change while disconnected from the internet and then have someone (maybe you) merge it later. However, this is complicated because when it comes time to merge that change, the document may have significantly changed, necessitating a smart merge.

Rich text pads in CryptPad are stored in a quazi-html representation so patching and merging is anything but simple. The operational transformation done normally on pads takes advantage of the fact that divergences are small and infrequent so merging usually works ok. This feature will require development of a smart merging algorithm for the rich text app as well as for any other app for which one would like to have suggested edits and offline.

* Suggestion mode, your change is shown shaded and can be accepted or rejected, it will be attached to a comment so you can explain it
* When offline, you are automatically put into suggestion mode instead of read-only mode

We expect Offline and Suggested Edits to take **40 days of development, a cost of €10,000**

# Goal 9 - All the little things
Even though it doesn't get a lot of press, a significant amount of time is spent just fixing bugs, handling pull requests and doing releases. We want to keep CryptPad a community project and so we want to make sure that when someone makes a pull-request to the project, that request can be properly handled. Also, because CryptPad makes such use of modern HTML5 features, new releases of Chrome and Firefox typically introduce new bugs in CryptPad. There is rarely enough time to handle all of the issues which crop up, but we need to allocate time to handle some of them. This roadmap allocates the time of one person for 48 weeks, which means 24 releases, we need at least 1 day per release just to perform the release and write the release notes and fix miscellanious issues which appear.

* Keep on fixing bugs in CryptPad 
* Handle pull requests and make releases

We expect all the little things to take **30 days of development, a cost of €7,500**