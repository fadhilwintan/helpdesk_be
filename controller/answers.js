var connection = require('../connection')

exports.readAnswer = function(req, res) {
    var query = 'select * from answer;'
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

exports.createAnswer = function(req, res) {
    var answer = req.body.answer
    var query = `insert into answer (answer) values ('${answer}');`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'New Answer successfully posted'
            })
        }
    })
}