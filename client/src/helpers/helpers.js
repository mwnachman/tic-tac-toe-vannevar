const checkThreeInRow = (player, board) => {
  let result = ((board[0] === player && board[1] === player && board[2] === player)
           || (board[3] === player && board[4] === player && board[5] === player)
           || (board[6] === player && board[7] === player && board[8] === player)
           || (board[0] === player && board[3] === player && board[6] === player)
           || (board[1] === player && board[4] === player && board[7] === player)
           || (board[2] === player && board[5] === player && board[8] === player)
           || (board[0] === player && board[4] === player && board[8] === player)
           || (board[2] === player && board[4] === player && board[6] === player)
          );
  console.log('check three in a row result', player, board, result)
  return result
};

export const checkForWin = (player, board) => {
  console.log('in check for win func', player, board)
  let allSquaresFull
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      allSquaresFull = false;
    }
  }
  if (allSquaresFull) {
    if (checkThreeInRow(player, board)) {
      console.log('true win')
      return true;
    } else {
      console.log('draw')
      return 'draw';
    }
  } else {
    console.log('in false else')
    return checkThreeInRow(player, board);
  }
};



export const twoInARow = function(player, board) {
  for (let i = 0; i < 7; i += 3) {
    // horizontal
    if (board[i] === player) {
      if (board[i + 1] === player) {
        if (!board[i + 2]) {
          return i + 2;
        };
      } else if (board[i + 2] === player) {
        if (!board[i + 1]) {
          return i + 1;
        }
      }
    } else if (board[i + 1] === player) {
      if (board[i + 2] === player) {
        if (!board[i]) {
          return i;
        }
      } 
    }
  }
  for (let j = 0; j < 3; j++) {
    // vertical
    if (board[j] === player) {
      if (board[j + 3] === player) {
        if (!board[j + 6]) {
          return j + 6;
        }
      } else if (!board[j + 3]) {
        if (board[j + 6] === player) {
          return j + 3;
        } 
      }
    } else if (!board[j]) {
      if (board[j + 3] === player) {
        if (board[j + 6] === player) {
          return j;
        }
      }
    }
  }
    // diagonal
  if (board[0] === player && board[4] === player) {
    if (!board[8]) {
      return 8;
    }
  } else if (board[4] === player && board[8] === player) {
    if (!board[0]) {
      return 0;
    }
  } else if (board[0] === player && board[8] === player) {
    if (!board[4]) {
      return 4;
    }
  } else if (board[2] === player && board[4] === player) {
    if (!!board[6]) {
      return 6;
    }
  } else if (board[4] === player && board[6] === player) {
    if (!!board[2]) {
      return 2;
    }
  } else if (board[2] === player && board[6] === player) {
    if (!!board[4]) {
      return 4;
    }
  } else if (board[0] === player && board[4] === player) {
    if (!!board[8]) {
      return 8;
    }
  } else {
    return -1;
  }
};

export const findExpertMove = (player, board) => {
  let humanPlayer = player === "X" ? "O" : "X";
  let counter = 0;
  for (let i = 0; i < 9; i++) {
    if (board[i] !== null) {
      counter++;
    }
  }
  if (twoInARow(player, board) > -1 || twoInARow(humanPlayer, board) > -1) {
    return twoInARow(player, board) > -1 ? twoInARow(player, board) : twoInARow(humanPlayer, board);
  } else if (counter === 3 && player === "O" 
             && ((board[0] === "X" && board[8] === "X") 
                  || (board[2] === "X" && board[6] === "X"))) {
      if (board[0] === "X" && board[8] === "X") {
        return 5;
      } else if (board[2] === "X" && board[6] === "X") {
        return 3;
    }
  } else if (!board[4]) {
    return 4;
  } else if (board[0] === humanPlayer && !board[8]) {
    return 8;
  } else if (board[8] === humanPlayer && !board[0]) {
    return 0;
  } else if (board[2] === humanPlayer && !board[6]) {
    return 6;
  } else if (board[6] === humanPlayer && !board[2]) {
    return 2;
  } else if (!board[0]) {
    return 0;
  } else if (!board[2]) {
    return 2;
  } else if (!board[6]) {
    return 6;
  } else if (!board[8]) {
    return 8;
  } else if (!board[1]) {
    return 1;
  } else if (!board[3]) {
    return 3;
  } else if (!board[5]) {
    return 5;
  } else if (!board[7]) {
    return 7;
  }
};

export const findRandomMove = board => {
  let availableSquares = []
  for (let i = 0; i < 9; i++) {
    if (board[i] == null) {
      availableSquares.push(i)
    }
  }
  if (!availableSquares.length) { return -1 }
  let move = Math.floor(Math.random() * availableSquares.length)
  return availableSquares[move]
};
