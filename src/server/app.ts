import { json } from 'body-parser';
import config from 'config';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import * as expressWinston from 'express-winston';
import * as http from 'http';
import * as winston from 'winston';
import { initialize } from '../dbhelper/mongoose';
import { Router } from './routes';

const app: Application = express();
const server: http.Server = http.createServer(app);
const port = config.get('expressPort');

app.use(json());
app.use(cors());

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json()),
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true
  })
);

app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);

Router.init(app);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send(`Server running at http://localhost:${port}`);
});

server.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}`);
  await initialize();
});
