const Commandesmodel = require('../../models/commande');

const ajoutercommande = async (req, res) => {
  try {
     Commandesmodel.create({
      nom_commande: req.body.nom_commande,    
          
    });

    console.log(req.body.nom_commande);
res.status(200).json({ message: "Commande ajoutée avec succès" });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  ajoutercommande,
};
