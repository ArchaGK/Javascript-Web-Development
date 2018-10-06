var board;
var game;


window.onload = function(){
  initGame();
}

//setup socket client
var socket = io();

var initGame = function () {
    // Configuration
    var cfg = {
        draggable: true,
        position: 'start',
        onDrop: handleMove,
    };

    // Setup the Board
    board = new ChessBoard('gameBoard', cfg);
    // Game engine rules
    game = new Chess();
};

// Track the movement of pieces and emit the
// move made to the opponent.
var handleMove = function(source, target) {

    var move = game.move({from: source, to: target});

    if(move === null)
        return 'snapback';
    else
        socket.emit("move", move);

};

// Capture the opponent's move and update
// board position
socket.on('move',function(msg){
  game.move(msg);
  board.position(game.fen());
});
