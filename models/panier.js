const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const User = require("./user");
const Produits = require("./produits");

const Paniermodel = sequelize.define(
  "panier",
  {
    idpanier: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    id_produit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1, // Valeur par défaut de la quantité (peut être ajustée selon vos besoins)
    },
  },
  {
    timestamps: false,
  }
);

Paniermodel.belongsTo(Produits, { foreignKey: 'id_produit' });
Paniermodel.belongsTo(User, { foreignKey: 'id_user', onDelete: 'SET NULL' });

module.exports = Paniermodel;