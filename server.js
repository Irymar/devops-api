const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from DevOps API!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
