const Panier = require("../../models/Paniers");
const PanierItem = require("../../models/PanierItem");
const sequelize = require("../../config/cnx");

const ajouterProduitAuPanier = async (req, res) => {
  const t = await sequelize.transaction();

  try {
    const { id_user, id_produit, quantite } = req.body;

    // Vérifier si un panier existe déjà pour l'utilisateur
    let panierExist = await Panier.findOne({ where: { iduser: id_user } });

    if (!panierExist) {
      // Si aucun panier n'existe pour l'utilisateur, créer un nouveau panier
      panierExist = await Panier.create({ iduser: id_user }, { transaction: t });
    }

    // Vérifier si le produit est déjà présent dans le panier
    let produitExist = await PanierItem.findOne({
      where: { idpanier: panierExist.idpanier, id_produit },
    });

    if (produitExist) {
      // Si le produit est déjà présent dans le panier, mettre à jour la quantité en ajoutant la nouvelle quantité
      produitExist.quantite += 1;
      await produitExist.save({ transaction: t });

      // Commit la transaction
      await t.commit();

      return res.status(200).json({
        message: "Le produit a été ajouté au panier merci.",
        panierItem: produitExist,
      });
    } else {
      // Si le produit n'est pas présent dans le panier, créer une nouvelle entrée dans PanierItems
      const panierItem = await PanierItem.create(
        {
          idpanier: panierExist.idpanier,
          id_produit,
          quantite,
        },
        { transaction: t }
      );

      // Commit la transaction
      await t.commit();

      return res
        .status(201)
        .json({ message: "Le produit a été ajouté au panier.", panierItem });
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit au panier :", error);

    // Rollback la transaction en cas d'erreur
    await t.rollback();

    return res.status(500).json({
      message:
        "Une erreur s'est produite lors de l'ajout du produit au panier. Merci.",
    });
  }
};

module.exports = { ajouterProduitAuPanier };
