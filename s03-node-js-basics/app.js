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
const routes = require('./routes');
/*
function rqListener(req, res) {
}
*/

//we don't need to define the function rqListener, we can just pass it as an anonymous function
const server = http.createServer(routes.handler);

server.listen(3000);