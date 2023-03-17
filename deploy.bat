@echo off

call npm run docs:build

cd F:\github\rdl1130.github.io\docs\.vitepress\dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:rdl1130/rdl1130.github.io.git master
pause >nul
