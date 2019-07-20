const mongoose = require("mongoose")
const timestamp = require("mongoose-timestamp")

const ROLES = [
  "Minister",
  "Manager",
  "User"
]

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ROLES,
    required: true
  }
})
UserSchema.plugin(timestamp)

module.exports = mongoose.model("User", UserSchema)