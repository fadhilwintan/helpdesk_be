var connection = require('../connection')

exports.readDiscussion = function(req, res) {
    var query = 'select * from discussion;'
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

exports.createDiscussion = function(req, res) {
    var nim = req.body.nim
    var name = req.body.name
    var email = req.body.email
    var title = req.body.title
    var category = req.body.category
    var priority = req.body.priority
    var question = req.body.question
    var answer = req.body.answer
    var query = `insert into discussion (nim, name, email, title, category, priority, question, answer) values ('${nim}', '${name}', '${email}', '${title}', '${category}', '${priority}', '${question}', '${answer}');`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'New Discussion successfully posted'
            })
        }
    })
}