const createError = require('http-errors');
const quotes = require('./quotes');

exports.index = (req, res) => {
    res.send(quotes)
}
exports.quoteById = (req, res, next) => {
    const quotesById = quotes.filter(quote => quote.id == req.params.id)
    console.log(quotesById.length)
    if(quotesById.length == 0) {
        return(next(createError(404, `No quote with tag: ${req.params.id}`)))
    }
    res.send(quotesById)
}
exports.quoteByTag = (req, res, next) => {
    const filteredQuotes = []
    quotes.forEach(quote => {
        if(quote.tags.includes(req.params.tag)) {
            filteredQuotes.push({name: quote.name, quote: quote.quote})
        }
    })
    if(filteredQuotes.length == 0) {
        return(next(createError(404, `No quote with tag: ${req.params.tag}`)))
    } else {
        res.send(filteredQuotes)
    }
}
exports.random = (req, res) => {
    let number = Math.floor(Math.random() * quotes.length)
    if(req.params.tag !== undefined) {
        let filteredQuotes = quotes.filter(quote => quote.tags.includes(req.params.tag))
        res.send(filteredQuotes[number-1])
    } else {
        console.log("random")
        res.send(quotes[number])
    }
}
