const express = require("express")
const next = require("next")
const path = require("path")
const mongoose = require('mongoose')
const config = require('./config')

const passport = require('passport')
const passportJwt = require('passport-jwt')
const User = require('./server/models/user')

// Настройка Passport-JWT
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
jwtOptions.secretOrKey = config.JWT_SECRET

const strategy = new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  console.log('payload receive', jwt_payload)

  User.findOne({ _id: jwt_payload.id }, (err, user) => {
    if (err) {
      return next(err, false)
    }

    if (user) {
      return next(null, user)
    } else {
      return next(null, false)
    }
  })
})

passport.use(strategy)

// Настройка Next.js
const port = config.PORT
const dev = config.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// API routes
const userRoutes = require('./server/routes/user')
const authRoutes = require('./server/routes/auth')

console.log(config)

const opts = {
  useNewUrlParser: true,
  useFindAndModify: false
}

app.prepare().then(() => {
  
  mongoose.connect(config.DB_URI, opts, function(err) {
    if (err) throw err

    const server = express()

    server.use(passport.initialize())

    server.use(express.json())
    server.use(express.urlencoded({
      useNewUrlParser: true,
      extended: true
    }))

    // API
    server.use('/api/user', userRoutes)
    server.use('/api/auth', authRoutes)

    // Для Next.js
    server.get('/building/:id', (req, res) => {
      const actualPage = '/building';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/project/:id', (req, res) => {
      const actualPage = '/project';
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    })

    server.get('/realty/:id', (req, res) => {
      const actualPage = '/realty'
      const queryParams = { id: req.params.id } 
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/post/:slug', (req, res) => {
      const actualPage = '/post'
      const queryParams = { slug: req.params.slug } 
      app.render(req, res, actualPage, queryParams)
    })

    server.get("*", (req, res) => {
      return handle(req, res);
    })

    // Запуск сервера
    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    })
  })
})
