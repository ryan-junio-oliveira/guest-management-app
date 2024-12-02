const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './guestDB.sqlite' // Define o local do banco SQLite
});

const Guest = sequelize.define('Guest', {
  category: {
    type: DataTypes.STRING,
    allowNull: false // Noivo ou Noiva
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false // Tipo de convidado (trabalho, família, etc.)
  },
  principal: {
    type: DataTypes.STRING,
    allowNull: false // Pessoa principal
  },
  companions: {
    type: DataTypes.INTEGER,
    defaultValue: 0 // Número de acompanhantes (opcional)
  }
});

module.exports = { Guest, sequelize };
