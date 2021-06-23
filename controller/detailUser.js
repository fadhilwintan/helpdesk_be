var connection = require('../connection')

exports.detailUser = function(req, res) {
    var query = 'select * from users where username=${username};'
    connection.query(query, (err, results) => {
        if(err) {
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