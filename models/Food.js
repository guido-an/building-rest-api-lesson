const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodSchema = new Schema({
  name: String,
  country: String
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food
