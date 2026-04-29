---
title: "DBとユーザー作るSQL"
date: 2010-08-26
categories: 
  - "memo"
  - "mysql"
---

コピペ用。 一番最初の3行。 \[code\] CREATE DATABASE ＜データベース名＞ DEFAULT CHARACTER SET utf8; GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON ＜データベース名＞.\* TO ＜ユーザ名＞@localhost IDENTIFIED BY '＜パスワード＞'; FLUSH PRIVILEGES; \[/code\]
