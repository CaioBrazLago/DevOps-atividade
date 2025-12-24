const express = require('express');
const path = require('path');

const app = express();
const PORT = 80;

// Array mockado de produtos com ID e valor
const produtos = [
  { id: 1, nome: "Notebook Dell", valor: 3500.00 },
  { id: 2, nome: "Mouse Logitech", valor: 150.00 },
  { id: 3, nome: "Teclado Mecânico", valor: 450.00 },
  { id: 4, nome: "Monitor 27 polegadas", valor: 1800.00 },
  { id: 5, nome: "Headset Gamer", valor: 350.00 },
  { id: 6, nome: "Webcam HD", valor: 280.00 },
  { id: 7, nome: "SSD 1TB", valor: 520.00 },
  { id: 8, nome: "Memória RAM 16GB", valor: 380.00 },
  { id: 9, nome: "Placa de Vídeo RTX", valor: 4200.00 },
  { id: 10, nome: "Gabinete Gamer", valor: 650.00 }
];

// Servir arquivos estáticos
app.use(express.static('public'));

// Rota principal - retorna página HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API para retornar produtos em JSON
app.get('/api/produtos', (req, res) => {
  res.json(produtos);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
});
