import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card: {},
  heading: {
    marginBottom: [ theme.pad.sm, '!important' ],
    marginTop: [theme.pad.sm, '!important' ]
  },
  outerContainer: {
    padding: theme.pad.sm,
    width: '100%',
  },
  innerContainer: {
    maxWidth: 500,
    width: '100%',
    margin: [ 0, 'auto', 0, 'auto' ],
  },
  mfaSubSection: {position: 'inline'},
  button: {
    minWidth: '40%',
    margin: 10,
    marginLeft: 0
  }
}))

function MfaHelpRouteContents(props) {

    const classes = useStyles();
    return (
      <div className={classes.outerContainer}>
        <div className={classes.innerContainer}>
          <div>Hello World!</div>
        </div>
      </div>
    )
}

export default MfaHelpRouteContents
