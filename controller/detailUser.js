var connection = require('../connection')

exports.detailUser = function(req, res) {
    var uname = req.params.uname
    var query = `select * from users where username = '${uname}'`
    connection.query(query, (err, results) => {
        if(err) {
            throw err
        }
        else{
            res.send({
                message: "success",
                data: results.rows
            })
        }
    })
}