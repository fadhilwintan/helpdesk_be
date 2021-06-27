const { Client } = require("pg");
var bcrypt = require('bcryptjs');

const client = new Client({

    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
});

client.connect((err)=> {
    if(err){
        throw err
    }
    
    let createDiscussionTable = `CREATE TABLE IF NOT EXISTS DISCUSSION(id_question SERIAL NOT NULL PRIMARY KEY,
        username varchar(200),
        title varchar(150) NOT NULL,
        category varchar(100) NOT NULL,
        priority varchar(30) NOT NULL,
        question varchar(200) NOT NULL,
        answer varchar(500));`

    let createUsersTable = `CREATE TABLE IF NOT EXISTS USERS(id_user SERIAL NOT NULL PRIMARY KEY,
        ni int unique,
        username varchar(200) unique,
        password varchar(200) unique,
        name varchar(200),
        gender varchar(75),
        email varchar(200),
        phonenumber varchar(100),
        role varchar(100));`

    let createSuggestionTable = `CREATE TABLE IF NOT EXISTS SUGGESTION(id_suggestion SERIAL NOT NULL PRIMARY KEY,
        name varchar(200) NOT NULL,
        suggestion varchar(500) NOT NULL);`

    client.query(createDiscussionTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
    
        let query = 'SELECT * FROM DISCUSSION;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let createDiscussion = `INSERT INTO DISCUSSION(username, title, category, priority, question, answer)
                    VALUES ('fadhilwintan', 'kabar', 'mahasiswa', 'rendah', 'apa kabar?', ${null});`;
                    client.query(createDiscussion, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });

    client.query(createUsersTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        let query = 'SELECT * FROM USERS;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let registerUser = `INSERT INTO USERS(ni, username, password, name, gender, email, phonenumber, role)
                        VALUES ('1810501017', 'fadhilwintan', '${bcrypt.hashSync('password123')}', 'Fadhil Wintan H M', 'Laki-Laki', 'fadhilwintan26@gmail.com', '081218009969', 'user');
                        INSERT INTO USERS(ni, username, password, name, role) VALUES ('1', 'admin', '${bcrypt.hashSync('admin')}', 'admin1', 'admin')`;
                    client.query(registerUser, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });

    client.query(createSuggestionTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
    
        let query = 'SELECT * FROM SUGGESTION;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let createSuggestion = `INSERT INTO SUGGESTION(name, suggestion)
                    VALUES ('Fadhil', 'Website yang baik');`;
                    client.query(createSuggestion, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });
})

module.exports = client;