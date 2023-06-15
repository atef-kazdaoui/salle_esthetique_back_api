const Produitsmodel = require('../../models/Produits');

const updateproduit = async (req, res) => {
  try {
    const verif = await Produitsmodel.count({ where: { idproduit: req.params.id } });
    if (verif === 0) {
      const message = "on n'a pas trouvé ce produit";
      return res.status(404).json({ message });
    }
    
    let updatedValues = {
      nom_produit: req.body.nom_produit,
      description_produit: req.body.description_produit,
      prix_produit: req.body.prix_produit,
      nombre_produit: req.body.nombre_produit
    };

    // Vérifier si une nouvelle image est fournie
    if (req.files && req.files.image) {
      updatedValues.image = req.files.image[0].filename;
    }

    console.log(updatedValues);

    await Produitsmodel.update(updatedValues, { where: { idproduit: req.params.id } });
    const updatedProduit = await Produitsmodel.findOne({ where: { idproduit: req.params.id } });
    res.status(200).json({ updatedProduit });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { updateproduit };
