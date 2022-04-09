const http = require('http');
// we create the sever and store it in  varaible
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        // do somethinf
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
    }
    if (url === '/users') {
        //do something
        res.setHeader('Content-Type', 'Text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode(302);
        res.setHeader('Location', '/');
        res.end();
    }
});
// start the server
server.listen(3000);