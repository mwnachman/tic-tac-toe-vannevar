import React from 'react'
// import PropTypes from 'prop-types'
import {CardContent,
        CardHeader,
        TextField} from '@material-ui/core'

import useStyles from '../style/login'


const Login = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <CardHeader title="Login" className={styles.header}/>
      <CardContent>
        <form className={styles.form} noValidate autoComplete="off">
          <TextField id="username"
                      className={styles.input}
                      label="Username"
                      variant="outlined"
                      color="secondary"/>
          <TextField id="password"
                      className={styles.input}
                      label="Password"
                      variant="outlined"
                      color="secondary"/>
        </form>
      </CardContent>
    </div>
  )
}
Login.propTypes = {

}

export default Login
