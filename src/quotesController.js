const createError = require('http-errors');
const quotes = require('./quotes');

// return all quotes
// return a certain number of quotes
exports.index = (req, res) => {
     if(req.query.limit) {
        res.send(quotes.slice(0, req.params.limit))
    } else {
        res.send(quotes)
    }
}
// get a single random quote
exports.random = (req, res) => {
    let number = Math.floor(Math.random() * quotes.length)
    res.send(quotes[number])
}
// get a single random quote by tag
// get a certain number of quotes by tag
exports.randomByTag = (req, res) => {
    let filteredQuotes = quotes.filter(quote => quote.tag.includes(req.params.tag))
    let number = Math.floor(Math.random() * filteredQuotes.length)
    if(req.query.limit) {
        res.send(filteredQuotes.slice(0, req.query.limit))
    } else {
        res.send(filteredQuotes[number])
    }
}
// get a random quote by player (surname)
// get a certain number of quotes by surname
exports.randomByName = (req, res) => {
    let filteredQuotes = quotes.filter(quote => quote.name.surname.toLowerCase() == req.params.name)
    let number = Math.floor(Math.random() * filteredQuotes.length)
        if(req.query.limit) {
        res.send(filteredQuotes.slice(0, req.query.limit))
    } else {
        res.send(filteredQuotes[number])
    }
}