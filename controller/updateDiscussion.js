var connection = require('../connection')

exports.updateDiscussion = function(req, res) {
    var id = req.params.id
    var answer = req.body.answer
    var query = `update discussion set answer = '${answer}' where id_question = '${id}';`
    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            res.send({
                message: 'Discussion successfully Answered'
            })
        }
    })
}