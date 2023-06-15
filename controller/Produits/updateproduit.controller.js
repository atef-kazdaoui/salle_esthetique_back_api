const Produitsmodel = require('../../models/produits');

const updateproduit = async (req, res) => {
  try {
    const verif = await Produitsmodel.count({ where: { idproduit: req.params.id } });
    if (verif === 0) {
      const message = "on n'a pas trouvé ce produit";
      return res.status(404).json({ message });
    }
    await Produitsmodel.update({
      nom_produit:req.body.nom_produit,
      description_produit:req.body.description_produit,
      prix_produit:req.body.prix_produit,
      nombre_produit:req.body.nombre_produit
    }, { where: { idproduit: req.params.id } });
    const updatedClient = await Produitsmodel.findOne({ where: { idproduit: req.params.id } });
    res.status(200).json({ updatedClient });
    
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { updateproduit };