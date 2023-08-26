const Item = require('../models/item')

// CRUD Controllers

// Get all items
exports.getItems = (req, res, next) => {
  Item.findAll()
    .then((items) => {
      res.status(200).json({ items })
    })
    .catch((err) => console.log(err))
}

// Get item by id
exports.getItem = (req, res, next) => {
  const itemId = req.params.itemId
  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'Item not found' })
      }
      res.status(200).json({ item })
    })
    .catch((err) => console.log(err))
}

// Create item
exports.createItem = (req, res, next) => {
  const name = req.body.name
  const description = req.body.description
  Item.create({
    name,
    description
  })
    .then((result) => {
      console.log('Create item')
      res.status(201).json({
        message: 'Item created successfully',
        item: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

// Update Item
exports.updateItem = (req, res, next) => {
  const itemId = req.params.itemId
  const updateName = req.body.name
  const updateDescription = req.body.description
  Item.findByPk(itemId)
    .then((item) => {
      if (!Item) {
        return res.status(404).json({ message: 'Item not found!' })
      }
      item.name = updateName
      item.description = updateDescription
      return item.save()
    })
    .then((result) => {
      res.status(200).json({ message: 'Item updated!', item: result })
    })
    .catch((err) => console.log(err))
}

// Delete item
exports.deleteItem = (req, res, next) => {
  const itemId = req.params.itemId
  Item.findByPk(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).json({ message: 'User not found!' })
      }
      return Item.destroy({
        where: {
          id: itemId
        }
      })
    })
    .then((result) => {
      res.status(200).json({ message: 'Item deleted!' })
    })
    .catch((err) => console.log(err))
}
