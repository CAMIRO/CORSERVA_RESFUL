const Sequelize = require('sequelize')
const Joi = require('joi')
const db = require('../util/database')

const Item = db.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isValidName (value) {
        const schema = Joi.string().min(3).max(50).required()
        const { error } = schema.validate(value)
        if (error) {
          throw new Error('invalid name')
        }
      }
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      isValidDescription (value) {
        const schema = Joi.string().min(4).max(200).required()
        const { error } = schema.validate(value)
        if (error) {
          throw new Error('Invalid description')
        }
      }
    }
  }
})

module.exports = Item
