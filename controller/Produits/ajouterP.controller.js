const Produitsmodel = require('../../models/produits');
const  sequelize = require("sequelize");
const ajouterproduit = async (req, res) => {
  try {
    const existingProduct = await Produitsmodel.findOne({ where: { nom_produit: req.body.nom_produit } });

    if (existingProduct) {
      await Produitsmodel.update(
        { nombre_produit: sequelize.literal(`nombre_produit + ${req.body.nombre_produit}`) },
        { where: { nom_produit: req.body.nom_produit } }
      );
      return res.status(400).json("on a deja ce produit et on a ajouter le nombre "+ req.body.nombre_produit+" au nombre deja enregistrer " );
    } else {
      await Produitsmodel.create({
        nom_produit: req.body.nom_produit,
        description_produit: req.body.description_produit,
        prix_produit: req.body.prix_produit,
        nombre_produit: req.body.nombre_produit || 0 // set default value to 0 if not provided
      });
      return res.status(200).send("ajout de produits avec succès");
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  ajouterproduit,
};

