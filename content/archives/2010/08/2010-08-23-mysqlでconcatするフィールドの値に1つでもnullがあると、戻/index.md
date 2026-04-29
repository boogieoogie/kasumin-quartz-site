---
title: "MySQLでCONCATするフィールドの値に1つでもNULLがあると、戻りがNULLになる"
date: 2010-08-23
categories: 
  - "mysql"
  - "computer"
---

うーんと**IFNULL**でデフォルト値を設定する。 \[code\] SELECT CONCAT(pref, city, area) FROM area; \[/code\] ↓ \[code\] SELECT CONCAT( IFNULL(pref, ''), IFNULL(city, ''), IFNULL(area, '') ) FROM area; \[/code\] そもそも、NULLじゃなくて、空文字列をDBに入れているつもりだったのに。。。 と思っていたらMDB2がNULLに変換している。 Oracleとの互換のため、これがデフォルトになっているようだけど、 Oracleは使いません。 ので、空文字列を突っ込めるようにします。 接続オプションのportabilityで設定します。 \[code\] $db->setOption('portability', MDB2\_PORTABILITY\_ALL ^ MDB2\_PORTABILITY\_EMPTY\_TO\_NULL); \[/code\]
