---
title: 混合サンプル
menuTitle: 混合サンプル
menuOrder: 4
description: Scripon! を用いて、実際にシナリオ→スクリプト変換を行う一例を紹介します。
createdAt: '2019-08-23 00:00:00'
---

## 概要

実際にシナリオ → スクリプト変換を行う一例として、様々な設定をまとめたサンプルを紹介します。

※ 当サンプルでは、ティラノスクリプトのタグを参考にしています。

## 変換要件

- 行末には “[l][cm]”
  - ただし、コメント行には付加しない
- シナリオの始まりには “\*start”
- シナリオの終わりには “[s]”
- “キャラ名「～～」” という表記は、“#キャラ名（改行）「～～」” に変換する
- “;■ 背景 〇〇” は、“[bg storage="〇〇.png"]” に変換する
- “…”（三点リーダー）および “―”（ダッシュ）は、必ず 2 つで使用する（そのように変換する）
- 空行は全て 1 行にまとめる（複数に渡る空行を許さない）

## サンプル

### 設定

![混合サンプル-設定](/images/example/mixture-sample-settings.png)

### 変換前（シナリオ）

![混合サンプル-変換前](/images/example/mixture-sample-before.png)

### 変換後（スクリプト）

![混合サンプル-変換後](/images/example/mixture-sample-after.png)