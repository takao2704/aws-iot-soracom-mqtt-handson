# 7. トラブルシューティングと片付け

[← 前へ：6. 2つの方式を比較する](06-comparison.md) | [目次](../README.md#章一覧) | [次へ：講師付録A：AWS事前準備 →](../instructor/appendix-a-aws-preparation.md)

Duration: 10:00

## よくある症状

| 症状 | 確認ポイント | 対処 |
| :---- | :---- | :---- |
| Napterへ接続できない | 有効期限、アクセス元IP、SIMオンライン | エントリを再作成し、操作PCのグローバルIPを確認 |
| SSHがUD-LT2で止まる | DNATの50022、PiのLAN IP | LANステータスを再確認しDNATを修正 |
| メタデータ取得がHTTP 400になる | SIMグループ、メタデータサービス | 対象SIMの所属グループでメタデータをオン、読み取り専用をオンにして保存 |
| MQTTSの証明書エラー | Piの時刻、CA、証明書、秘密鍵 | 時刻同期と3ファイルの組み合わせを確認 |
| AWSからNot authorized | 証明書のACTIVE状態、Thing、IoTポリシー | 関連付けとClient ID、トピックを照合 |
| 直結だけ到達しない | ATSエンドポイント、8883、DNS | エンドポイントの入力と名前解決を確認 |
| BeamでCONNACK失敗 | 認証情報ID、MQTTS、8883、201912 | Beam設定と証明書の対応を再確認 |
| Beamへ接続できない | SIMグループへの所属 | 対象SIMをmqtt-handson-kitNNへ割り当て |
| VPG利用時だけBeam失敗 | 公開AWS IoTへのInternet Gateway | VPGのInternet Gatewayを講師が確認 |
| Subscribeが切断される | 同じClient IDの二重接続 | 同じキットでpub/subを同時起動せず順番に実施 |

## 受講者が行う片付け

* Napterのオンデマンドリモートアクセスを手動削除する。残しても設定時間後に自動削除される
* UD-LT2のDNATルール50022を削除する
* Pi上にAWS IoT証明書が残っていないことを再確認する
* SORACOMグループからSIMを外し、Beam MQTT設定を削除する
* awsiot-kitNN認証情報をSORACOM認証情報ストアから削除する
* 操作PCのキット別証明書パッケージを削除する

## 講師が行う片付け

* AWS IoT証明書をINACTIVEにし、ThingとIoTポリシーから関連付けを解除する
* 再利用しない証明書、Thing、実習用ポリシーを削除する
* AWS IoT MQTTテストクライアントのSubscribeを終了する
* 各キットの完了結果と片付け結果だけを記録し、秘密鍵やIMSIを記録しない

---

[← 前へ：6. 2つの方式を比較する](06-comparison.md) | [目次](../README.md#章一覧) | [次へ：講師付録A：AWS事前準備 →](../instructor/appendix-a-aws-preparation.md)
