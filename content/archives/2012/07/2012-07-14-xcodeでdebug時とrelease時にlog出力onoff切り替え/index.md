---
title: "XCodeでDebug時とRelease時にLog出力on/off切り替え"
date: 2012-07-14
categories: 
  - "iphone"
---

開発中のDebugモードではログを出力し、申請時のReleaseモードではログを非表示にします。 最新のXcodeでは新規にプロジェクトを作っただけで、「Build Settings」タブの「Apple LLVM compiler 3.1 - Preprocessing」の「Preprocessor Macros」の「DEBUG」にすでに「DEBUG=1」が入っています。 ![](images/debugOrRelease01-500x430.png "debugOrRelease01") 〇〇〇-prefix.pchに以下のコードを追加します。 `#ifdef DEBUG # define NSLog(...) NSLog(__VA_ARGS__); #else # define NSLog(...) #endif` これでＯＫ。 確認します。 メニューの左上のプロジェクト名をクリックすると、メニューが出てくるので「Edit Scheme」を選択。 「Run」のBuild ConfigurationをDebug/Releaseを切りかえて実行してください。 ![](images/debugOrRelease02-500x269.png "debugOrRelease02")
