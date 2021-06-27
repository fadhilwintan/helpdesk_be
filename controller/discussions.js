var connection = require('../connection')

exports.readDiscussion = function(req, res) {
    var query = `select * from discussion;`
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

exports.detailDiscussion = function(req, res) {
    var uname = req.params.username
    var query = `select * from discussion where username = '${uname}';`
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

    var username = req.body.username
    var title = req.body.title
    var category = req.body.category
    var priority = req.body.priority
    var question = req.body.question
    var answer = null
    var query = `insert into discussion (username, title, category, priority, question, answer) values ('${username}', '${title}', '${category}', '${priority}', '${question}', '${answer}');`
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

// exports.updateDiscussion = function(req, res) {
//     var id = req.params.id
//     var answer = req.body.answer
//     var query = `update discussion set answer = '${answer}'where id_question = ${id_question};`
//     connection.query(query, (err, results) => {
//         if(err){
//             throw err
//         }
//         else{
//             res.send({
//                 message: 'New Discussion successfully posted'
//             })
//         }
//     })
// }