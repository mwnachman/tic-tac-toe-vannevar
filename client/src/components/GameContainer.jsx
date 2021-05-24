import React from 'react'
import PropTypes from 'prop-types'
import {Button, CardContent} from '@material-ui/core'
import {set as _set} from 'lodash'

import Board from './Board.jsx'
import ChooseRole from './ChooseRole.jsx'
import useStyles from '../style/game'
import { checkForWin, findRandomMove } from '../helpers/helpers';

    
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playerRole: '',
      playersTurn: false,
      winStatus: ''
    }
  }

  componentDidMount() {
    this.createNewBoard()
  }

  createNewBoard = () => {
    this.setState({board: new Array(9)})
  }

  checkWin = player => {
    const {board} = this.state
    const winStatus = checkForWin(player, board)
    console.log('win status in check win', winStatus)
    return winStatus
  }
    // getWinStatus.then(status => console.log('res', status))
    // console.log('win status in Check win function', player, winStatus)
    // if (winStatus && player == playerRole) {
    //   console.log('user won')
    // } else if (winStatus) {
    //   console.log('computer won')
    // } else if (winStatus == 'draw') {
    //   console.log('draw')
    // }


  setPlayerRole = playerRole => {
    this.setState({playerRole})
  }

  setPlayersTurn = playersTurn => {
    this.setState({playersTurn})
  }

  makeInitialComputerMove = () => {
    const board = this.state
    setTimeout(() => { this.makeComputerMove("X", findRandomMove(board)) }, 1000)
  }

  makeComputerMove = (player, square) => {
    const {board} = this.state
    console.log('player in make computer move', player)
    // if (square == -1) { console.log('no square abailable') }
    this.setState({board: _set(board.slice(), square, player), playersTurn: true},
      () => {
        let winStatus = this.checkWin(player)
        // if (winStatus == 'draw')
        // console.log('computer move win status', winStatus)
      }
    )
  }

  makePlayerMove = square => {
    let {board, playersTurn, playerRole} = this.state
    // console.log('in make player move', playersTurn, square)
    if (playersTurn && !board[square]) {
      // console.log('in if statement player move ', playersTurn)
      this.setState({board: _set(board.slice(), square, playerRole)},
        () => {
          let {board} = this.state
          let winStatus = this.checkWin(playerRole, board)
          if (!winStatus) {
            let computerPlayer = playerRole === "X" ? "O" : "X"
            setTimeout(() => { this.makeComputerMove(computerPlayer, findRandomMove(board)) }, 800)
          } else {
            this.setState({winStatus})
          }
        }
      )
      this.setPlayersTurn(false)
    }
  }

  startOver = () => {
    this.createNewBoard()
    this.setState({playerRole: '', playersTurn: false})
  }
  
  render() {
    const {board, playerRole} = this.state
    const {styles} = this.props
    return (
      <div>
        <ChooseRole styles={styles}
                    setPlayerRole={this.setPlayerRole}
                    playerRole={playerRole}
                    makeComputerMove={this.makeInitialComputerMove}
                    setPlayersTurn={this.setPlayersTurn}/>
        <Board makeMove={this.makePlayerMove}
               board={board}
               />
        {!!playerRole &&
          <div className={styles.newGameButton}>
            <Button type="submit"
                    variant="outlined"
                    color="secondary"
                    onClick={this.startOver}>
              New Game
            </Button>
          </div>
      }
      </div>
    )
  }
}
Game.propTypes = {
  styles: PropTypes.object
}
    
const GameContainer = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <CardContent>
        <Game styles={styles}/>
      </CardContent>
    </div>
  )
}

export default GameContainer
