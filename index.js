const board = [[],[],[]]

console.log('Welcome to the game!')
console.log('board', board)

const printNumBoard = () => {
  console.log(`\n${board[0][0] || '1'} | ${board[0][1] || '2'} | ${board[0][2] || '3'}`)
  console.log('---------')
  console.log(`${board[1][0] || '4'} | ${board[1][1] || '5'} | ${board[1][2] || '6'}`)
  console.log('---------')
  console.log(`${board[2][0] || '7'} | ${board[2][1] || '8'} | ${board[2][2] || '9'}\n`)
}

const printBoard = () => {
  console.log(`\n${board[0][0] || ' '} | ${board[0][1] || ' '} | ${board[0][2] || ' '}`)
  console.log('---------')
  console.log(`${board[1][0] || ' '} | ${board[1][1] || ' '} | ${board[1][2] || ' '}`)
  console.log('---------')
  console.log(`${board[2][0] || ' '} | ${board[2][1] || ' '} | ${board[2][2] || ' '}\n`)
}

printNumBoard();
printBoard();

// reference: http://st-on-it.blogspot.com/2011/05/how-to-read-user-input-with-nodejs.html
function promptToPlace() {
  var stdin = process.stdin, stdout = process.stdout;
  stdin.resume();
  stdout.write('Which square would you like to select?' + ": ");
  var square;
  stdin.once('data', function(data) {
    square = (data - 1).toString().trim();
    console.log('square:', square)
    var row = Math.floor(square / 3);
    var column = square % 3;
    console.log('row', row, 'column', column)
    board[row][column] = 'x';
    printBoard()
    process.exit()
  })
}
printBoard();

promptToPlace()
