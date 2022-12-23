import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { createClient } from 'redis';

const client = createClient({ url: 'redis://default:redispw@localhost:55001' });

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/photos', async (req, res) => {
  //   const albumId = req.query.albumId;
  //   const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
  client.SETEX('photos', 3000, JSON.stringify('hi'));

  res.status(200).json('hi');
});

app.listen(5000, () => {
  console.log('Server started');
});
