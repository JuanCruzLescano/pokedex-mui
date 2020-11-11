import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import pokemonLogo from '../assets/pokemonLogo.svg'

const useStyles = makeStyles({
  pokemonLogo: {
    height: 40,
  }
})

const PokeBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton edge="start" href="/">
            <img
              src={pokemonLogo}
              className={classes.pokemonLogo}
              alt="pokemon_logo"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default PokeBar
