let http = require('http');
let unzipper = require("unzipper")
let fs = require("fs")
http.createServer(function(req, res) {
  req.pipe(unzipper.Extract({path: "../server/public"}))
  req.on("end", () => {
    res.end("success")
  })
}).listen("8082")