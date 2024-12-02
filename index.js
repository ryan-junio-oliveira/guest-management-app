const express = require('express');
const bodyParser = require('body-parser');
const guestRoutes = require('./routes/routes.js');
const { sequelize } = require('./models/Guest.js'); // Importa a instância Sequelize

const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao SQLite com Sequelize
sequelize.sync().then(() => {
  console.log("Conectado ao SQLite!");
}).catch(err => {
  console.error("Erro ao conectar ao SQLite:", err);
});

app.use(express.static('public'));  // Serve arquivos da pasta "public"

// Rotas
app.use('/', guestRoutes);

// Servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
