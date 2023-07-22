const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    const img = fs.readFileSync('./how_node_js_works.png');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><header>How Node.js works?</header>');
    res.write(`<img src=${img} alt="How node.js works?">`);
    res.write('</html>');
    res.end();
  }
});

server.listen(3000)