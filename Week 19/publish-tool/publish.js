let http = require('http');
let fs = require('fs');
let archiver = require("archiver")

fs.stat("./simple/sample.html", (err, stats) => {
  let request = http.request({
    hostname: "127.0.0.1",
    port: 8082,
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      // "Content-Length": stats.size
    }
  }, response => {
    request.end()
  })
  
  
  const archive = archiver("zip", {
    zlib: {level: 9}
  });

  archive.directory("./simple/", false)
  archive.finalize();

  archive.pipe(request)
})