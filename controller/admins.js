var connection = require('../connection')
var bcrypt = require('bcryptjs')

exports.registerAdmin = function(req, res) {

    var username = req.body.username
    var password = req.body.password
    var security = req.body.security
    var name = req.body.name
    var hashedPassword = bcrypt.hashSync(password);
    var query = `insert into admin (username, password, name) values ('${username}', '${hashedPassword}', '${name}')`

    connection.query(query, (err, results) => {
        if(err){
            throw err
        }
        else{
            if(security == 'adminhelpdeskUPNVJ'){
                res.send({
                    message: "success",
                    data: results.rows
                })
            }
            res.send({
                message: "failed"
            })
            res.end()
        }
    })
}