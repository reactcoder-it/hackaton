const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const config = require('../../config')
const router = express.Router()

// Авторизация пользователя в системе
router.post("/login", (req, res) => {
  if (req.body.email && req.body.password) {
    var email = req.body.email
    var password = req.body.password

    console.log(email, password)

    User.findOne({ email }, (err, user) => {
      if (err) return res.sendStatus(500)

      if (!user) {
        return res.status(401).json({ message: 'No such user found' })
      }

      if (user.password === password) {
        const payload = { id: user._id }
        console.log(payload)
        const token = jwt.sign(payload, config.JWT_SECRET)
        res.json({
          message: 'ok',
          token,
          userId: user._id,
          username: user.name
        })
      } else {
        res.status(401).json({ message: "password did not match" })
      }
    })
  } else {
    res.sendStatus(500)
  }
})

module.exports = router