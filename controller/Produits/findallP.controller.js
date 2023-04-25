const Produitsmodel = require('../../models/produits');

const findAll = async (req, res) => {
  try {
    
    const produit = await Produitsmodel.findAll();
    res.status(200).json({ produit });
    
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

module.exports = {
  findAll,
};