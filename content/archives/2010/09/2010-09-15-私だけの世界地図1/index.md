---
title: "私だけの世界地図(1)"
date: 2010-09-15
categories: 
  - "camera"
  - "google-maps"
  - "javascript"
  - "旅"
---

長年ぼんやり夢みてきた[「私だけの世界地図」](http://memo.donburiburi.com/test/mymap1.html)の制作を開始しました。 地図が好きで特にGoogleMapsが好きで、写真が好きで、GPSモノが好きで、 旅行（トレッキング）が好きで、プログラマな私が作る私だけの世界地図です。 ヽ(\*´∀｀\*)ﾉ まだゴールは見えていません。作りながら落としどころを考えていこうと思っています。 これ→[私だけの世界地図(1)](http://memo.donburiburi.com/test/mymap1.html) JSの勉強をしながらやってます。 現在の要件は、 **・GoogleMaps ・Geoタグ付きの写真** です。 まず第1フェーズは、「画像のExif情報から緯度経度を取ってきて、GooogleMaps上にプロット。」 までしました。いまのところのこだわりは、 **・DB使わない！ ・サーバサーバサイドのプログラム使わなーい。** です。でも次のフェーズできっとサーバサイドのスクリプト使います。。。 こないだ行った御岳山と、トルコのカッパドキアの写真だけプロットしてあります。 [旅先での記録](http://memo.donburiburi.com/2009/12/%E6%97%85%E5%85%88%E3%81%A7%E3%81%AE%E8%A8%98%E9%8C%B2/)でも書いたように、旅先って特に海外ではネット環境がひたすら悪いので、オンラインじゃ動かないのは×。 現状は、iPhoneで撮った写真を[チビすな !!](http://homepage3.nifty.com/metis/)っていうExif情報を保持したままリサイズするソフトでリサイズしてFTPでアップした画像を使っています。 以下ポイント。

## 1\. binaryajax.js, exif.jsでExif情報がとれます。

[Nihilogic : Javascript EXIF Reader - jQuery Plugin](http://www.nihilogic.dk/labs/exifjquery/) [jQuery EXIF data plugin - Nihilogic](http://blog.nihilogic.dk/2008/05/jquery-exif-data-plugin.html) ここを参考にしました。 \[code language="Javascript"\] $('.photo').each(function() { var sel\_id = $(this).attr('id'); var img = document.getElementById(sel\_id); var exif = new Exif( img ); exif.load( function(){ // Exif情報とって、GoogleMapsにプロットする処理 }); }); \[/code\] しかしIEで動かず。 exif.js745行目、!\_image.completeのところでfalse返してるのです。 imgのloadイベントにバインドしているのにもかかわらず、IEではcompleteしてない。 ↓ココ \[code language="Javascript"\] if( !\_image.complete || \_isLoaded ) { return false; } \[/code\] ぐぐってみたかんじ、setTimeout使って逃げるのがいいそうです。↓ \[code language="Javascript"\] $('.photo').each(function() { var sel\_id = $(this).attr('id'); var img = document.getElementById(sel\_id); var exif = new Exif( img ); setTimeout(function(){ exif.load( function(){ // Exif情報とって、GoogleMapsにプロットする処理 }); }, 500); }); \[/code\]

## 2.Exifの緯度経度は度分秒形式

Exif情報で保存されている緯度経度の形式と、Googlemapsなどで使う形式が 違うので、変換します。 たとえば御岳山は、 緯度(数値) : 35ﾟ 47.39 \[DM\] → 35度47.39分 経度(数値) : 139ﾟ 9.21 \[DM\] → 139度9.21分 ※秒はこのライブラリではとれてないぽいです。 これを百分率(%)に直すには、以下の式で出ます。 **度＋分/60+秒/3600** つまり御岳山は、 緯度:35.789833 経度：139.153500 です。

## 3.マーカーを画像にしてプロット

ちょいちょい。 \[code lang="Javascript"\] var mki = new google.maps.MarkerImage( params.src, new google.maps.Size( x, y), null, new google.maps.Point( x/2, y/2 )); var pos = new google.maps.LatLng(lat, lng); var mk = new google.maps.Marker({position:pos, icon:mki, map:gMap, title:params.alt}); \[/code\] ビビったのは高度。御岳山より、カッパドキアの方が高いんだー。 ちなみに高度と標高ってどう違うのって思ったら、Yahoo知恵袋にありました。

> [標高、高度、海抜・・・は同じですか？](http://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1015214100) 高度・・・海水面はどこでもよい 海抜・・・満潮時と干潮時の平均が基準 標高・・・基準となる海水面がある
