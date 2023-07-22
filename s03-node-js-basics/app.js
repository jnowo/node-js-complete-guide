/*
- node is running on Event Loop which is a loop that keeps on running as long as there are event listeners registered
- it is always available and waiting for events to happen
- to break out of the event loop, we can use process.exit()
- createServer or req.on are examples of event listeners passed to function which
  will be executed in the future (important!) node.js use this pattern a lot
- it is call as Event Driven Architecture (EDA)
*/


//require can import any file, not just node modules
const http = require('http');
const fs = require('fs');
/*
function rqListener(req, res) {
}
*/

//we don't need to define the function rqListener, we can just pass it as an anonymous function
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Enter message</title></head>');
    //form is taking all inputs as key-value pairs where the key is the name of the input and the value is the value of the input
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send</button> </form></body>');
    res.write('</html>');
    return res.end();
  }

  /*
  below code means: 'if conditions in if statement are met, node.js will register two handlers 'data' and 'end'
  and not immediately execute them. Functions are registered internally in event emitter registry !!! (important)
    */
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    }); //listen for specific event

    /*
        - req.on registering a function which will be executed in the future
        - when node.js encounter this line, it will add new event listener internally to registry
          and will call the function we passed.
        - below event means 'when node.js will finish parsing request ('end') it will go through
          registry and execute all functions registered for this event'
        */
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      /*like a bus stop (Max)
      we need this to be synchronous because we want to write the file before we redirect the user
      writeFileSync is blocking execution of code until it is done*/
      // fs.writeFileSync('message.txt', message);

      fs.writeFile('message.txt', message, (err) => {
        res.writeHead(302, {'Location': '/'});
        return res.end();
      });

      /*
      - sending response doesn't mean that our event listener (code above) will stop executing
      - below code should be inside the event listener also, but it will not be executed because
        it is inside the event listener which is not executed immediately
      - in this case in dev tools we don't see redirection code
      */
      // res.writeHead(302, {'Location': '/'});
      // return res.end();
    });

  }

  /*
  - below code will be executed before 'end' listener
  */
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