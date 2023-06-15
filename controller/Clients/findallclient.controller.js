const Clientsmodel = require('../../models/user');

const findAll = async (req, res) => {
  try {
    
    const client = await Clientsmodel.findAll({where:{role:"utilisateur"}});
    //const client = await Clientsmodel.findAll();
    res.status(200).json({ client });
    
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  findAll,
};