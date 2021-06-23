module.exports = (app) => {
    var question = require('./controller/discussions')
    var user = require('./controller/Users')
    var detailUser = require('./controller/detailUser')
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
    app.route('/api/user')
        .get(user.readUser)
    app.route('/api/create-user')
        .post(user.registerUser)
    app.route('/api/profile/:username')
        .post(detailUser.detailUser)
    app.route('/api/login')
        .post(authentication.login)
    app.route('/api/logout')
        .post(authentication.logout)

}