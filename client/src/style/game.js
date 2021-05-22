import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    width: '100%',
    height: '600px'
  },
  exterior_grid: {
    minHeight: '70vh',
  },
  interior_grid: {
    minWidth: '90%',
  },
}))

export default useStyles
