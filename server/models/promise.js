const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")
const 

const UserSchema = new mongoose.Schema({

  // Идентификатор
  id: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },

  // Наименование
  title: {
    type: String,
    required: true
  },

  // Ответственный
  responsible: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  // Текст обещания
  text: {
    type: String,
    required: true
  }


})
UserSchema.plugin(timestamp)

module.exports = mongoose.model("Promise", UserSchema)