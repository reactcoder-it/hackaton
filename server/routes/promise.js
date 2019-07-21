const express = require('express')

const Promise = require('../models/promise')

const router = express.Router()

router.post('/', (req, res) => {
  if (req.body) {
    const data = req.body
    console.log(data)
    const newPromise = new Promise({ data })
    newPromise.save((err, item) => {
      if (err) {
        res.sendStatus(500)
        console.log(err)
      }
      res.json(item)
    })
  }
})

module.exports = router