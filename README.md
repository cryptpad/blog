# CryptPad Blog Generator

This project is built using [Hexo](https://hexo.io/) for [the CryptPad Blog](https://blog.cryptpad.fr).

## Install hexo

`npm install -g hexo-cli`

## To create a new post:

`hexo new "your blog title"`

Then edit the resulting file, located at `./source/_posts/your-blog-title.md`

## To generate the static code

`hexo generate`

Then git add `./public/`

## Push to the server

`git remote add blog ssh://cryptpad@blog.cryptpad.fr/home/cryptpad/blog.git`
`git push`

## Pull to the production directory

`ssh cryptpad@blog.cryptpad.fr 'cd ~/blog/ && git pull'`
