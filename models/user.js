const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const Clientsmodel = sequelize.define(
  "Clients",
  {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull:false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull:false
    },
    adresse_domicile: {
        type: DataTypes.STRING,
        allowNull:false
      },
      adresse_email: {
        type: DataTypes.STRING,
        allowNull:false
      },
      numero_telephone: {
        type: DataTypes.STRING,
        allowNull:false
      },
      password: {
        type: DataTypes.STRING, 
        allowNull:false
      },
      refreshToken: {
        type: DataTypes.STRING,
        defaultValue: null // or "" if you prefer an empty string
      }
      
  },
  {
    timestamps: false,
  }
);

Clientsmodel.sync({ alter: true });//bch tamelek synchronisation avec la base de donneés 
module.exports = Clientsmodel;
