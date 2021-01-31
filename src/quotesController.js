const createError = require('http-errors');
const quotes = require('./quotes');

exports.index = (req, res, next) => {
    if(req.query.tag) {
        let filteredByTag = quotes.filter(quote => quote.tag.includes(req.query.tag))
        if(req.query.name) {
            let filteredByNameAndTag = filteredByTag.filter(quote => quote.name.surname.toLowerCase() === req.query.name)
            if(filteredByNameAndTag.length === 0) {
                return (next(createError(404,`Error. No ${req.query.name} quotes tagged as ${req.query.tag}`)))
            } else {
            res.send(filteredByNameAndTag)
            }
        } else {
            if(filteredByTag.length === 0) {
                return (next(createError(404,`Error. No quotes tagged as ${req.query.tag}`)))
            } else {
                res.send(filteredByTag)
            }
        }
    } else if(req.query.name) {
        let filteredByName = quotes.filter(quote => quote.name.surname.toLowerCase() === req.query.name)
        if(filteredByName.length === 0) {
            return (next(createError(404,`Error. No quotes with the surname ${req.query.name}`)))
        } else {
            res.send(filteredByName)
        }
    } else {
        res.send(quotes)
    }
}
exports.random = (req, res) => {
    let number = Math.floor(Math.random() * quotes.length)
    res.send(quotes[number])
}
exports.randomByTag = (req, res) => {
    let filteredQuotes = quotes.filter(quote => quote.tag.includes(req.params.tag))
    let number = Math.floor(Math.random() * filteredQuotes.length)
    if(req.query.limit) {
        res.send(filteredQuotes.slice(0, req.query.limit))
    } else {
        res.send(filteredQuotes[number])
    }
}
exports.randomByName = (req, res, next) => {
    let filteredByName = quotes.filter(quote => quote.name.surname.toLowerCase() == req.params.name)
    let number = Math.floor(Math.random() * filteredByName.length)
    if(req.query.tag) {
        let filteredByTag = filteredByName.filter(quote => quote.tag.includes(req.query.tag))
        if(filteredByTag.length === 0) {
            return (next(createError(404,`Error, No ${req.params.name} quotes tagged as ${req.query.tag}`)))
        } else {
            res.send(filteredByTag[number])
        }
    } else {
    res.send(filteredByName[number])
    }
}