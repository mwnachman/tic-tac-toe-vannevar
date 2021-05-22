import React, {useState} from 'react'
import {Card,
        FormControl,
        FormControlLabel,
        FormLabel,
        Grid,
        Radio,
        RadioGroup,
        Typeography} from '@material-ui/core'

import Board from './Board.jsx'
import useStyles from '../style/game'
import { checkForWin, findMove } from '../helpers/helpers';

const Game = () => {
  const [board, updateBoard] = useState(new Array(9).map(() => null))
  const [xOrY, updateXorY] = useState(undefined)


  const makeMove = () => {
    console.log('booyah')
  //   let boardCopy = board.slice();
  //   boardCopy[square] = player.xOrY;
  //   const computerPlayer = player.xOrY === "X" ? "O" : "X";
  //   if (player.playersTurn === true && game[square] === null) {
  //     selectSquare(square, player.xOrY);
  //     checkWin(player.xOrY, square, boardCopy);
  //     setTimeout((function() {computerMove(computerPlayer, findMove(computerPlayer, boardCopy))}), 1500);
  //   }
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
          <div  className={styles.xOrY}>

          <FormControl component="fieldset">
            <FormLabel className={styles.formLabel}>Would you like to be X or O?</FormLabel>
            <RadioGroup row name="role">
              <FormControlLabel value="X" control={<Radio />} label="X" />
              <FormControlLabel value="O" control={<Radio />} label="O" />
            </RadioGroup>
          </FormControl>
          </div>
          <Board makeMove={makeMove} board={board}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Game
