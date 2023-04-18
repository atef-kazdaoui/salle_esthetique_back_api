const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const Commandesmodel = sequelize.define(
  "Commandes",
  {
    idcommande: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_commande: {
      type: DataTypes.STRING,
      allowNull:false}

    
      
  },
  {
    timestamps: false,
  }
);

Commandesmodel.sync({ alter: true });//bch tamelek synchronisation avec la base de donneés 
module.exports = Commandesmodel;
