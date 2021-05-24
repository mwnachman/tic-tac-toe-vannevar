import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  form: {
    height: 70
  },
  header: {
    textAlign: 'center',
    fontSize: 18,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  buttonGroup: {
    width: 280,
    margin: '0 auto'
  },
  button: {
    width: 60,
    marginLeft: 50,
  },
  newGameButton: {
    paddingTop: theme.spacing(5),
    margin: '0 auto',
    textAlign: 'center',
    width: 125,
  },
}))

export default useStyles
