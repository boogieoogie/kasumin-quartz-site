---
title: "Amazon returned invalid HTTP response code 400"
date: 2009-08-12
categories: 
  - "computer"
---

[AmazonのAPIの仕様がかわる](http://developer.amazonwebservices.com/connect/ann.jspa?annID=442)とのことでupdate。 webサーバ2台構成のサービスがあり、片方ではリクエストが成功するが、もう片方で失敗するという現象がおこりました。IPが別だとだめなのかなと思ったのですが、詳しく調べるとtimeoutなんちゃら AWS.TimestampExceedsTimeToLive というエラーコードが返ってきているよう。 （エラーメッセージは文字化けて取得できなかった。） なんでじゃろと思って調べていくとサーバの時計がずれていたのが原因でした。
