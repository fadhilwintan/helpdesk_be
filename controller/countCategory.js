var connection = require('../connection')

exports.countCategory = function(req, res) {
    var query = `select category, COUNT(category) from discussion group by category;`
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