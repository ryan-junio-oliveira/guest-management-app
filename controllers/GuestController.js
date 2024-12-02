const { Guest } = require('../models/Guest.js'); // Certifique-se de que está importando o Guest corretamente

// Exibir todos os convidados
exports.getGuests = async (req, res) => {
  try {
    const guests = await Guest.findAll(); // Método correto em Sequelize é findAll()
    res.render('guests', { guests: guests });
  } catch (err) {
    console.log(err);
    res.status(500).send("Erro ao buscar convidados.");
  }
};

// Criar um novo convidado
exports.createGuest = async (req, res) => {
  const { category, type, principal, companions } = req.body;
  
  try {
    // Sequelize usa o método create para adicionar um novo registro
    await Guest.create({ category, type, principal, companions });
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(500).send("Erro ao criar convidado.");
  }
};

// Atualizar um convidado (POST)
exports.updateGuest = async (req, res) => {
    const guestId = req.params.id;
    const { category, type, principal, companions } = req.body;
  
    try {
      const guest = await Guest.findByPk(guestId);
      if (!guest) {
        return res.status(404).send("Convidado não encontrado.");
      }
      
      // Atualiza os dados do convidado
      await guest.update({ category, type, principal, companions });
      res.redirect('/');  // Redireciona para a lista de convidados
    } catch (err) {
      console.log(err);
      res.status(500).send("Erro ao atualizar convidado.");
    }
  };

  // Deletar um convidado (POST)
exports.deleteGuest = async (req, res) => {
    const guestId = req.params.id;
  
    try {
      const guest = await Guest.findByPk(guestId);
      if (!guest) {
        return res.status(404).send("Convidado não encontrado.");
      }
  
      await guest.destroy();  // Deleta o convidado
      res.redirect('/');  // Redireciona para a lista de convidados
    } catch (err) {
      console.log(err);
      res.status(500).send("Erro ao deletar convidado.");
    }
  };
  
  