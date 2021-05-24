import React from 'react'
import PropTypes from 'prop-types'
import {Button, Typography} from '@material-ui/core'

const ChooseRole = ({styles,
                    setPlayerRole,
                    playerRole,
                    setPlayersTurn,
                    makeComputerMove}) => {
  const setRoleState = ({target}) => {
    const role = target.innerHTML
    console.log('role in set role stat', role)
    setPlayerRole(role)
    if (role == "X") {
      setPlayersTurn(true)
    }
    else {
      makeComputerMove()
    }
  }

  return (
    <div className={styles.form}>
      {!playerRole &&
        <div>
          <Typography className={styles.header}>
            Would you like to play "X" or "O"?
          </Typography>
          <div className={styles.buttonGroup}>
            <Button onClick={setRoleState} 
                    variant="outlined" 
                    color="secondary" 
                    className={styles.button}>
              X
            </Button>
            <Button onClick={setRoleState} 
                    variant="outlined" 
                    color="secondary" 
                    className={styles.button}>
              O
            </Button>
          </div>
        </div>
      }  
    </div>
  )
}
ChooseRole.propTypes = {
  styles: PropTypes.object,
  setPlayerRole: PropTypes.func,
  playerRole: PropTypes.string
}

export default ChooseRole
