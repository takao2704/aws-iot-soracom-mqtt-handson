# 3. AWS IoT Coreへ直接MQTTS接続する

[← 前へ：2. Napter経由でRaspberry PiへSSH接続する](02-napter-ssh.md) | [目次](../README.md#章一覧) | [次へ：4. Pi上の証明書を削除する →](04-remove-certificates.md)

Duration: 40:00

コマンドに登場する`-i`、`-t`、`-q`やTLSオプションの意味は、[MQTTの基本と通信レイヤー](mqtt-basics-and-layers.md#mosquittoコマンドとの対応)を参照してください。

## 3.1 MQTTクライアントを導入する

```bash
sudo apt update
sudo apt install -y mosquitto-clients
mosquitto_pub --help | head

```

## 3.2 証明書をPiへ転送する

操作PCで証明書パッケージのフォルダを開き、Napter経由で3ファイルを転送します。

```bash
scp -P <NAPTER_PUBLIC_PORT> \
device-certificate.pem.crt private.pem.key AmazonRootCA1.pem \
<PI_USER>@<NAPTER_HOST>:/home/<PI_USER>/

```

PiへSSH接続し、専用ディレクトリへ移動して権限を設定します。

```bash
mkdir -p ~/aws-iot-certs
mv ~/device-certificate.pem.crt ~/private.pem.key ~/AmazonRootCA1.pem ~/aws-iot-certs/
chmod 700 ~/aws-iot-certs
chmod 600 ~/aws-iot-certs/private.pem.key
chmod 644 ~/aws-iot-certs/device-certificate.pem.crt ~/aws-iot-certs/AmazonRootCA1.pem
ls -l ~/aws-iot-certs

```

## 3.3 AWS IoT Coreの到達性を確認する

```bash
getent hosts <AWS_IOT_ENDPOINT>
openssl s_client -connect <AWS_IOT_ENDPOINT>:8883 \
-CAfile ~/aws-iot-certs/AmazonRootCA1.pem </dev/null 2>/dev/null | \
grep -E 'subject=|issuer=|Verify return code'

```

Verify return code: 0 (ok)が表示されることを確認します。この確認はサーバー証明書の検証であり、デバイス証明書によるMQTT認証の確認は次のPublishで行います。

## 3.4 PiからPublishする

```bash
mosquitto_pub -d -V mqttv311 \
-h <AWS_IOT_ENDPOINT> -p 8883 \
--cafile ~/aws-iot-certs/AmazonRootCA1.pem \
--cert ~/aws-iot-certs/device-certificate.pem.crt \
--key ~/aws-iot-certs/private.pem.key \
-i mqtt-handson-kitNN \
-t mqtt-handson/kitNN/telemetry \
-q 1 \
-m '{"mode":"direct","kit":"kitNN","message":"hello"}'

```

講師はAWS IoT CoreのMQTTテストクライアントでmqtt-handson/+/telemetryをSubscribeし、該当キットのmodeがdirectであることを確認します。

## 3.5 PiでSubscribeする

```bash
mosquitto_sub -d -V mqttv311 \
-h <AWS_IOT_ENDPOINT> -p 8883 \
--cafile ~/aws-iot-certs/AmazonRootCA1.pem \
--cert ~/aws-iot-certs/device-certificate.pem.crt \
--key ~/aws-iot-certs/private.pem.key \
-i mqtt-handson-kitNN \
-t mqtt-handson/kitNN/command \
-q 1 -C 1

```

講師が同じキットのcommandトピックへ{"action":"ping","from":"aws-console"}をPublishします。PiにJSONが1件表示され、コマンドが終了すれば双方向確認は成功です。

---

[← 前へ：2. Napter経由でRaspberry PiへSSH接続する](02-napter-ssh.md) | [目次](../README.md#章一覧) | [次へ：4. Pi上の証明書を削除する →](04-remove-certificates.md)
