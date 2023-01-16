const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  sequelize.define('user', {
    id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
    firstname: {
			allowNull: false,
			type: DataTypes.STRING
		},
    lastname: {
			allowNull: false,
			type: DataTypes.STRING
		},
  })
}