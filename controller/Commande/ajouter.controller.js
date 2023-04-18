const Commandesmodel = require('../../models/commande');
const ajoutercommande = async (req, res) => {
  try {
    await Commandesmodel.create({
      nom_commande: req.body.nom_commande,           
      });
      return res.status(200).send("ajout de commande avec succès");
    }
   catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  ajoutercommande,
};


