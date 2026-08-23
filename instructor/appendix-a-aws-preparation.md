# 講師付録A：AWS事前準備

[← 前へ：7. トラブルシューティングと片付け](../chapters/07-troubleshooting-cleanup.md) | [目次](../README.md#章一覧) | [次へ：講師付録B：実機受入テスト →](appendix-b-acceptance-test.md)

## A.1 キット単位のAWS IoTリソース

| 準備項目 | キット別の値／確認内容 |
| :---- | :---- |
| Thing名 | mqtt-handson-kitNN |
| 証明書 | キット固有、ACTIVE |
| IoTポリシー | Connect、Publish、Subscribe、ReceiveをキットのClient IDとトピックへ限定 |
| AWS IoTエンドポイント | ap-northeast-1のATSデータエンドポイント |
| 配布ファイル | device-certificate.pem.crt、private.pem.key、AmazonRootCA1.pem |
| 情報ファイル | kit-info.txt |
| 講師Subscribe | mqtt-handson/+/telemetry |
| 終了処理 | 証明書無効化、関連付け解除、不要リソース削除 |

## A.2 IoTポリシー例

\<AWS\_ACCOUNT\_ID\>とkitNNを各キットの値に置き換えます。ポリシーは証明書へ、証明書はThingへ関連付けます。

```json
{
"Version": "2012-10-17",
"Statement": [
{
"Effect": "Allow",
"Action": "iot:Connect",
"Resource": "arn:aws:iot:ap-northeast-1:<AWS_ACCOUNT_ID>:client/mqtt-handson-kitNN"
},
{
"Effect": "Allow",
"Action": "iot:Publish",
"Resource": "arn:aws:iot:ap-northeast-1:<AWS_ACCOUNT_ID>:topic/mqtt-handson/kitNN/telemetry"
},
{
"Effect": "Allow",
"Action": "iot:Subscribe",
"Resource": "arn:aws:iot:ap-northeast-1:<AWS_ACCOUNT_ID>:topicfilter/mqtt-handson/kitNN/command"
},
{
"Effect": "Allow",
"Action": "iot:Receive",
"Resource": "arn:aws:iot:ap-northeast-1:<AWS_ACCOUNT_ID>:topic/mqtt-handson/kitNN/command"
}
]
}

```

## A.3 講師の当日確認

* 開始前：全証明書がACTIVEで、Thing・ポリシーへの関連付けが正しい
* 開始前：各キットのkit-info.txtと証明書ファイル名が一致する
* 直結確認：mqtt-handson/+/telemetryをSubscribeし、mode=directをキットごとに確認する
* Beam確認：同じSubscribeでmode=beamをキットごとに確認する
* 下り確認：mqtt-handson/kitNN/commandへキット別にPublishする
* 終了後：証明書を無効化し、SORACOM側の認証情報削除を確認する

---

[← 前へ：7. トラブルシューティングと片付け](../chapters/07-troubleshooting-cleanup.md) | [目次](../README.md#章一覧) | [次へ：講師付録B：実機受入テスト →](appendix-b-acceptance-test.md)
