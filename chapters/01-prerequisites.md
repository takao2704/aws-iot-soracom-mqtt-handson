# 1. ハンズオンを始める前に

[← 前へ：MQTTの基本と通信レイヤー](mqtt-basics-and-layers.md) | [目次](../README.md#章一覧) | [次へ：2. Napter経由でRaspberry PiへSSH接続する →](02-napter-ssh.md)

Duration: 15:00

## 必要な機材とアカウント

* Raspberry Pi（Raspberry Pi OS Bookworm系、SSH有効）
* UD-LT2（Web UIへログイン可能、Raspberry Piと有線LAN接続）
* SORACOM SIM 1枚（キットごとに分離）
* OpenSSHクライアントを利用できる操作PC
* SORACOMユーザーコンソールを操作できるアカウント
* 講師から配布されたキット別AWS IoT証明書パッケージ

## キット別の識別子

| 項目 | キット別の値 |
| :---- | :---- |
| Thing / MQTT Client ID | mqtt-handson-kitNN |
| SIMグループ | mqtt-handson-kitNN |
| SORACOM認証情報ID | awsiot-kitNN |
| Publishトピック | mqtt-handson/kitNN/telemetry |
| Subscribeトピック | mqtt-handson/kitNN/command |

文中のkitNNは、講師から割り当てられたkit01、kit02のような値に置き換えます。他キットの証明書、Thing名、トピックは使用しないでください。

## SIMグループとメタデータサービスを準備する

SORACOMユーザーコンソールで、キットに割り当てられたSIMを専用グループへ所属させます。

1. ［SIM管理］を開き、対象SIMを選択する
2. ［操作］→［所属グループ変更］を開く
3. キットのSIMグループ `mqtt-handson-kitNN` を選択して保存する
4. グループ名をクリックして、グループ設定画面を開く
5. ［SORACOM Air for セルラー設定］を開く
6. ［メタデータサービス］をオンにする
7. ［読み取り専用］をオンにしたまま［保存］を選択する

このハンズオンでは、Raspberry Piから回線の状態を確認するためにメタデータサービスを使用します。［読み取り専用］を有効にすると、デバイスからメタデータを読み取れますが、POST/PUTによるSIM設定の変更はできません。

> **注意：** 実際のグループIDやIMSIなどの回線識別子は、このリポジトリやチャットへ記載しないでください。

## 証明書パッケージの内容

* device-certificate.pem.crt：AWS IoT Coreのデバイス証明書
* private.pem.key：秘密鍵。チャットや共有ドキュメントへ貼り付けない
* AmazonRootCA1.pem：AWS IoT Coreのサーバー証明書を検証するルートCA
* kit-info.txt：Thing名、AWS IoT ATSエンドポイント、Publish/Subscribeトピック

## 費用と安全上の注意

本ハンズオンではSORACOM Air、Napter、Beam、AWS IoT Coreを使用します。実施時点の公式料金を確認してください。秘密鍵はキット固有とし、終了後にAWS証明書を無効化します。

---

[← 前へ：MQTTの基本と通信レイヤー](mqtt-basics-and-layers.md) | [目次](../README.md#章一覧) | [次へ：2. Napter経由でRaspberry PiへSSH接続する →](02-napter-ssh.md)
