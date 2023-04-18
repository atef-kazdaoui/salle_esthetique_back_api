const Produitsmodel = require('../../models/produits');
const deleteProduit = async (req, res) => {
  try {
    const produit = await Produitsmodel.findOne({ where: { idproduit: req.params.id } });
    if (!produit) {
      return res.status(404).json({ error: 'Produit not found !' });
    } else {
      await Produitsmodel.destroy({ where: { idproduit: req.params.id } });
      res.status(200).json({ message: 'Produit deleted successfully !' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteProduit,
};