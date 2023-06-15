const Categoriesmodel = require('../../models/categories');

const ajoutercategorie = async (req, res) => {
    try {
      await Categoriesmodel.create({
        nom_categorie: req.body.nom_categorie,
        
      });
  
      console.log(req.body.nom_categorie);
      res.status(200).json({ message: "Categorie ajoutée avec succès" });
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  module.exports = {
    ajoutercategorie,
  };