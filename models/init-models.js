const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const modelVehicule = require("./utilisateur");

const Vehicules = modelVehicule(DataTypes, sequelize)


const db = {
    Vehicules
}
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
  
db.sequelize = sequelize;
module.exports = db;