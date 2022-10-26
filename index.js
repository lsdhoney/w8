let express = require('express');
let app = express();
app.use('/', express.static('public'));

//http server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;

server.listen(3000, ()=>{
    console.log('server is listing at localhost:' + port);
});

let io = require('socket.io');
io = new io.Server(server);

io.on('connection', (socket)=>{
    console.log('new client connected wthe the id:' + socket.id);

    socket.on('data', (data)=>{
        console.log(data);
        io.emit('data',data);
    })
});