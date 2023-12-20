const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");

const PanierItem = sequelize.define(
  "PanierItems",
  {
    idpanieritem: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    idpanier: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_produit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = PanierItem;
