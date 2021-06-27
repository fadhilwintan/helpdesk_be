var connection = require('../connection')

exports.readSuggestion = function(req, res) {
    var query = `select * from suggestion;`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'success',
                data: results.rows
            })
        }
    })
}

exports.createSuggestion = function(req, res) {
    var name = req.body.name
    var suggestion = req.body.suggestion
    var query = `insert into suggestion (name, suggestion) values ('${name}', '${suggestion}');`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'Thank you for your input'
            })
        }
    })
}