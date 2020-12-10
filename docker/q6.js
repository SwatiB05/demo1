const http = require('http')
const server = http.createServer((request, response) => {
    response.end("Welcome To nodeJS")
})
server.listen(5000, () => {
    console.log("server started on 5000")
})