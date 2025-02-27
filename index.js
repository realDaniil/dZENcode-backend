import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { router } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', router);

const server = createServer(app);

const wss = new WebSocketServer({ server });

let connectedUsers = 0;

wss.on('connection', (ws) => {
  connectedUsers++;

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify({ type: 'userCount', count: connectedUsers }));
    }
  });

  ws.on('close', () => {
    connectedUsers--;

    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(JSON.stringify({ type: 'userCount', count: connectedUsers }));
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Server with WS is running on http://localhost:${PORT}`);
});
