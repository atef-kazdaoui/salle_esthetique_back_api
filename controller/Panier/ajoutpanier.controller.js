const Panier = require("../../models/panier");

// Méthode pour ajouter un produit dans le panier d'un utilisateur
const ajouterProduitAuPanier = async (req, res) => {
  try {
    const { id_user, id_produit, quantite } = req.body;

    // Vérifier si un panier existe déjà pour l'utilisateur
    const panierExist = await Panier.findOne({
      where: { id_user },
    });

    if (panierExist) {
      // Si un panier existe déjà pour l'utilisateur, vérifier si le produit est déjà présent
      const produitExist = await Panier.findOne({
        where: { id_user, id_produit },
      });

      if (produitExist) {
        // Si le produit est déjà présent dans le panier, mettre à jour la quantité en ajoutant la nouvelle quantité
        produitExist.quantite =produitExist.quantite+ 1;
        await produitExist.save();
        return res.status(200).json({ message: "Le produit a été ajouté au panier.", panierItem: produitExist });
      } else {
        // Si le produit n'est pas présent dans le panier, créer une nouvelle entrée
        const panierItem = await Panier.create({
          id_user,
          id_produit,
          quantite,
        });
        return res.status(201).json({ message: "Le produit a été ajouté au panier.", panierItem });
      }
    } else {
      // Si aucun panier n'existe pour l'utilisateur, créer un nouveau panier avec le produit et la quantité
      const panierItem = await Panier.create({
        id_user,
        id_produit,
        quantite,
      });
      return res.status(201).json({ message: "Le produit a été ajouté au panier.", panierItem });
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit au panier :", error);
    return res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout du produit au panier." });
  }
};

module.exports = { ajouterProduitAuPanier };