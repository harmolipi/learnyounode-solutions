const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.method === 'GET' && req.url.startsWith('/api/parsetime')) {
    const dateTime = new URL(req.url, 'http://example.com').searchParams.get(
      'iso'
    );
    const jsonResponse = {
      hour: new Date(dateTime).getHours(),
      minute: new Date(dateTime).getMinutes(),
      second: new Date(dateTime).getSeconds(),
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  } else if (req.method === 'GET' && req.url.startsWith('/api/unixtime')) {
    const dateTime = new URL(req.url, 'http://example.com').searchParams.get(
      'iso'
    );
    const jsonResponse = {
      unixtime: new Date(dateTime).getTime(),
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonResponse));
  }
});

server.listen(process.argv[2]);
