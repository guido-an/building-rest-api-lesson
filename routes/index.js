const express = require('express')
const router = express.Router()
const Food = require('../models/Food')

// Create a food
router.post('/foods/create', (req, res) => {
  const { name, country } = req.body
  Food.create({ name, country })
    .then(response => {
      res.json(response)
    })
    .catch(err => {
      console.log(err)
    })
})

// Get all the foods
router.get('/foods', (req, res) => {
  Food.find()
    .then(foods => {
      res.json(foods)
    })
    .catch(err => {
      console.log(err)
    })
})

// Get a single food
router.get('/foods/:id', (req, res) => {
  Food.findById({ _id: req.params.id })
    .then(food => {
      res.json(food)
    })
    .catch(err => {
      console.log(err)
    })
})

// Update a food
router.put('/foods/:id/edit', (req, res) => {
  const { name, country } = req.body
  Food.findByIdAndUpdate({ _id: req.params.id }, { name, country })
    .then(food => {
      res.json({ message: `${food.name} was updated succesfully` })
    })
    .catch(err => {
      console.log(err)
    })
})

// Delete food
router.delete('/foods/:id/delete', (req, res) => {
  Food.findByIdAndDelete({ _id: req.params.id })
    .then(food => {
      res.json({ message: `${food.name} was deleted` })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
