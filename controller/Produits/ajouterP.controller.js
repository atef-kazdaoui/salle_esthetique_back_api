const Produitsmodel = require('../../models/produits');
const sequelize = require('sequelize');

const ajouterproduit = async (req, res) => {
  try {
    const existingProduct = await Produitsmodel.findOne({ where: { nom_produit: req.body.nom_produit } });
    if (existingProduct) {
      await Produitsmodel.update(
        { nombre_produit: sequelize.literal(`nombre_produit + ${req.body.nombre_produit}`) },
        { where: { nom_produit: req.body.nom_produit } }
      );
      return res
        .status(400)
        .json(`Le produit ${req.body.nom_produit} existe déjà. Nous avons ajouté ${req.body.nombre_produit} à sa quantité.`);
    } else {
      const produit = await Produitsmodel.create({
        nom_produit: req.body.nom_produit,
        description_produit: req.body.description_produit,
        prix_produit: req.body.prix_produit,
        nombre_produit: req.body.nombre_produit,
        image:req.file.filename,
        categorieId: req.body.categorieId 
      });
      return res.status(200).json({ message: 'Le produit a été ajouté avec succès', produit: produit });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
module.exports = {
  ajouterproduit,
};
