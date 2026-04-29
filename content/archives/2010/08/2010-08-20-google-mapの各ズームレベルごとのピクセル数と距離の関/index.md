---
title: "Google Mapの各ズームレベルごとのピクセル数と距離の関係"
date: 2010-08-20
categories: 
  - "google-maps"
  - "computer"
---

Google Maps API v3でCircleを書いてるんですが、 パラメータとして指定するradiusの単位はmなのですが、 ズームレベルに応じて大きさを変更したいとのことで 迷っていたら、日本のどこかに私を待っている人がいました。 ので紹介します。 本当にありがとうございます。 引用元： [Google Mapの各ズームレベルごとのピクセル数と距離の関係](http://kinsentansa.blogspot.com/2009/09/google-map.html)

> ```
> Lv0 : 10000km = 10,000,000m,  81pix, 123,456.79012 m/pix, 0.00001 pix/m
> Lv1 :  5000km =  5,000,000m,  81pix,  61,728.39506 m/pix, 0.00002 pix/m
> Lv2 :  2000km =  2,000,000m,  66pix,  30,303.03030 m/pix, 0.00003 pix/m
> Lv3 :  1000km =  1,000,000m,  66pix,  15,151.51515 m/pix, 0.00007 pix/m
> Lv4 :   500km =    500,000m,  66pix,   7,575.75758 m/pix, 0.00013 pix/m
> Lv5 :   200km =    200,000m,  53pix,   3,773.58491 m/pix, 0.00027 pix/m
> Lv6 :   200km =    200,000m, 103pix,   1,941.74757 m/pix, 0.00052 pix/m
> Lv7 :   100km =    100,000m, 103pix,     970.87379 m/pix, 0.00103 pix/m
> Lv8 :    50km =     50,000m, 103pix,     485.43689 m/pix, 0.00206 pix/m
> Lv9 :    20km =     20,000m,  84pix,     238.09524 m/pix, 0.00420 pix/m
> Lv10:    10km =     10,000m,  84pix,     119.04762 m/pix, 0.00840 pix/m
> Lv11:     5km =      5,000m,  84pix,      59.52381 m/pix, 0.01680 pix/m
> Lv12:     2km =      2,000m,  67pix,      29.85075 m/pix, 0.02350 pix/m
> Lv13:     1km =      1,000m,  67pix,      14.92537 m/pix, 0.06700 pix/m
> Lv14:    500m =        500m,  67pix,       7.46269 m/pix, 0.13400 pix/m
> Lv15:    200m =        200m,  54pix,       3.70370 m/pix, 0.27000 pix/m
> Lv16:    200m =        200m, 106pix,       1.88679 m/pix, 0.53000 pix/m
> Lv17:    100m =        100m, 106pix,       0.94340 m/pix, 1.06000 pix/m
> Lv18:     50m =         50m, 106pix,       0.47170 m/pix, 2.12000 pix/m
> Lv19:     20m =         20m,  85pix,       0.23529 m/pix, 4.20000 pix/m
> 
> ```
