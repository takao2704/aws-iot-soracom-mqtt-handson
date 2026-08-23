# SORACOM Napter・AWS IoT Core・SORACOM Beamで学ぶMQTTハンズオン

Raspberry Pi、UD-LT2、SORACOM Napter、AWS IoT Core、SORACOM Beamを使い、MQTT通信とX.509証明書の配置の違いを学ぶ約3時間のハンズオンです。

## ハンズオンを始める

**[ハンズオン本編を開く](HANDSON.md)**

本編は1つのMarkdownにまとまっています。GitHub上で目次から各章へ移動し、上から順番に進めてください。

## 学習の流れ

1. [構成を確認する](HANDSON.md#0-構成を確認する)
2. [ハンズオンを始める前に](HANDSON.md#1-ハンズオンを始める前に)
3. [Napter経由でRaspberry PiへSSH接続する](HANDSON.md#2-napter経由でraspberry-piへssh接続する)
4. [AWS IoT Coreへ直接MQTTS接続する](HANDSON.md#3-aws-iot-coreへ直接mqtts接続する)
5. [Pi上の証明書を削除する](HANDSON.md#4-pi上の証明書を削除する)
6. [SORACOM Beam経由でAWS IoT Coreへ接続する](HANDSON.md#5-soracom-beam経由でaws-iot-coreへ接続する)
7. [2つの方式を比較する](HANDSON.md#6-2つの方式を比較する)
8. [トラブルシューティングと片付け](HANDSON.md#7-トラブルシューティングと片付け)
9. [講師付録](HANDSON.md#講師付録aaws事前準備)

## 重要事項

- 秘密鍵、IMSI、AWSアカウントID、実際のAWS IoTエンドポイントはリポジトリへ保存しないでください。
- 本番開催前に、講師付録Bの受入テストを1キットで実施してください。
- 料金とサービス仕様は開催時点のAWSおよびSORACOM公式ページを確認してください。

## リポジトリ構成

| パス | 内容 |
| --- | --- |
| [`HANDSON.md`](HANDSON.md) | 受講者向け手順と講師付録 |
| [`assets/`](assets/) | ハンズオン内で使用する構成図 |
