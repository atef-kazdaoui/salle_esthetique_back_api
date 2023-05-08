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
  },image: {
    type: DataTypes.STRING, // or BLOB, depending on the type of image you want to store
    allowNull: false // 
  },
},
  {
    timestamps: false,
  }
);
Produitsmodel.associate=models=>{
  Produitsmodel.hasMany(models.commande,{
    onDelete:"cascade"
  });
  Produitsmodel.hasMany(models.user,{
    onDelete:"cascade"
  });
  Produitsmodel.hasOne(models.categories,{
    onDelete:"cascade"
  })
}
module.exports = Produitsmodel;


