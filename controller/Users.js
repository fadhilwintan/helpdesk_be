var connection = require('../connection')
var bcrypt = require('bcryptjs')

exports.registerUser = function(req, res) {

    var ni = req.body.ni
    var username = req.body.username
    var password = req.body.password
    var name = req.body.name
    var gender = req.body.gender
    var email = req.body.email
    var phonenumber = req.body.phonenumber
    var role = 'user'
    var hashedPassword = bcrypt.hashSync(password);
    var query = `insert into users (ni, username, password, name, gender, email, phonenumber, role) values ('${ni}', '${username}', '${hashedPassword}', '${name}', '${gender}', '${email}', '${phonenumber}', '${role}')`

    connection.query(query, (err, results) => {
        if(err){
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

exports.readUser = function(req, res) {
    var query = 'select * from users;'
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

