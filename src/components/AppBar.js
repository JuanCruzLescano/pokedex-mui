import { AppBar, Toolbar, IconButton, TextField, InputBase, Grid } from '@material-ui/core';
import {fade, makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import pokemonLogo from '../assets/pokemonLogo.svg'

const useStyles = makeStyles(theme => ({
  pokemonLogo: {
    height: 40,
    [theme.breakpoints.down('xs')]: {
      height: 20
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      width: '60%'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const PokeBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
        <Grid item xs={6}>
          <IconButton href="/">
            <img
              src={pokemonLogo}
              className={classes.pokemonLogo}
              alt="pokemon_logo"
            />
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
              placeholder='Search...'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>
        </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PokeBar
