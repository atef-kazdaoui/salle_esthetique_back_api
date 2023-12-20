// Modèle Paniers
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const PanierItem = require("./PanierItem");

const Panier = sequelize.define(
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
  },
  {
    timestamps: false,
  }
);

// Relation avec PanierItems
Panier.hasMany(PanierItem, { foreignKey: 'idpanier' });
PanierItem.belongsTo(Panier, { foreignKey: 'idpanier',  as: 'PanierItems' });

module.exports = Panier;
