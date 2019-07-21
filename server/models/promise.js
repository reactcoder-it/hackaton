const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")

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
    type: String,
    required: true
  },

  // Текст обещания
  text: {
    type: String,
    required: true
  },

  // Исполнитель
  executor: {
    type: String,
    required: true
  },

  // Дата дачи обещания
  startDate: {
    type: Date,
    default: Date.now()
  },

  // Срок
  limitation: {
    type: Date,
    required: true
  },

  // Завершено
  finished: {
    type: Boolean,
    required: true
  }
})
UserSchema.plugin(timestamp)

module.exports = mongoose.model("Promise", UserSchema)