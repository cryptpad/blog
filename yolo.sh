#!/bin/bash
git push ssh://cryptpad@blog.cryptpad.fr/home/cryptpad/blog.git
ssh cryptpad@blog.cryptpad.fr 'cd ~/blog/ && git pull'
