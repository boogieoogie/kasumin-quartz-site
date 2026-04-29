---
title: "currentディレクトリ以下の.svnフォルダを削除"
date: 2009-05-29
categories: 
  - "command"
  - "memo"
---

する。 両方同じ処理です。

```
rm -rf `find . -type d -name .svn`
find . -type d -name .svn -exec rm -rf {} \;

```
