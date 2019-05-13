const fs = require('fs');
const express = require('express');
const app = express();
const https = require('https');

const WebSocket = require('ws');

const PORT = 3001;
const SSL_DIRECTORY = '/etc/ssl';

const server = https.createServer({
  cert: fs.readFileSync(`${SSL_DIRECTORY}/cert.pem`),
  key: fs.readFileSync(`${SSL_DIRECTORY}/key.pem`),
}, app);
const wss = new WebSocket.Server({ server: server });

app.use(express.static(__dirname + '/../../public'));
app.use('/build', express.static(__dirname + '/../../build'));
app.use('/ca', express.static('/etc/ssl/ca'));

wss.on('connection', function(ws) {
  console.log('-- websocket connected --');
  ws.on('message', function(message) {
    wss.clients.forEach(function each(client) {
      if (isSame(ws, client)) {
        console.log('- skip sender -');
      }
      else {
        client.send(message);
      }
    });
  });
});

function isSame(ws1, ws2) {
  // -- compare object --
  return (ws1 === ws2);
}

server.listen(PORT);
console.log('websocket server start. port=' + PORT);
