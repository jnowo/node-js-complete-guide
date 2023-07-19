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
  console.log(req);
  // process.exit(); //this will exit the event loop
});

server.listen(3000);