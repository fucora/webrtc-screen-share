# webrtc-screen-share

WebVRで画面共有

## Getting Started

SSL証明書を作成するときに指定したドメインとアクセス先のドメインを一致させる必要がある。
`HOST_IP` に LAN 内の自身のPCのIPアドレスを指定してください。

```
$ export HOST_IP=$(ifconfig en0 | awk '/inet / {print $2}')
$ docker-compose up -d
```

### iphoneに証明書をインストール

1. TOPページを表示
2. 「ルート証明書をダウンロード」をクリック
<!-- 1. `mkcert -CAROOT` で表示されるディレクトリにある `rootCA.pem` をメール or AirDrop等でiPhoneに送信 -->
<!-- 2. 送信されたファイルを開く -->
3. 設定からプロファイルをインストール
4. 設定 > 一般 > 情報 > 証明書信頼設定 で「ルート証明書を全面的に信頼する」をONにする

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
