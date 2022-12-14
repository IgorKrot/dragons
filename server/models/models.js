const sequelize = require("../db")
const {DataTypes} = require("sequelize")

const User = sequelize.define("user", {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   email: {type: DataTypes.STRING, unique: true},
   password: {type: DataTypes.STRING},
})

// const product = sequelize.define("product", {
//    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//    name: {type: DataTypes.INTEGER, unique: true, allowNull: false},
//    favoritestag: {type: DataTypes.INTEGER, unique: true},
// })

module.exports = {User}