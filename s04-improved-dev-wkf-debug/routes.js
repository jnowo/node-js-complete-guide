const fs = require('fs');

const requestHandler = (req, res) => {

  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html lang="en">');
    res.write('<head><title>Enter message</title></head>');
    //form is taking all inputs as key-value pairs where the key is the name of the input and the value is the value of the input
    res.write('<body><form action="/message" method="post"><input type="text" name="message"><button type="submit">Send to server</button> </form></body>');
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
};


//this is global object in node.js. Node.js will check if this object is exported and if it is,
//it will be available outside of this file
module.exports.handler = requestHandler;

//if we need to export multiple things, we can do it like this:
// module.exports = {
//   handler: requestHandler,
//   someText: 'Some hard coded text'
// };
//or like this:
// module.exports.handler = requestHandler;
// module.exports.someText = 'Some hard coded text';
//or like this (do not need to use 'module', shortcut supported by node.js):
// exports.handler = requestHandler;
// exports.someText = 'Some hard coded text';
