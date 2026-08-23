# AWS IoT Core × SORACOM Beam MQTT ハンズオン

Raspberry Pi、UD-LT2、SORACOM Napter、AWS IoT Core、SORACOM Beamを使い、MQTT通信とX.509証明書の配置の違いを学ぶ約3時間のハンズオンです。

## 公開サイト

- [GitHub Pagesでハンズオンを開く](https://takao2704.github.io/aws-iot-soracom-mqtt-handson/)
- [PDF版を開く](https://takao2704.github.io/aws-iot-soracom-mqtt-handson/downloads/handson.pdf)

## 学習の流れ

1. SORACOM NapterとUD-LT2のDNATを経由してRaspberry PiへSSH接続
2. Raspberry PiにX.509証明書を配置し、AWS IoT Coreへ直接MQTTS接続
3. Raspberry Piから証明書を削除
4. 証明書をSORACOM認証情報ストアへ登録し、Beam経由でPublish/Subscribe
5. TLS終端、証明書保管場所、運用責任を比較

## 注意

- 秘密鍵、IMSI、AWSアカウントID、実際のAWS IoTエンドポイントはリポジトリへ保存しないでください。
- 本番開催前に、講師付録Bの受入テストを1キットで実施してください。
- 料金とサービス仕様は開催時点のAWSおよびSORACOM公式ページを確認してください。

## ローカル確認

GitHub Pagesと同じJekyll環境で確認する場合は、GitHub Actionsの `pages.yml` を基準にしてください。単純なレイアウト確認は、リポジトリ直下で任意の静的HTTPサーバーを起動して行えます。

