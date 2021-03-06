import ScreenReciever from './screen-reciever';

const createVideo = () => {
  const aVideo = document.getElementsByTagName('a-video')[0];
  const remoteVideo = document.createElement('video');
  const assets = document.querySelector('a-assets');

  if(assets == null) {
    return;
  }

  assets.addEventListener('loadeddata', () => {
    console.log('loaded asset data');
  })

  // iosでvideoタグを自動再生する為に muted, playsinline 属性を追加
  remoteVideo.setAttribute('id', 'remote-video');
  remoteVideo.setAttribute('autoplay', 'true');
  remoteVideo.setAttribute('src', '');
  remoteVideo.setAttribute('muted', '');
  remoteVideo.setAttribute('playsinline', '');
  assets.appendChild(remoteVideo);

  remoteVideo.addEventListener('loadeddata', () => {
    // Pointing this aframe entity to that video as its source
    aVideo.setAttribute('src', `#remote-video`);
  });

  const reciever = new ScreenReciever(remoteVideo);
}

createVideo();