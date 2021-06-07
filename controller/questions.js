var connection = require('../connection')

exports.readQuestion = function(req, res) {
    var query = 'select * from question;'
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

exports.createQuestion = function(req, res) {
    var name = req.body.name
    var email = req.body.email
    var title = req.body.title
    var category = req.body.category
    var priority = req.body.priority
    var question = req.body.question
    var query = `insert into question (name, email, title, category, priority, question) values ('${name}', '${email}', '${title}', '${category}', '${priority}', '${question}');`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'New Question successfully posted'
            })
        }
    })
}