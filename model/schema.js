const Sequelize = require('sequelize')
const sequelize = require('./db')
const User = sequelize.define("bot", {
   
   userId:{
      type:Sequelize.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
   },
   name: { type: Sequelize.STRING, allowNull:false },

   createdAt: Sequelize.DATE,
   updatedAt: Sequelize.DATE,
})

module.exports = User