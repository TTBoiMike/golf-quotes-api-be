const createError = require('http-errors');
const quotes = require('./quotes');

exports.random = (req, res) => {
    let number = Math.floor(Math.random() * quotes.length)
    res.send([quotes[number]])
}
exports.randomByTag = (req, res) => {
    // console.log(req.query.limit)
    let filteredQuotes = quotes.filter(quote => quote.tag.includes(req.params.tag))
    let number = Math.floor(Math.random() * filteredQuotes.length)
    if(req.query.limit === 1) {
        res.send(filteredQuotes[number])
    } else {
        res.send(filteredQuotes.slice(0, req.query.limit))
    }
}