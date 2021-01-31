const express = require('express')
const router = express.Router()
const quotes = require('./quotesController')

// returns all quotes
router.get('/quotes', quotes.index)
// returns a random quote
router.get('/quotes/random', quotes.random)
// returns a random quote by tag or a set number by tag
router.get('/quotes/random/tag/:tag', quotes.randomByTag)
// returns a random quote by name or a set number by name
router.get('/quotes/random/name/:name', quotes.randomByName)

module.exports= router