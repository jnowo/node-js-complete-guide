const http = require('http');

const DUMMY_USERS = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Max'},
  {id: 3, name: 'Ana'},
]

const server = http.createServer((req, res) => {

  const url = req.url;
  const method = req.method;

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const name = parsedBody.split('=')[1];
      console.log(name);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }

  if (url === '/') {
    res.write('<html lang="en"><head>Hello from Node.js!<title>Assignment 1</title></head><body>');
    res.write('<form method="post" action="/create-user"><label for="name">Name:</label><input name="name"><button type="submit">Add user</button></form>')
    res.write('</body></html>')
    return res.end();
  }

  if (url === '/users') {
    res.write('<html lang="en"><head>List of users:<title>Assignment 1</title></head>');
    res.write('<body><ul>');
    DUMMY_USERS.map(user => res.write(`<li key=${user.id}>${user.name}</li>`));
    res.write('</ul></body>');
    res.write('</html>');
    return res.end();
  }
});

server.listen(3000);