const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API de teste' });
});

app.post('/enviar', (req, res) => {
  const data = req.body;
  res.json({ message: 'Dados recebidos:', data });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
