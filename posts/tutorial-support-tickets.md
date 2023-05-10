---
title: How to use the support tickets
date: 2023-05-10
author: "Mathilde Grünig"
summary: A simple tutorial about CryptPad integrated support tickets system
tags:
- tutorials
- usage
- how to
cover: /images/screenshot-menu-support.png
---

Hello!

Today I would like to present you an interesting, but not well known feature: support tickets.

This tutorial is separated in two chapters. The first is dedicated to **end users**, with a general overview of the feature, how it works and why is it useful. The second is aimed at instance **administrators**, explaining how to enable it and why you should do so.

## End users

The support ticket functionality is [described in our user guide](https://docs.cryptpad.org/en/user_guide/user_account.html#support) as "a secure communication channel with the administrators of the CryptPad instance". It allows you to communicate privately, using the same end-to-end encryption as your CryptPad documents, with your instance administrators. This way, you won't risk leaking personal information, like when using email.

You can access the support page by using the user menu on the top right of the interface (click your avatar).

![menu screenshot](/images/screenshot-menu-support.png)

The support page is separated into 3 tabs:

- Existing tickets
- New ticket
- Debug data

### Debug data

It shows you the information included in the support tickets you submit. Like everything else, it's all encrypted and only your instance administrators will be able to access this data. Note that doesn't give access to any of your documents.

![support debug data screenshot](/images/screenshot-support-debug-data.png)

Here is the list of the data shared and its purpose:

#### Names
The current name and username you specified for your account.

#### Identifiers
Drive, channel and notification unique identifiers.

#### Keys
Public curve & key used for encryption.

#### Quota
Your total storage and how much is currently taken.

#### Web browser
User agent, vendor & appVersion let us know what web browser you are using and which version.

#### Screen
Width & height, allows us understand the kind of device you are using.

#### Block location
To verify your credentials exists on the server in case of login issue.

#### Teams
List the teams you are member off and some information about them.

### New ticket

You can create a new ticket by selecting a category, type in a subject and your request. Note that your instance administrator languages are shown at the top of the page. In case of need don't hesitate to use an online translation system.

![support ticket subject screenshot](/images/screenshot-support-ticket-subject.png)

After selecting the category, some guidelines are shown. You'll learn what type of information your instance administrators will likely require to be able to help you.

After typing your request and sending your ticket you are taken back to the existing tickets tab.

### Existing tickets

Here you see a list of your tickets. You can scroll through them to see the responses from your instance administrators.

![existing tickets screenshot](/images/screenshot-support-existing-tickets.png)

If needed, you can add more information to your first message by clicking the REPLY blue button.

### Notification

![notification response screenshot](/images/screenshot-notification-response.png)

When receiving a response from your instance administrators, a notification is sent to your account. The number next to the bell on the header will increment. When clicking it, you'll see a message telling you that one of your support tickets have been answered.

![support ticket response screenshot](/images/screenshot-support-existing-ticket-response.png)

Going back to your existing tickets tab you can read the response from your instance administrators. If necessary you can answer them and if your request has been fulfilled close the ticket yourself. Or just wait for them to acknowledge your last message and close it themselves.

Note that you can add attachments to your message. Like a screenshot for example.

![closed support ticket removal screenshot](/images/screenshot-support-closed-ticket-remove.png)

When the ticket is closed it still appears in your existing tickets list. If you want, you can use the red button at the end to remove it.

## Administrators

