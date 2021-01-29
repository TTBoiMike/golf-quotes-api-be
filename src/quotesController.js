const createError = require('http-errors');
const quotes = require('./quotes');

exports.random = (req, res) => {
    let number = Math.floor(Math.random() * quotes.length)
    res.send(quotes[number])
}
exports.randomByTag = (req, res) => {
    let filteredQuotes = quotes.filter(quote => quote.tag.includes(req.params.tag))
    let number = Math.floor(Math.random() * filteredQuotes.length)
    res.send(filteredQuotes[number])
}