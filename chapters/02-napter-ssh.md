# 2. Napter経由でRaspberry PiへSSH接続する

[← 前へ：1. ハンズオンを始める前に](01-prerequisites.md) | [目次](../README.md#章一覧) | [次へ：3. AWS IoT Coreへ直接MQTTS接続する →](03-direct-aws-iot.md)

Duration: 40:00

## 2.1 SIMとLAN接続を確認する

* SORACOM SIMをUD-LT2へ正しい向きで挿入し、アンテナと電源を接続する
* Raspberry Piの有線LANをUD-LT2のLANポートへ接続する
* SORACOMユーザーコンソールのSIM管理で、対象SIMがオンラインであることを確認する
* 対象SIMの先頭チェックボックスを選び、［操作］からオンデマンドリモートアクセスを開く

## 2.2 NapterでUD-LT2のWeb UIへ接続する

UD-LT2のWeb UIがHTTP/80で待ち受ける前提です。オンデマンドリモートアクセスを次のように作成します。

* デバイス側ポート：80
* アクセス可能時間：30分
* 暗号化：IoTデバイスは平文通信を待ち受ける。クライアント接続のTLSを有効化
* アクセス元IPアドレスレンジ：空欄。コンソールを操作しているPCのグローバルIPに自動制限

発行されたHTTPS URLを開き、講師から割り当てられたUD-LT2の管理者ユーザー名とパスワードでログインします。共通の初期パスワードは使用しません。

## 2.3 Raspberry PiのLAN IPを確認する

UD-LT2の［ステータス］→［LANステータス］でRaspberry Piを探し、割り当てられたIPv4アドレスをメモします。以降、この値を\<PI\_LAN\_IP\>と表記します。

## 2.4 UD-LT2へDNATを追加する

［転送設定］→［NAT］→［追加］を開き、以下の設定を保存します。

| 対象 | 項目 | 設定 |
| :---- | :---- | :---- |
| UD-LT2 | NAT設定 | DNAT |
| UD-LT2 | プロトコル | tcp |
| UD-LT2 | 初期アドレスタイプ | interface |
| UD-LT2 | インターフェイス | 4G |
| UD-LT2 | 初期ポート | 50022 |
| Raspberry Pi | マッピングアドレス | \<PI\_LAN\_IP\> |
| Raspberry Pi | マッピングポート | 22 |

## 2.5 SSH用Napterエントリを作成する

* デバイス側ポート：50022
* アクセス可能時間：4時間
* 暗号化：IoTデバイスは暗号通信を待ち受ける（HTTPS/SSHなど）。追加TLSは無効
* アクセス元IPアドレスレンジ：空欄。操作PCのグローバルIPに限定

表示されたNapterホスト名と公開ポートを控えます。文中では\<NAPTER\_HOST\>、\<NAPTER\_PUBLIC\_PORT\>と表記します。

## 2.6 操作PCからSSH接続する

```bash
ssh -p <NAPTER_PUBLIC_PORT> <PI_USER>@<NAPTER_HOST>

```

初回だけホスト鍵の確認が表示されます。講師の案内と接続先を照合してyesを入力し、キットに割り当てられたRaspberry Piユーザーのパスワードでログインします。

## 2.7 Raspberry Piの事前チェック

```bash
date --iso-8601=seconds
ip -br address
getent hosts beam.soracom.io
sudo ss -lntp | grep ':22'

```

時刻が大きくずれている場合はMQTTSの証明書検証に失敗します。先へ進む前に講師へ連絡してください。

## 2.8 IoT SIMの回線情報を確認する

SORACOMのメタデータサービスへ、UD-LT2配下のRaspberry Piからアクセスします。次のコマンドは、ハンズオンで必要な項目だけを個別に取得します。

```bash
printf 'SIM name: '
curl -sS http://metadata.soracom.io/v1/subscriber.tags.name
echo

printf 'Subscription: '
curl -fsS http://metadata.soracom.io/v1/subscriber.subscription
echo

printf 'Online: '
curl -fsS http://metadata.soracom.io/v1/subscriber.sessionStatus.online
echo

printf 'Speed class: '
curl -fsS http://metadata.soracom.io/v1/subscriber.speedClass
echo

```

`Online` が `true` であることを確認します。`SIM name` が空の場合やエラーになる場合は、SIM管理画面で名前が設定されているか確認してください。名前を取得できなくても、ほかの3項目を取得できれば先へ進めます。

> **注意：** `/v1/subscriber` 全体の応答にはIMSI、MSISDN、IMEIなどの識別子が含まれます。本ハンズオンでは画面共有やログへの混入を避けるため、全体を表示せず、上記のクエリー用URLだけを使用します。

---

[← 前へ：1. ハンズオンを始める前に](01-prerequisites.md) | [目次](../README.md#章一覧) | [次へ：3. AWS IoT Coreへ直接MQTTS接続する →](03-direct-aws-iot.md)
