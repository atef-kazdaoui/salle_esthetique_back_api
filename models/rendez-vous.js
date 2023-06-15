<<<<<<< HEAD
const {Sequelize, DataTypes} = require ('sequelize');
const sequelize = require ('../config/cnx');
const User = require ('./user');

const Rendez_vous_model = sequelize.define (
  'Rendez_vous',
=======
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/cnx");
const User = require("./user");
const Rendez_vous_model = sequelize.define(
  "Rendez_vous",
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
  {
    id_rendez_vous: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
<<<<<<< HEAD
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
=======
      defaultValue:null,
      
    },
    date_diponible: {
      type: DataTypes.DATE,
      allowNull: false,
    }
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
  },
  {
    timestamps: false,
  }
);

<<<<<<< HEAD
Rendez_vous_model.belongsTo (User, {
  foreignKey: 'id_user',
  onDelete: 'SET NULL',
});

module.exports = Rendez_vous_model;
=======

Rendez_vous_model.belongsTo(User, { foreignKey: 'id_user', onDelete: 'SET NULL' });

module.exports = Rendez_vous_model;
>>>>>>> effee5d1ff00343b9f0741dcb15bd858fbae4571
