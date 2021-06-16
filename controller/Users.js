var connection = require('../connection')
var bcrypt = require('bcryptjs')

exports.registerUser = function(req, res) {

    var nim = req.body.nim
    var username = req.body.username
    var password = req.body.password
    var name = req.body.name
    var gender = req.body.gender
    var email = req.body.email
    var phonenumber = req.body.phonenumber
    var hashedPassword = bcrypt.hashSync(password);
    var query = `insert into user (nim, username, password, name, gender, email, phonenumber) values ('${nim}', '${username}', '${hashedPassword}', '${name}', '${gender}', '${email}', '${phonenumber}')`

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
    var query = 'select nim, name, gender, email, phonenumber from user;'
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