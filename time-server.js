const net = require('net');

const listener = (socket) => {
  const date = new Date();
  socket.end(
    `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}\n`
  );
};

const server = net.createServer(listener);

server.listen(process.argv[2]);
