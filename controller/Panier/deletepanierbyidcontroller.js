const Panier = require("../../models/Paniers");

const delete_panier = async (req, res) => {
  try {
    const result = await Panier.destroy({where: { iduser:req.params.id }}); // Supprime tous les documents du panier pour l'id_user donné
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "Une erreur s'est produite lors de la suppression du panier." });
  }
};
module.exports = { delete_panier };
