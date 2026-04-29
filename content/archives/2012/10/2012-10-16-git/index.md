---
title: "はじめてのgit+Xcode"
date: 2012-10-16
categories: 
  - "iphone"
  - "memo"
---

今まで作っていたXcodeプロジェクトをgit管理にうつす。 基本設定 `git config --global user.name 'your name' git config --global user.email you@example.com` リポジトリ作成、プロジェクトを追加 プロジェクトホームに移動 `git init git add . git commit -m "first commit"` 読み方は「ぎっと」 git statusでエスケープされてちゃっている場合 `git config --global core.quotepath false` .gitignoreはこちら [https://github.com/github/gitignore/blob/master/Objective-C.gitignore](https://github.com/github/gitignore/blob/master/Objective-C.gitignore "https://github.com/github/gitignore/blob/master/Objective-C.gitignore")
