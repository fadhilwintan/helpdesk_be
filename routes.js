module.exports = (app) => {
    var question = require('./controller/questions')
    var answer = require('/controller/answers')

    app.get('/api', async (req,res) => {
        res.json ({
            message: "Welcome to Helpdesk API"
        })
    })

    app.route('/api/question')
        .get(question.readQuestion)
    app.route('/api/create-question')
        .post(question.createQuestion)
    app.route('/api/answer')
        .get(answer.readAnswer)
    app.route('/api/create-answer')
        .post(answer.createAnswer)
}