# 4. Pi上の証明書を削除する

[← 前へ：3. AWS IoT Coreへ直接MQTTS接続する](03-direct-aws-iot.md) | [目次](../README.md#章一覧) | [次へ：5. SORACOM Beam経由でAWS IoT Coreへ接続する →](05-soracom-beam.md)

Duration: 10:00

## 4.1 証明書ファイルを削除する

次のBeam方式ではPiにAWS IoT証明書を置きません。直結テストが成功したことを講師と確認してから削除します。

```bash
rm -f ~/aws-iot-certs/private.pem.key \
~/aws-iot-certs/device-certificate.pem.crt \
~/aws-iot-certs/AmazonRootCA1.pem
rmdir ~/aws-iot-certs
test ! -e ~/aws-iot-certs && echo 'Pi上のAWS IoT証明書を削除しました'

```

通常のファイル削除はSDカード上のフォレンジックな完全消去を保証しません。本実習ではキット固有の一時証明書を使用し、終了後にAWS側で無効化します。

## 4.2 証明書がないことを確認する

```bash
find ~ -maxdepth 2 -type f \
\( -name 'private.pem.key' -o -name 'device-certificate.pem.crt' -o -name 'AmazonRootCA1.pem' \) \
-print

```

何も表示されないことを確認します。操作PC側の証明書パッケージは、次のSORACOM認証情報登録に使用するため、まだ削除しません。

---

[← 前へ：3. AWS IoT Coreへ直接MQTTS接続する](03-direct-aws-iot.md) | [目次](../README.md#章一覧) | [次へ：5. SORACOM Beam経由でAWS IoT Coreへ接続する →](05-soracom-beam.md)
