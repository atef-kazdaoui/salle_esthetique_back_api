const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/cnx');
const User = require('./Clients');

const RendezVous = sequelize.define(
  'RendezVous',
  {
    id_rendez_vous: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    date_disponible: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    heure_disponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minute_disponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

RendezVous.belongsTo(User, {
  foreignKey: 'iduser',
  onDelete: 'SET NULL',
});

module.exports = RendezVous;
