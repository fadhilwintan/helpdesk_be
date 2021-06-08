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
        nim int(10) NOT NULL FOREIGN KEY,
        name varchar(100) NOT NULL,
        email varchar(100) NOT NULL,
        title varchar(150) NOT NULL,
        category varchar(100) NOT NULL,
        priority varchar (30) NOT NULL,
        question varchar(200) NOT NULL);`;
    
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
})

module.exports = client;