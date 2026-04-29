---
title: "私だけの世界地図(2) &hearts; 角丸"
date: 2010-09-25
categories: 
  - "google-maps"
  - "javascript"
---

やっぱり角丸だよね♥ ヽ(\*´∀｀\*)ﾉ ということでマーカーの写真を角丸にしました。 [私だけの世界地図(2)](http://memo.donburiburi.com/test/mymap2/) phpにimagickモジュールが入っていないので、 別途サーバにインストールされていたImageMagickに対して execで渡して加工することに。 元画像はこちら。 ![](images/goreme-s.jpg "goreme-s")

## 1\. 最小辺を100pxになるようにリサイズ。

\[code\] // リサイズ //convert -resize n% goreme-s.jpg resize.jpg \[/code\] ↓こうなります。 ![](images/resize_goreme-s.jpg "resize_goreme-s")

## 2\. 中心から100x100をクロッピングし、角丸に。

\[code\] // クロッピング、角丸 //convert -size 100x100 -quality 100 -gravity center -crop 100x100+0+0 xc:none -fill white -draw "roundRectangle 0,0 100,100 10,10" resize.jpg -compose SrcIn -composite out.png \[/code\] ↓こうなります。 ![](images/round_goreme-s.png "round_goreme-s")

## 3\. あらかじめ用意した背景の上に重ねてできあがり。

\[code\] // 枠線 //convert -size 106x106 -geometry +3+3 border.png out.png -composite out.png \[/code\] ↓あらかじめ用意した画像。2で生成された画像より一回り大きいです。(106x106) ![](images/border-stripe.png "border-stripe") ↓こうなります。ヽ(\*´∀｀\*)ﾉきゃーかわいい！ ![](images/thumb_goreme-s.png "thumb_goreme-s") グレイ枠も作ってみたのですが、ピンクのしましまの方がかわいいと思いました。 ![](images/mymap-gray.png "mymap-gray") ただpngにする際Exif情報が失われるので、もとのjpgからExif情報をとりだしてます。 [私だけの世界地図(1)](http://memo.donburiburi.com/test/mymap1.html) [私だけの世界地図(2)](http://memo.donburiburi.com/test/mymap2/)
