const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`
});
client.connect();

app.get('/api', async (req, res) => {
  await client.set('key', 'value');
  const value = await client.get('key');
  res.json({ redisValue: value });
});

app.get('/health', (req, res) => res.send('OK'));

app.listen(3000, () => console.log('API listening on port 3000'));
