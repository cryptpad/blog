
## Installation

`npm -i`

## Development

`npm run dev`


## Adding a post

1. Create a markdown file in `posts/` 
2. Add relevant YAML metadata in front matter

```YAML
---
title: The title of the post
date: 2022-11-17
author: First Last
lang: fr # (optional, "en" is default)
summary: A one or two sentence summary of the post, or the first few lines of text. used in listings and in opengraph previews # optional but recommended
cover: /images/forms_chart_timeline.png # used in listings and in opengraph previews, optional but recommended
tags:
- list
- of 
- tags with spaces
--- 
```
