import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
const _ = require('lodash')

import useStyles from '../style/board'

const xImage = require('../assets/X.png')
const oImage = require('../assets/O.png')
const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const Board = ({board, makeMove}) => {
  const playerMove = ({target: {id}}) => {
    const square = id.split('-')[1]
    makeMove(square)
  }

  const styles = useStyles()
  return (
    <div className={styles.board}>
      {!!board &&
        squares.map(square => (
          <span className={clsx(styles.square, styles[`square-${_.includes([0, 1, 3, 4], square) ? 1 : 
            _.includes([2, 5], square) ? 2 :
            _.includes([6, 7], square) ? 3 : ''}`])}
            key={square}
            id={`square-${square}`}
            onClick={playerMove}>
              
              {board[square] === "X" &&
                <img alt="X" src={xImage} className={styles.mark}/>
              }
              {board[square] === "O" &&
                <img alt="O" src={oImage} className={styles.mark}/>
              }

          </span>
          )
        )
      }
    </div>
  )
}
Board.propTypes = {
  board: PropTypes.array,
  makeMove: PropTypes.func
}

export default Board
