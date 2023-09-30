import express, {Application, Request, Response} from 'express';
import http from 'http';
import { Server as WebSocketServer } from 'ws';

const app: Application = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());




app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to the streaming service!');
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
