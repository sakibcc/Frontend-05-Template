const http = require('http')

http.createServer((request,response) => {
  let body = [];
  request.on('error', err => {
    console.error(err)
  }).on('data', chuck => {
    body.push(chuck.toString());
  }).on('end', () => {
    body = (Buffer.concat([ Buffer.from(body.toString()) ])).toString();
    console.log("body:",body)
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(' Hello World\n')
  })
}).listen(8088)

console.log('listen 8088')