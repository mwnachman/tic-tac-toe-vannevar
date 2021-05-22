import React from 'react'
import clsx from 'clsx'
const _ = require('lodash')

import useStyles from '../style/board'

const xImage = require('../assets/X.png')
const oImage = require('../assets/O.png')
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Board = ({board, makeMove}) => {
  const styles = useStyles()
  return (
    <div className={styles.board}>
      {numbers.map(number =>
        (<span className={clsx(styles.square, styles[`square-${_.includes([0, 1, 3, 4], number) ? 1 : 
          _.includes([2, 5], number) ? 2 :
          _.includes([6, 7], number) ? 3 : ''}`])}
          key={number}
          onClick={() => makeMove(number)}>
            
            {board[number] === "X" &&
              <img alt="X" src={xImage} />
            }
            {board[number] === "O" &&
              <img alt="O" src={oImage} />
            }

        </span>)
      )}
    </div>
  )
}

export default Board
