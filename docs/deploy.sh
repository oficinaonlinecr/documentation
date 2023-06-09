#!/usr/bin/env sh
set -e

npm run docs:build

cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:oficinaonlinecr/documentation.git master:gh-pages

cd -
