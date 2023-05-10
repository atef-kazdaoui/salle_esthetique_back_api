const Produitsmodel = require('../../models/produits');
const getProduitsByCategorie = async (req, res) => {
    try {
      
      const client = await Produitsmodel.findAll({ where: { categorieId:req.params.id } });
      if (!client) {
        return res.status(404).json({ erreur: "produit not found" });
      }else {
      res.status(200).json({ client });
    }
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
  module.exports = {
    getProduitsByCategorie,
  };
  