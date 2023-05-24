const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/cnx');
const Produits = require('./produits');
const Commande = require('./commande');

const ProduitCommande = sequelize.define("produit_commande", {
  id_produit_commande: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  id_produit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_commande: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: false,
});

// Définition de la relation entre les modèles
ProduitCommande.belongsTo(Produits, { foreignKey: 'id_produit' });
ProduitCommande.belongsTo(Commande, { foreignKey: 'id_commande' });

module.exports = ProduitCommande;