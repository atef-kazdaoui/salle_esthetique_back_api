const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const Produitsmodel = sequelize.define(
  "Produits",
  {
    idproduit: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_produit: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description_produit: {
        type: DataTypes.TEXT,
      allowNull:false
    },
    prix_produit: {
        type: DataTypes.FLOAT,
        allowNull:false
    },
    nombre_produit: {
      type: DataTypes.INTEGER,
      defaultValue: null 
  }
    
      
  },
  {
    timestamps: false,
  }
);

Produitsmodel.sync({ alter: true });//bch tamelek synchronisation avec la base de donneés 
module.exports = Produitsmodel;
