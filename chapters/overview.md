# SORACOM Napter・AWS IoT Core・SORACOM Beamで学ぶMQTTハンズオン

[← README](../README.md) | [目次](../README.md#章一覧) | [次へ：0. 構成を確認する →](00-architecture.md)

## Raspberry Piの遠隔保守から、証明書配置の違いを学ぶ3時間コース

| 項目 | 内容 |
| :---- | :---- |
| 概要 | Napterで遠隔保守環境を作り、AWS IoT Core直結とSORACOM Beam経由を比較する |
| 所要時間 | 約3時間（進行バッファ10分を含む） |
| 対象 | MQTT、TLS、AWS IoT Coreをこれから学ぶ方 |
| 前提 | AWS側は講師が事前準備。受講者はPi、UD-LT2、SORACOMを操作 |

## このハンズオンで学ぶこと

Raspberry PiをLTEルーター配下に接続し、SORACOM Napter経由で安全にSSH操作できる環境を作ります。その後、同じAWS IoT CoreのThing・証明書・トピックを使い、通信方式だけを切り替えます。

* Napter経由で、インターネット側から直接公開せずにRaspberry PiへSSH接続する
* MQTTのPublish、Subscribe、Topic、Payload、QoSと通信レイヤーの関係を説明できるようになる
* AWS IoT CoreへMQTTSで直接接続し、PiがX.509証明書と秘密鍵を保持する方式を体験する
* Pi上の証明書を削除し、SORACOM Beamが証明書を保持する方式へ切り替える
* PublishとSubscribeの両方向を確認し、TLS終端と運用責任の違いを説明できるようになる

## 重要：2つのMQTT経路はTLS終端が異なります

直結方式はPiからAWS IoT Coreまでが1本のMQTTS接続です。Beam方式は、PiからBeamまでのMQTT接続と、BeamからAWS IoT CoreまでのMQTTS接続に分かれます。Beam方式を「PiからAWSまで一続きのMQTTS」と表現しないでください。

## 全体スケジュール

| フェーズ | 目安 |
| :---- | :---- |
| 概要・MQTT基礎・構成比較 | 15分 |
| UD-LT2、SIM、Napter経由SSH | 40分 |
| AWS IoT Core直結MQTTS | 40分 |
| 証明書削除・方式切替 | 10分 |
| SORACOM Beam設定と双方向通信 | 45分 |
| 比較・トラブル対応・片付け | 20分 |
| 進行バッファ | 10分 |

---

[← README](../README.md) | [目次](../README.md#章一覧) | [次へ：0. 構成を確認する →](00-architecture.md)
