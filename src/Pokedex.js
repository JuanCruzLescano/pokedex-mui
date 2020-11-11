import {useState} from 'react'
import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Grid,
  IconButton,
  Toolbar,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import data from './mockData'
import pokemonLogo from './pokemonLogo.svg'
import toFirstCharUpperCase from './utils/toFirstCharUpperCase'

const useStyles = makeStyles({
  pokemonGrid: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  pokemonLogo: {
    height: 40,
  },
  cardMedia: {
    width: 130,
    height: 130,
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center'
  },
})

const Pokedex = props => {
  const { history } = props
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState(data)

  const getPokemonCard = pokemonId => {
    console.log(pokemonData[`${pokemonId}`])
    const {id, name} = pokemonData[`${pokemonId}`]
    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return (
      <Grid item xs={12} sm={6} lg={3} xl={2} key={pokemonId}>
        <Card onClick={() => history.push(`/${pokemonId}`)}>
          <CardMedia className={classes.cardMedia} image={sprite} />
          <CardContent className={classes.cardContent}>
            <Typography>
              {`${id}. ${toFirstCharUpperCase(name)}`}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

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
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokemonGrid}>
          {Object.keys(pokemonData).map(pokemonId => getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  )
}

export default Pokedex
