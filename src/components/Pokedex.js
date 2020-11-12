import {useState, useEffect} from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import toFirstCharUpperCase from '../utils/toFirstCharUpperCase'
import PokeSpinner from './PokeSpinner'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  pokemonGrid: {
    margin: theme.spacing(0),
    maxWidth: '100%',
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  pokemonCard: {
  },
  cardMedia: {
    width: 130,
    height: 130,
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center'
  },
}))

const Pokedex = props => {
  const { history } = props
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState({})

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        const { results } = response.data
        const newPokemonData = {}
        results.forEach((pokemon, index) => {
          newPokemonData[index + 1] = {
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
          }
        })
        setPokemonData(newPokemonData)
      })
  }, [])

  const getPokemonCard = pokemonId => {
    const {id, name, sprite} = pokemonData[pokemonId]
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={pokemonId}>
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
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokemonGrid}>
          {Object.keys(pokemonData).map(pokemonId => getPokemonCard(pokemonId))}
        </Grid>
      ) : (
        <PokeSpinner />
      )}
    </>
  )
}

export default Pokedex
