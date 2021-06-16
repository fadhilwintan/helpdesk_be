const { Client } = require("pg");

const client = new Client({

    // user: process.env.PG_USER,
    // password: process.env.PG_PASSWORD,
    // host: process.env.PG_HOST,
    // port: process.env.PG_PORT,
    // database: process.env.PG_DATABASE
    // ssl: true,

    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: "5432",
    database: "helpdeskFIK"
});

client.connect((err)=> {
    if(err){
        throw err
    }
    let createQuestionTable = `CREATE TABLE IF NOT EXISTS QUESTION(id_question SERIAL NOT NULL PRIMARY KEY,
        nim integer(10) NOT NULL FOREIGN KEY,
        name varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        title varchar(150) NOT NULL,
        category varchar(100) NOT NULL,
        priority varchar (30) NOT NULL,
        question varchar(200) NOT NULL);`;

    let createAnswerTable = `CREATE TABLE IF NOT EXISTS ANSWER(id_answer SERIAL NOT NULL PRIMARY KEY,
        answer varchar(500));`

    let createUserTable = `CREATE TABLE IF NOT EXISTS USER(nim int(10) NOT NULL PRIMARY KEY,
        username varchar(200) unique NOT NULL,
        password varchar(200) unique NOT NULL,
        name varchar(200) NOT NULL,
        gender varchar(75) NOT NULL,
        email varchar(200) NOT NULL,
        phonenumber integer(12) NOT NULL);`

    let createAdminTable = `CREATE TABLE IF NOT EXISTS ADMIN(id_admin SERIAL NOT NULL PRIMARY KEY,
        username varchar(200) unique NOT NULL,
        password varchar(200) unique NOT NULL);`
    
    client.query(createQuestionTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        let query = 'SELECT * FROM QUESTION;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let createQuestion = `INSERT INTO QUESTION(nim, name, email, title, category, priority, question)
                    VALUES ('181050107', 'fadhil', 'fadhil@email,com', 'mahasiswa', 'rendah', 'apa kabar?');`;
                    client.query(createQuestion, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });

    client.query(createAnswerTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        let query = 'SELECT * FROM ANSWER;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let createAnswer = `INSERT INTO ANSWER(answer) VALUES ('alhmadulillah sehat');`;
                    client.query(createAnswer, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });

    client.query(createUserTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        let query = 'SELECT nim, name, gender, email, phonenumber FROM USERS;';
            client.query(query, (err, result) => {
                if (err) {
                    throw err;
                }
                setValue(result);
                var string = JSON.stringify(val);
                var users = JSON.parse(string);

                if (users.rowCount === 0) {
                    let registerUser = `INSERT INTO USER(nim, username, password, name, gender, email, phonenumber)
                        VALUES ('1810501017', 'fadhilwintan', 'password123', 'Fadhil Wintan H M', 'Laki-Laki', 'fadhilwintan26@gmail.com', '081218009969');`;
                    client.query(registerUser, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });

    client.query(createAdminTable, (err, result, fields) => {
        if (err) {
            throw err;
        }
        var val = [];
        var setValue = (value) => {
            val = value;
        };
        if (users.rowCount === 0) {
        let registerAdmin = `INSERT INTO ADMIN(username, password, name) VALUES ('admin', 'admin123', 'Jaja Miharja');`;
            client.query(registerAdmin, function (error, result) {
                if (error) {
            console.log(error);
                }
            });
        }
    });
})

module.exports = client;