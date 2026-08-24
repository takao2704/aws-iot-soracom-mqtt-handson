# 講師付録B：実機受入テスト

[← 前へ：講師付録A：AWS事前準備](appendix-a-aws-preparation.md) | [目次](../README.md#章一覧) | [次へ：参考資料 →](../references.md)

本番開催前に1キットで、Napter SSH、直結Publish/Subscribe、Pi上の証明書削除、Beam Publish/Subscribe、全リソースの片付けまで通しで確認します。仕様確認だけで完了扱いにしません。

## 合格条件

* Napter経由でPiへSSHできる
* 対象SIMのメタデータサービスが読み取り専用で有効になっており、Piから回線のオンライン状態を取得できる
* Piの時刻とDNSが正常で、AWS IoT ATSエンドポイントへ到達できる
* 直結PublishをAWS IoT Coreで受信できる
* 直結Subscribeで講師のメッセージを受信できる
* Pi上の証明書3ファイルが削除されている
* 証明書オプションなしのBeam PublishをAWS IoT Coreで受信できる
* Beam Subscribeで講師のメッセージを受信できる
* 秘密鍵、IMSI、実AWSアカウントIDを配布資料へ混入させていない

---

[← 前へ：講師付録A：AWS事前準備](appendix-a-aws-preparation.md) | [目次](../README.md#章一覧) | [次へ：参考資料 →](../references.md)
