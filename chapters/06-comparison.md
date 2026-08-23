# 6. 2つの方式を比較する

[← 前へ：5. SORACOM Beam経由でAWS IoT Coreへ接続する](05-soracom-beam.md) | [目次](../README.md#章一覧) | [次へ：7. トラブルシューティングと片付け →](07-troubleshooting-cleanup.md)

Duration: 10:00

| 比較項目 | AWS IoT Core直結 | SORACOM Beam経由 |
| :---- | :---- | :---- |
| Piの接続先 | \<AWS\_IOT\_ENDPOINT\>:8883 | beam.soracom.io:1883 |
| Pi側プロトコル | MQTTS | MQTT |
| AWS側プロトコル | MQTTS | BeamからMQTTS |
| 証明書・秘密鍵 | Piに保存 | SORACOM認証情報ストアに保存 |
| TLS終端 | PiとAWS IoT Core | BeamとAWS IoT Core |
| 主な運用責任 | Piごとの配布・保護・更新 | SORACOM側の認証情報とグループ設定 |

## 確認問題

* 秘密鍵が漏えいした場合、直結方式とBeam方式で最初に無効化・削除する場所はどこですか
* Beam方式でPiが接続するポートと、BeamがAWS IoT Coreへ接続するポートは何番ですか
* NapterのSSH管理経路とMQTTデータ経路は、どこで分離されていますか
* MQTT Client IDとThing名を一致させる理由を、IoTポリシーのiot:Connectと関連付けて説明してください

---

[← 前へ：5. SORACOM Beam経由でAWS IoT Coreへ接続する](05-soracom-beam.md) | [目次](../README.md#章一覧) | [次へ：7. トラブルシューティングと片付け →](07-troubleshooting-cleanup.md)
