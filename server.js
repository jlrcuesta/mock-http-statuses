const http = require('http');
const PORT = 80;

const server = http.createServer((req, res) => {
    res.writeHead(413, { 'Content-Type': 'text/plain' });
    res.end('Payload too large!\n');
});

server.listen(PORT, 'localhost', () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
