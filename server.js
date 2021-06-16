var app = require('./app')
var http = require('http')

const PORT = 8000
var server = http.createServer(app)
server.listen(PORT, () => console.log(`Server started on port: ${PORT}`))