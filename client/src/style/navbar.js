import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: '#FFFFFF',
  },
  bar: {
    backgroundImage: 'url("../assets/tic-tac-toe-navbar.png")',
    opacity: 0.8,
    height: 120,
    fontSize: '36px',
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  typography: {
    fontFamily: 'RubikMonoOne'
  }
}))

export default useStyles
