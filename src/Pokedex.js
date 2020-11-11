import { AppBar, Card, CardContent, Grid, IconButton, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import pokemonLogo from './pokemonLogo.svg'

const useStyles = makeStyles({
  pokemonGrid: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px'
  },
  pokemonLogo: {
    height: 40
  }
})

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={4} lg={2}>
      <Card>
        <CardContent> HI </CardContent>
      </Card>
    </Grid>
  )
}


const Pokedex = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <IconButton edge='start' href='/'>
            <img src={pokemonLogo} className={classes.pokemonLogo} alt="pokemon_logo"/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} className={classes.pokemonGrid}>
        {getPokemonCard()} 
      </Grid>
    </>
  )
}

export default Pokedex;