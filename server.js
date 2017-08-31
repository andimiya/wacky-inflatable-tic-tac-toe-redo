const app = require('express');
const http = require('http').Server(app);

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

io.on('connection', function (socket) {
   socket.on('chat', function (data) {
    console.log('dataChat: ', data);
    socket.broadcast.emit('chat', data);
  });
   socket.on('clicked', function (data) {
    console.log('dataClicked: ', data);
    socket.broadcast.emit('news', data);
    socket.broadcast.emit('clicked', data);
   });
});

http.listen(3001, function(){
  console.log('listening on *:3001');
});
