const produit_commande = require('../../models/produit_commande');

const ajouter_produit_commande = async (req, res) => {
    try {
      await produit_commande.create({
        
        id_produit: req.body.id_produit,
        id_commande: req.body.id_commande
      });
  
      
      res.status(200).json({ message: "assiacion ajoutée avec succès" });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    ajouter_produit_commande,
  };