const http = require('http')

http.createServer((req,res) => {
  let body = [];
  req.on('error', err => {
    console.error(err)
  }).on('data', chuck => {
    body.push(chuck.toString());
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log("body:",body)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(' Hello World\n')
  })
}).listen(8088)
