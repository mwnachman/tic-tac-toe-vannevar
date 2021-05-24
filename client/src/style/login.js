import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(5)
  },
  header: {
    textAlign: 'center',
  },
  form: {
    width: 280,
    margin: '0 auto'
  },
  input: {
    width: '100%',
    marginBottom: theme.spacing(2)
  }
}))

export default useStyles
