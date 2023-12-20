// Paniers.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/cnx');
const PanierItem = require('./PanierItem');
const Clientsmodel = require('./Clients');

const Panier = sequelize.define(
  'Paniers',
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
PanierItem.belongsTo(Panier, { foreignKey: 'idpanier', as: 'PanierItems' });

// Ajoute la relation avec Clients
Panier.belongsTo(Clientsmodel, { foreignKey: 'iduser', as: 'Client' });

module.exports = Panier;
