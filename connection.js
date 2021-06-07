const { Client } = require("pg");

const client = new Client({
    user: process.env.PG_NIM,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PD_DATABASE,
    ssl: true,
});

client.connect((err)=> {
    if(err){
        throw err
    }
    let createQuestionTable = `CREATE TABLE IF NOT EXIST QUESTION(id_question SERIAL NOT NULL PRIMARY KEY,
        name varchar(100) not null,
        email varchar(100) not null,
        title varchar(150) not null,
        category varchar(100) not null,
        priority varchar (30) not null,
        question varchar(200) not null);`;
    
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
                    let createQuestion = `INSERT INTO QUESTION(name, email, title, category, priority, question)
                    VALUES ('fadhil', 'fadhil@email,com', 'mahasiswa', 'rendah', 'apa kabar?');`;
                    client.query(createQuestion, function (error, result) {
                        if (error) {
                            console.log(error);
                        }
                    });
                }
            });
    });
})

module.exports = client;