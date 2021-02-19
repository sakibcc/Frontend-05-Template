let http = require('http');
let fs = require("fs");
http.createServer(function(req, res) {

  let outFile = fs.createWriteStream("../server/public/index.html");
  
  req.on("data", chunk => {
    outFile.write(chunk);
  })
  req.on("end", chunk => {
    if(chunk) {
      outFile.write(chunk);
    }
    outFile.end();
    res.end("Success")
  })
}).listen("8082")