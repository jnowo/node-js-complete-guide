//require can import any file, not just node modules
const http = require('http');
/*
function rqListener(req, res) {

}
*/

//we don't need to define the function rqListener, we can just pass it as an anonymous function
const server = http.createServer((req, res) => {
  console.log(req);
});
server.listen(3000);