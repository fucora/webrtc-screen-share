import ScreenShare from './screen-share';

export default class ScreenReciever extends ScreenShare {
  private remoteVideo: HTMLVideoElement;
  protected peerConnection?: RTCPeerConnection;
  private inboundStream?: MediaStream;

  constructor(video: HTMLVideoElement) {
    super();
    this.remoteVideo = video;
  }

  protected onMessage = (data: string) => {
    console.log('ws onmessage() data:', data);
    let message = JSON.parse(data);
    if (message.type === 'offer') {
      console.log('Received offer ...');
      const offer = new RTCSessionDescription(message);
      this.setOffer(offer);
    }
  }

  protected prepareNewConnection(): RTCPeerConnection {
    const peer = super.prepareNewConnection();

    peer.ontrack = (event) => {
      console.log('-- peer.ontrack()');
      if(event.streams && event.streams[0]) {
        console.log('add stream');
        this.playVideo(event.streams[0]);
      } else {
        console.log('add track');
        if(this.inboundStream == null) {
          this.inboundStream = new MediaStream();
          this.playVideo(this.inboundStream);
        }
        this.inboundStream.addTrack(event.track);
      }
    };

    return peer;
  }

  private playVideo = (stream: MediaStream) => {
    const video = this.remoteVideo;
    video.srcObject = stream;

    try {
      video.play();
    } catch(err) {
      alert(err);
    }

    video.volume = 0;
  }

  private makeAnswer = async () => {
    console.log('sending Answer. Creating remote session description...' );
    if (this.peerConnection == null) {
      console.error('peerConnection NOT exist!');
      return;
    }

    try {
      const sessionDescription = await this.peerConnection.createAnswer()
      console.log('createAnswer() succsess');

      await this.peerConnection.setLocalDescription(sessionDescription);
      console.log('setLocalDescription() succsess');
    } catch(err) {
      console.error(err);
    }
  }

  private setOffer = async (sessionDescription: RTCSessionDescription) => {
    if (this.peerConnection != null) {
      console.error('peerConnection alreay exist!');
      return;
    }

    try {
      this.peerConnection = this.prepareNewConnection();
      await this.peerConnection.setRemoteDescription(sessionDescription);
      await this.makeAnswer()
    } catch(err) {
      console.error('setRemoteDescription(offer) ERROR: ', err);
    }
  }
}