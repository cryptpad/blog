#!/bin/bash
git push ssh://cryptpad@blog.cryptpad.org/home/cryptpad/blog.git
ssh cryptpad@blog.cryptpad.org 'cd ~/blog.cryptpad.org/ && git pull'
