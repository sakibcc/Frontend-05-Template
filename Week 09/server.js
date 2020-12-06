const http = require('http')

const server = http.createServer((request,response) => {
  request.setHeader("Content-Type", 'text/html');
  request.setHeader('X-Foo', 'bar')
  request.writeHead(200, { 'Content-Type': 'text/plain'});
  request.end(
`<html tttt=xx >
<head>
    <style>
body div #myid{
  width: 100px;
  background-color: #ff5000;
}
body div img{
  width:30px;
  background-color:#ff1111;
}
  </style>
</head>
<body>
  <div>
    <img id="myid"/>
    <img />
  </div>
</body>
</html>`);
})
server.listen(8088)
console.log('listen 8088')