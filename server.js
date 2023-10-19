// const http = require("http")
// const port = 8080
// const host = 'localhost'
// const fs = require('fs').promises
// const requestListener = function (req, res) {
//     fs.readFile(__dirname + "/index.html")
//         .then(contents => {
//             res.setHeader("Content-Type", "text/html")
//             res.writeHead(200)
//             res.end(contents)
//         })
//         .catch(err => {
//             res.writeHead(500)
//             res.end(err)
//             return
//         })
// }

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`)
// })
var express = require('express');
var app = express();
var path = require('path');
var port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, function(){
   console.log('Listening on port ' + port)
})