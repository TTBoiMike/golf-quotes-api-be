const express = require('express')
const router = express.Router()
const quotes = require('./quotesController')

router.get('/quotes', quotes.index)
router.get('/quotes/id/:id', quotes.quoteById)
router.get('/quotes/tag/:tag', quotes.quoteByTag)
router.get('/quotes/random', quotes.random)
router.get('/quotes/random/tag/:tag', quotes.random)

module.exports= router