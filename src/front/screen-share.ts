export default abstract class ScreenShare {
  protected ws: WebSocket;
  protected abstract peerConnection?: RTCPeerConnection;

  protected abstract onMessage(event: MessageEvent): void;

  constructor() {
    this.ws = new WebSocket(this.WS_URL);
    this.ws.onopen = (evt) => {
      console.log('ws open()');
    };
    this.ws.onerror = (err) => {
      console.error('ws onerror() ERR:', err);
    };

    this.ws.onmessage = (event: MessageEvent) => this.onMessage(event);
  }

  protected prepareNewConnection(): RTCPeerConnection {
    let pc_config = {"iceServers":[]};
    const peer = new RTCPeerConnection(pc_config);

    // --- on get local ICE candidate
    peer.onicecandidate = (evt) => {
      if (evt.candidate) {
        console.log(evt.candidate);

        // Trickle ICE の場合は、ICE candidateを相手に送る
        // Vanilla ICE の場合には、何もしない
      } else {
        console.log('empty ice event');

        // Trickle ICE の場合は、何もしない
        // Vanilla ICE の場合には、ICE candidateを含んだSDPを相手に送る
        if(peer.localDescription != null) {
          this.sendSdp(peer.localDescription);
        }
      }
    };

    return peer;
  }

  private sendSdp = (sessionDescription: RTCSessionDescription) => {
    console.log('---sending sdp ---');

    const message = JSON.stringify(sessionDescription);
    this.ws.send(message);
  }

  get WS_URL(): string {
    return `ws://${location.hostname}:3001/`;
  }
}
