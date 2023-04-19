const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const user = require("./user"); 
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
     },
      

      
  },
  {
    timestamps: false,
  }
);
Commandesmodel.associate=models=>{
  Commandesmodel.hasMany(models.produit,{
    onDelete:"cascade"
  });
  Commandesmodel.hasOne(models.user,{
    onDelete:"cascade"
  });
}

module.exports = Commandesmodel;

 
/**
 *module.exports =(sequelize,DataType)=>{
    
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
        },
          
    
          
      },
      {
        timestamps: false,
      }
    );
    Commandesmodel.associate=models=>{
      Commandesmodel.hasMany(models.produit,{
        onDelete:"cascade"
      });
      Commandesmodel.hasOne(models.user,{
        onDelete:"cascade"
      });
    }
    
    return Commandesmodel;
  

  }
 
 */
  