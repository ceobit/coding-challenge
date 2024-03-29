import express from 'express';
import cors from 'cors';

import api from './api';

const app = express();

// added CORS support
const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

// Then pass these options to cors:
app.use(cors(options));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', api);

app.get('/hello-world', (_, res) => {
  res.send({
    message: 'Hello to you too! :)',
  });
});

const port = process.env.port || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
