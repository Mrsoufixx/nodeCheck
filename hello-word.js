console.log("hello word")

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<h1>Hello Node!!!!</h1>\n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const fs = require("fs")
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile("welcome.txt",function (err,data){
      if (err) return console.log(err)
      
      console.log(data.toString())
})