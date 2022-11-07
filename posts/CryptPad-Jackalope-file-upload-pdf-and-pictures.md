---
title: CryptPad Jackalope - File Upload, PDF and Pictures
date: 2017-06-21 12:48:48
author: Caleb James DeLisle
tags:
- pdf
- file
- upload
- embed
cover: /images/CryptPad_drive_with_upload.png
---

Yesterday we released CryptPad v1.9.0 Jackalope, we have some exciting new features
which we've been working on for a long time. As part of the
[UCF project](https://github.com/UCF-project) we have implemented a Zero Knowledge
`media-tag` in CryptPad for displaying and downloading encrypted files stored in
CryptPad. Starting now, you can upload files by clicking the upload button or
dragging them into your CryptDrive. You can also view pictures and PDF files in
CryptPad and you can drag-and-drop pictures **directly** into presentations. In the
next release we will hopefully be adding drag-and-drop pictures into the pad.

![CryptDrive Upload](/images/CryptPad_drive_with_upload.png)

## Filenames

We also made a significant but less visible improvement to the CryptDrive. When you
make a new pad in CryptPad, it has a *title*, which anyone in the pad can change, and
it has a *filename* which it how the pad is shown in your CryptDrive. Because anyone
at any time can change the *title* of a pad, the only way to know the titles of all
the pads in your drive is to load each and every one of them which would take a long
time. But the *filename* is your unique way to refer to a pad, it lives only in
*your* CryptDrive and it is the same no matter what *title* someone gives to the pad.

Now the CryptDrive UI shows only one name for a pad, this name is just the *title*
of the pad at the last time you'd accessed it **unless** you assign it your own
*filename*.

## Slide Preview

When you're using the CryptPad slide app to make a quick presentation, now you can
see your presentation in the righthand pane while you type. Since presentations are
written in Markdown, this means you get a live action preview of what your
presentation slides are going to look like.

![Slide Preview and Drag & Drop](/images/CryptPad_slide_upload_and_preview.png)

## Try it now

Head over to [cryptpad.fr](https://cryptpad.fr) and give CryptPad a try !
