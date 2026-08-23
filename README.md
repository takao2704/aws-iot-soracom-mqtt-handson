# SORACOM Napter・AWS IoT Core・SORACOM Beamで学ぶMQTTハンズオン

Raspberry Pi、UD-LT2、SORACOM Napter、AWS IoT Core、SORACOM Beamを使い、MQTT通信とX.509証明書の配置の違いを学ぶ約3時間のハンズオンです。

## ハンズオンを始める

**[概要・学習内容から始める](chapters/overview.md)**

各章は独立したMarkdownページです。ページ上部と下部の「前へ」「目次」「次へ」を使い、順番に進めてください。

## 章一覧

### 受講者向け

| 順番 | 章 | 目安 |
| ---: | --- | ---: |
| 1 | [概要・学習内容](chapters/overview.md) | 15分 |
| 2 | [0. 構成を確認する](chapters/00-architecture.md) | 概要に含む |
| 3 | [1. ハンズオンを始める前に](chapters/01-prerequisites.md) | 15分 |
| 4 | [2. Napter経由でRaspberry PiへSSH接続する](chapters/02-napter-ssh.md) | 40分 |
| 5 | [3. AWS IoT Coreへ直接MQTTS接続する](chapters/03-direct-aws-iot.md) | 40分 |
| 6 | [4. Pi上の証明書を削除する](chapters/04-remove-certificates.md) | 10分 |
| 7 | [5. SORACOM Beam経由でAWS IoT Coreへ接続する](chapters/05-soracom-beam.md) | 45分 |
| 8 | [6. 2つの方式を比較する](chapters/06-comparison.md) | 10分 |
| 9 | [7. トラブルシューティングと片付け](chapters/07-troubleshooting-cleanup.md) | 10分 |

### 講師向け

| 順番 | ページ |
| ---: | --- |
| 10 | [講師付録A：AWS事前準備](instructor/appendix-a-aws-preparation.md) |
| 11 | [講師付録B：実機受入テスト](instructor/appendix-b-acceptance-test.md) |
| 12 | [参考資料](references.md) |

## 重要事項

- 秘密鍵、IMSI、AWSアカウントID、実際のAWS IoTエンドポイントはリポジトリへ保存しないでください。
- 本番開催前に、講師付録Bの受入テストを1キットで実施してください。
- 料金とサービス仕様は開催時点のAWSおよびSORACOM公式ページを確認してください。

## リポジトリ構成

| パス | 内容 |
| --- | --- |
| [`chapters/`](chapters/) | 受講者向けの章別手順 |
| [`instructor/`](instructor/) | 講師向け付録 |
| [`assets/`](assets/) | ハンズオン内で使用する構成図 |
| [`diagrams/mqtt-handson-architecture.pptx`](diagrams/mqtt-handson-architecture.pptx) | 3つの構成図を編集できるPowerPointファイル |
| [`references.md`](references.md) | 公式参考資料 |
