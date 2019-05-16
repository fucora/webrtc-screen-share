import ScreenReciever from './screen-reciever';

const createVideo = () => {
  var aVideo = document.createElement('a-video');
  aVideo.setAttribute('height', '9');
  aVideo.setAttribute('width', '16');
  aVideo.setAttribute('position', '0 4 -9');
  console.log('ATTACH NOW');
  const videoHolder = document.getElementById('video-holder');

  if(videoHolder == null) {
    console.error('not find element "#video-holder"');
    return;
  }

  videoHolder.appendChild(aVideo);

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

const fullscreenIconBox = document.getElementsByClassName('fullscreen-icon-box')[0];
fullscreenIconBox.addEventListener('click', () => {
  const body: any = document.body;
  if(body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if(body.webkitRequestFullscreen) {
    body.webkitRequestFullscreen();
  }
});
