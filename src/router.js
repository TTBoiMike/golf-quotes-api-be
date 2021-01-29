const express = require('express')
const router = express.Router()
const quotes = require('./quotesController')

router.get('/quotes/random', quotes.random)
router.get('/quotes/random/tag/:tag', quotes.randomByTag)

module.exports= router