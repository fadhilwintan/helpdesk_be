module.exports = (app) => {
    var question = require('./controller/questions')
    var answer = require('./controller/answers')
    var user = require('./controller/Users')
    var admin = require('./controller/admins')

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
    app.route('/api/user')
        .get(user.readUser)
    app.route('/api/user')
        .post(user.registerUser)
    app.route('/api/admin')
        .post(admin.registerAdmin)
}