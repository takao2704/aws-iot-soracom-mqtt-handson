# 5. SORACOM Beam経由でAWS IoT Coreへ接続する

[← 前へ：4. Pi上の証明書を削除する](04-remove-certificates.md) | [目次](../README.md#章一覧) | [次へ：6. 2つの方式を比較する →](06-comparison.md)

Duration: 45:00

直結方式とのレイヤーおよびTLS終端の違いは、[MQTTの基本と通信レイヤー](mqtt-basics-and-layers.md#beam方式のレイヤー)を参照してください。

## 5.1 SORACOM認証情報ストアへX.509証明書を登録する

* SORACOMユーザーコンソールで［セキュリティ］→［認証情報ストア］を開く
* ［認証情報を登録］を選び、種別をX.509証明書にする
* 認証情報IDにawsiot-kitNNを入力する
* 秘密鍵、デバイス証明書、Amazon Root CA 1はファイル名ではなく各ファイルの内容を対応欄へ貼り付ける
* 秘密鍵の内容をチャット、共有メモ、講師用チェック表へ貼り付けない

## 5.2 キット専用SIMグループを作成する

グループ名をmqtt-handson-kitNNとして作成し、割り当てられたSIMだけを所属させます。別キットのSIMを同じグループへ入れないでください。

## 5.3 Beam MQTTエントリポイントを設定する

グループ設定の［SORACOM Beam設定］で［設定を追加］→［MQTTエントリポイント］を選びます。

| 項目 | 設定値 |
| :---- | :---- |
| 設定名 | AWS IoT kitNN |
| 転送先の種別 | Standard |
| 転送先プロトコル | MQTTS |
| 転送先ホスト | \<AWS\_IOT\_ENDPOINT\> |
| 転送先ポート | 8883 |
| クライアント証明書 | 有効／awsiot-kitNN |
| プラットフォームバージョン | 201912 |
| IMSIのトピック追加 | 無効 |
| トピック置換 | 無効 |

VPGを利用しているSIMで公開AWS IoTエンドポイントへ接続する場合は、VPGのInternet Gatewayが有効であることを講師が確認します。

## 5.4 PiからBeam経由でPublishする

Piには証明書ファイルを再配置しません。接続先とコマンドから証明書オプションが消えていることを確認します。

```bash
mosquitto_pub -d -V mqttv311 \
-h beam.soracom.io -p 1883 \
-i mqtt-handson-kitNN \
-t mqtt-handson/kitNN/telemetry \
-q 1 \
-m '{"mode":"beam","kit":"kitNN","message":"hello"}'

```

講師はAWS IoT CoreのMQTTテストクライアントで受信し、同じThing・同じトピックにmodeがbeamのメッセージが届いたことを確認します。

## 5.5 PiでBeam経由Subscribeする

```bash
mosquitto_sub -d -V mqttv311 \
-h beam.soracom.io -p 1883 \
-i mqtt-handson-kitNN \
-t mqtt-handson/kitNN/command \
-q 1 -C 1

```

講師がcommandトピックへ `{"action":"ping","from":"aws-console"}` をPublishし、Piに1件表示されればBeam経由の双方向確認は成功です。

---

[← 前へ：4. Pi上の証明書を削除する](04-remove-certificates.md) | [目次](../README.md#章一覧) | [次へ：6. 2つの方式を比較する →](06-comparison.md)
