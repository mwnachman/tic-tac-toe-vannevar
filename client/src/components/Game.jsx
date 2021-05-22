import React from 'react'
import {Card, Grid} from '@material-ui/core'

import Board from './Board.jsx'
import useStyles from '../style/game'
import { checkForWin, findMove } from '../helpers/helpers';

const Game = () => {

  const makeMove = () => {
    let boardCopy = game.slice();
    boardCopy[square] = player.xOrY;
    const computerPlayer = player.xOrY === "X" ? "O" : "X";
    if (player.playersTurn === true && game[square] === null) {
      selectSquare(square, player.xOrY);
      checkWin(player.xOrY, square, boardCopy);
      setTimeout((function() {computerMove(computerPlayer, findMove(computerPlayer, boardCopy))}), 1500);
    }
  }


  const styles = useStyles()
  return (
    <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          className={styles.exterior_grid}>
      <Grid item xs={8} className={styles.interior_grid}>
        <Card className={styles.root}>
          <Board makeMove={makeMove}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Game
