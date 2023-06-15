const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const User = require("./Clients");
const Produits = require("./Produits");

const Paniermodel = sequelize.define(
  "Paniers",
  {
    idpanier: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    iduser: {
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
Paniermodel.belongsTo(User, { foreignKey: 'iduser', onDelete: 'SET NULL' });

module.exports = Paniermodel;