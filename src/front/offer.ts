import ScreenSender from './screen-sender';

(async () => {
  const sender = new ScreenSender();

  const connect = document.getElementById('connect-button');
  if(connect != null) {
    connect.addEventListener('click', sender.connect);
  }
})();