---
title: "iPhoneアプリのライフサイクル"
date: 2011-02-15
categories: 
  - "iphone"
---

SDK2.2で作られたXcodeのプロジェクトを自分のXcode（SDK4.2）で開いた。 1) アプリ起動時に呼ばれる**didFinishLaunching(didFinishLaunchingWithOptions)**でデータベースに接続。 2) 処理をいろいろして。 3) アプリ終了時に呼ばれる**applicationWillTerminate**でデータベースに保存して、接続を切ってアプリ終了。 という流れのアプリ。 そんでもって自分の環境でリコンパイルしたところ、**applicationWillTerminate**が呼ばれない。 調べると、iOS4からマルチタスクになったから**applicationWillTerminate**じゃなくて、**applicationDidEnterBackground**が呼ばれ、呼び戻す時には、**applicationWillEnterForeground**が呼ばれる。 とのこと。 では、現行のSDK2.2でコンパイルされて、リリースされて、iOS4.2で動いてるこのアプリは**applicationWillTerminate**呼ばれてるの？呼ばれてなかったら3) の保存処理されてないということですか？ ということで調べてみたところ、以下の条件下では**applicationWillTerminate**が呼ばれるとのことでした。 **■ アプリケーションがiPhone SDK 3.x以前にリンクしている。** ■ アプリケーションがiPhone OS 3.x以前のデバイス上にデプロイメントされている。 ■ 現在のデバイスがマルチタスクをサポートしていない(「マルチタスクがサポートされている かどうかの確認」 (65 ページ)参照)。 ■ アプリケーションのInfo.plistファイルにUIApplicationExitsOnSuspendキーが含まれてい る(「バックグラウンド実行を行わないことを選択」 (40 ページ)参照)。 ちょっとびびった。 ちなみにSDK2.2の入れ方がわからないので、デバッグできまへんでした。 iPhoneアプリケーションプログラミング ガイト： [http://developer.apple.com/jp/devcenter/ios/library/japanese.html](http://developer.apple.com/jp/devcenter/ios/library/japanese.html)
