const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const produits = require("./produits");
const Categoriesmodel = sequelize.define(
  "Categories",
  {
    idcategorie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nom_categorie: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    id_produit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: produits,
        key: "idproduit"
      }
    }
  },
  {
    timestamps: false,
  }
);
Categoriesmodel.associate = (models) => {
  Categoriesmodel.hasMany(models.produits, {
    onDelete: "cascade",
  });
};

/**
 * (async () => {
  await sequelize.sync({ force: true }); 
  console.log('Les modèles ont été synchronisés avec la base de données');

  // Utiliser le modèle Categoriesmodel
  const categories = await Categoriesmodel.findAll();
  console.log(categories);
})();

 */
 

module.exports = Categoriesmodel;
