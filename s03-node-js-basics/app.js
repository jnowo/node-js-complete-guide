/*
- node is running on Event Loop which is a loop that keeps on running as long as there are event listeners registered
- it is always available and waiting for events to happen
- to break out of the event loop, we can use process.exit()
*/


//require can import any file, not just node modules
const http = require('http');
/*
function rqListener(req, res) {
}
*/

//we don't need to define the function rqListener, we can just pass it as an anonymous function
const server = http.createServer((req, res) => {
  const url = req.url;
  if(url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button> </form></body>');
    res.write('</html>');
    return res.end();
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html lang="en">');
  res.write('<head><title>My First response!</title></head>');
  res.write('<body><h1>Hello from my Node.js server!</h1></body>');
  res.write('</html>');
  res.end();

  // process.exit(); //this will exit the event loop
});

server.listen(3000);