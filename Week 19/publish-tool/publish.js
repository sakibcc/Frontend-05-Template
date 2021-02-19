let http = require('http');

let request = http.request({
  hostname: "127.0.0.1",
  port: 8082
}, response => {
  console.log(response)
})

request.end();