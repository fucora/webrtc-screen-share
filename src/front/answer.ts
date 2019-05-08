import ScreenReciever from './screen-reciever';

const remoteVideo = <HTMLVideoElement>document.getElementById('remote-video');
const reciever = new ScreenReciever(remoteVideo);