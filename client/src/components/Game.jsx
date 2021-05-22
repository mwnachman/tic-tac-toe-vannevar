import React from 'react'
import {Card, Grid} from '@material-ui/core'

import Board from './Board.jsx'
import useStyles from '../style/game'


const Game = () => {

  


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
          <Board game={[]}/>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Game
