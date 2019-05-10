import ScreenShare from './screen-share';

export default class ScreenSender extends ScreenShare {
  protected peerConnection?: RTCPeerConnection;
  private stream?: MediaStream;

  protected onMessage(data: string) {
    console.log('ws onmessage() data:', data);
    let message = JSON.parse(data);
    if (message.type === 'answer') {
      console.log('Received answer ...');
      const answer = new RTCSessionDescription(message);
      this.setAnswer(answer);
    }
  }

  /**
   * P2Pのコネクションを確立する
   */
  connect = async () => {
    this.stream = await this.getSharedStream();
    if (this.peerConnection == null) {
      console.log('make Offer');
      await this.makeOffer();
    }
    else {
      console.warn('peer already exist.');
    }
  }

  /**
   * 共有する画面のストリームを取得
   */
  private getSharedStream = async () => {
    try {
      if('getDisplayMedia' in navigator.mediaDevices) {
        const mediaDevices = <any>navigator.mediaDevices;
        return await mediaDevices.getDisplayMedia({video: {displaySurface: 'window'}, audio: false});
      }
    } catch(err) {
      console.error('getUserMedia error:', err);
      throw err;
    }
  }

  protected prepareNewConnection(): RTCPeerConnection {
    const peer = super.prepareNewConnection();

    if (this.stream) {
      console.log('Adding local stream...');
      this.stream.getTracks().forEach((track) => {
        peer.addTrack(track);
      })
    }
    else {
      console.warn('no local stream, but continue.');
    }

    return peer;
  }

  private makeOffer = async () => {
    this.peerConnection = this.prepareNewConnection();

    try {
      const sessionDescription = await this.peerConnection.createOffer();
      console.log('createOffer() succsess');
      await this.peerConnection.setLocalDescription(sessionDescription);
      console.log('setLocalDescription() succsess');
    } catch(err) {
      console.error(err);
      throw err;
    }
  }

  private setAnswer = async (sessionDescription: RTCSessionDescription) => {
    if (this.peerConnection == null) {
      console.error('peerConnection NOT exist!');
      return;
    }

    try {
      await this.peerConnection.setRemoteDescription(sessionDescription)
      console.log('setRemoteDescription(answer) succsess');
    } catch(err) {
      console.error('setRemoteDescription(answer) ERROR: ', err);
      throw err;
    }
  }
}