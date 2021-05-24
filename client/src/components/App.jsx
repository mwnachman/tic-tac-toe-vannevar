import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { Card, CssBaseline, Grid } from '@material-ui/core'

import GameContainer from './GameContainer.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import useStyles from '../style/app'


const App = () => {
  const styles = useStyles()
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className={styles.exterior_grid}>
        <Grid item xs={8} className={styles.interior_grid}>
          <Card className={styles.root}>
            <Switch>
              <Route exact path='/' component={GameContainer}/>
              <Route path='/login' component={Login}/>
              <Route path="*" component={() => <Redirect to="/"/>}/>
            </Switch>
          </Card>
        </Grid>
      </Grid>
    </Router>
  )
}

export default App
