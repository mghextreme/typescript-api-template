import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';

const port = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World'
  });
});

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`API started at http://localhost:${port}`);
});
