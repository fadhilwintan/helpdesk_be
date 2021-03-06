module.exports = (app) => {
    var question = require('./controller/discussions')
    var answer = require('./controller/updateDiscussion')
    var report = require('./controller/countCategory')
    var suggest = require('./controller/suggestions')
    var user = require('./controller/Users')
    var profile = require('./controller/detailUser')
    var authentication = require('./controller/authentication')

    app.get('/api', async (req,res) => {
        res.json ({
            message: "Welcome to Helpdesk API"
        })
    })

    app.route('/api/discussions')
        .get(question.readDiscussion)
    app.route('/api/create-discussions')
        .post(question.createDiscussion)
    app.route('/api/answer-discussions/:id')
        .post(answer.updateDiscussion)
    app.route('/api/report-discussions')
        .get(report.countCategory)
    app.route('/api/suggestions')
        .get(suggest.readSuggestion)
    app.route('/api/create-suggestions')
        .post(suggest.createSuggestion)
    app.route('/api/user')
        .get(user.readUser)
    app.route('/api/create-user')
        .post(user.registerUser)
    app.route('/api/profile/:uname')
        .get(profile.detailUser)
    app.route('/api/login')
        .post(authentication.login)
    app.route('/api/logout')
        .post(authentication.logout)
}