const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const user=require("../models/user");
const Declarationsmodel = sequelize.define(
  "Declaration",
  {
    id_declaration: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    message: {
      type: DataTypes.TEXT, // Utilisation du type de données TEXT pour un long texte
      allowNull: false,
    },
    iduser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'CLients', // Nom du modèle "CLients" au lieu de "user"
        key: 'iduser'
      }
    }
  },
  {
    timestamps: false,
  }
);

Declarationsmodel.associate = (models) => {
  Declarationsmodel.belongsTo(models.Clients, { foreignKey: 'iduser' });
};

module.exports = Declarationsmodel;
