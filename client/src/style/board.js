import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  board: {
    height: 280,
    width: 280,
    backgroundColor: '#E24A41',
    margin: '0 auto',
    marginTop: theme.spacing(6),
  },
  'square': {
    width: 80,
    height: 80,
    float: 'left',
    backgroundColor: '#FFFFFF'
  },
  'square-1': {
    marginBottom: 20,
    marginRight: 20,
  },
  'square-2': {
    marginBottom: 20,
  },
  'square-3': {
    marginRight: 20,
  },
  mark: {
    marginLeft: 5,
    marginTop: 5
  }
}))

export default useStyles
