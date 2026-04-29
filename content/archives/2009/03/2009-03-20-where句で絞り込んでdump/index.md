---
title: "mysqldumpオプションメモ"
date: 2009-03-20
categories: 
  - "memo"
  - "mysql"
---

メモメモ。

```
#where句で絞り込んでdump
mysqldump -u ユーザ名 -p -t "--where=カラム名='文字列'" データベース名 テーブル名 > ファイル名
#１行ずつのINSERT文でdump
mysqldump -u ユーザ名 -p -c --order-by-primary --skip-extended-insert  データベース名 テーブル名 > ファイル名
```
