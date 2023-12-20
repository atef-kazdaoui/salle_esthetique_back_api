const Panier = require('../../models/Paniers');
const PanierItem = require('../../models/PanierItem');

const afficherPanier = async (req, res) => {
  try {
    const id_user = req.params.id;

    // Utilisez une jointure pour récupérer les informations du panier et des produits associés
    const panierItems = await Panier.findAll({
      where: { iduser: id_user },
      include: [{ model: PanierItem, as: 'PanierItems' }],
    });

    return res.status(200).json(panierItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de la récupération du panier' });
  }
};

module.exports = { afficherPanier };
