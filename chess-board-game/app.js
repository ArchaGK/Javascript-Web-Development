var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT||3000;

var io = require('socket.io')(http);

io.on('connection', function(socket){
   console.log('new connetion');
   //will be called when socket "move" will be emitted
   socket.on('move', function(msg){
     socket.broadcast.emit('move', msg );
  });
});


app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/default.html');

});

http.listen(port, function(){
  console.log('listening on : ' + port);
});