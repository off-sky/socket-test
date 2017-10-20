const app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cors = require('cors');

const PUBLIC_FOLDER = '/public';

// Enable cors
app.use(cors());

app.get('/', function (req, res) {
  res.sendFile(__dirname+PUBLIC_FOLDER+'/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected');
  io.emit('connection status', 'Status: Established connection');
  socket.on('disconnect', function(){
    io.emit('connection status', 'Status: Connection lost');
  });
});

http.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})