const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user')
const config = require('../../config')

const router = express.Router()

router.post('/signup', async (req, res) => {
  try {

    console.log(req.body)

    if (!req.body.email || !req.body.pass) {
      return res.status(400).json({
        error: null,
        message: "Пожалуйста введите ваш емэйл и пароль!"
      })
    }

    const isRegistered = await User.findOne({ email: req.body.email })
    if (isRegistered) {
      return res.status(400).json({
        error: null,
        message: "Такой пользователь уже существует!"
      })
    } else {
      const { email, pass } = req.body
      const user = new User({ email, pass })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.pass, salt, async (err, hash) => {
          user.pass = hash
          try {
            await user.save()
            return res.status(201).json({
              error: null,
              message: "Пользователь успешно зарегистрирован!"
            })
          } catch (error) {
            return res.status(500).json({
              error,
              message: 'Ох ох, что-то произошло не так, пожалуйста попробуйте еще раз!'
            })
          }
        })
      })
    }

  } catch (error) {
    return res.status(500).json({
      error,
      message: 'Ох ох, что-то произошло не так, пожалуйста попробуйте еще раз!'
    })
  }
})

router.post('/signin', async (req, res) => {
  try {
    console.log(req.body)
    const { email, pass } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({
        error: null,
        message: "Такой пользователь не зарегистрован!"
      })
    }
    bcrypt.compare(pass, user.pass, (err, result) => {
      if (!result) {
        return res.status(401).json({
          error: null,
          message: "Пароль не верный!"
        })
      }

      const token = jwt.sign(user.toJSON(), config.JWT_SECRET, {
        expiresIn: "15m"
      })
      const { iat, exp } = jwt.decode(token)
      return res.status(200).json({ iat, exp, token })
    })
  } catch (error) {
    return res.status(500).json({
      error,
      message: 'Ох ох, что-то произошло не так, пожалуйста попробуйте еще раз!'
    })
  }
})

router.get('/create', (req, res) => {
  var user = new User({
    email: "vmp@live.ru",
    password: "12345",
    name: "Вася Пупкин",
    role: "Minister"
  })
  user.save((err, user) => {
    res.json('OK')
  })
})

module.exports = router