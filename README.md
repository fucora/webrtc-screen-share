# webrtc-screen-share

WebVRで画面共有

## Installation

```
$ npm install && npm run build
```

## SSL証明書を発行

httpsアクセスの為に事前に証明書を発行します。（ここの手順は自動化する予定）
証明書の発行に [FiloSottile/mkcert](https://github.com/FiloSottile/mkcert) を利用します。

### mkcert のインストール

```
$ brew install mkcert
```

### 証明書の発行

```
$ mkcert -install
$ mkcert 0.0.0.0 <自身のPCのIPアドレス> ::1
$ mv xxxx-key.pem ssl/key.pem
$ mv xxxx.pem ssl/cert.pem
```

### iphoneに証明書をインストール

1. `mkcert -CAROOT` で表示されるディレクトリにある `rootCA.pem` をメール or AirDrop等でiPhoneに送信
2. 送信されたファイルを開く
3. 設定 からプロファイルをインストール
4. 設定 > 一般 > 情報 > 証明書信頼設定 で「ルート証明書を全面的に信頼する」をONにする

※ Gmailで証明書を開く場合は Gmailアプリからは正常に開けないので、Safari などから Gmail を開いてファイルをダウンロードしてください。
## サーバーの起動

### webサーバー

```
$ npm run start:web-server
```

### アプリケーションサーバー

```
$ export NODE_EXTRA_CA_CERTS="$(mkcert -CAROOT)/rootCA.pem" # 擬似的なルート認証局を使う為の設定
$ npm run start:app-servert
```

## モーションセンサーのアクセス許可

iOS12.2 よりモーションセンサーへのアクセスがデフォルトで禁止されている。
ユーザが明示的にアクセスを許可する設定をする必要がある。

設定 > Safari > プライバシーとセキュリティ > モーションと画面の向きのアクセスを許可 を ON にする

## 画面共有の手順

1. PC側で https://<自身のIPアドレス>:8000 にアクセス
2. 「画面を共有」をクリック
3. iPhone側で https://<PCのIPアドレス>:8000 にアクセス
4. 「画面共有を受け取る」をクリック
5. PC側で「connect」をクリックして、共有する画面を選択
