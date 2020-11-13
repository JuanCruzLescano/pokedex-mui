import {useEffect, useState} from 'react'
import {
  Typography,
  Link,
  Button,
  IconButton,
  Paper,
  Grid,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {makeStyles} from '@material-ui/core/styles'
import toFirstCharUpperCase from '../utils/toFirstCharUpperCase'
import PokeSpinner from './PokeSpinner'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  fullImage: {
    width: 300,
    height: 300,
  },
  cardContainer: {
    background: 'linear-gradient(to top, #ff416c, #ff4b2b)',
    width: 600,
    height: 600,
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  },
}))

const Pokemon = props => {
  const classes = useStyles()
  const {match, history} = props
  const {pokemonId} = match.params
  const [pokemon, setPokemon] = useState(undefined)

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        const {data} = response
        setPokemon(data)
      })
      .catch(err => {
        setPokemon(false)
      })
  }, [pokemonId])

  const generatePokemonJSX = () => {
    const {name, id, species, height, weight, types, sprites} = pokemon
    const {front_default} = sprites
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
      <>
        <Grid container justify="center">
          <Paper elevation={6} className={classes.cardContainer}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={12} sm={8} style={{border: '1px solid red'}}>
                <Typography variant="h1">
                  {`${toFirstCharUpperCase(name)}`}
                </Typography>
                  <img src={front_default} alt={name} />
              </Grid>
              <Grid item xs={12} sm={8}>
              <img
                src={fullImageUrl}
                alt={name}
                className={classes.fullImage}
              />
              </Grid>
              <Typography variant="h3">Pokemon Info</Typography>
              <Typography>
                {'Species: '}
                <Link href={species.url}>{species.name}</Link>
              </Typography>
              <Typography>Height: {height}</Typography>
              <Typography>Weight: {weight}</Typography>
              <Typography>Types: </Typography>
              {types &&
                types.map(typeInfo => {
                  const {name} = typeInfo.type
                  return <Typography key={name}> {`${name}`} </Typography>
                })}
            </Grid>
            <IconButton color="primary" onClick={() => history.push('/')}>
              <ArrowBackIcon />
            </IconButton>
          </Paper>
        </Grid>
      </>
    )
  }
  return (
    <>
      {pokemon === undefined && <PokeSpinner />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found </Typography>}
      {pokemon === false && (
        <IconButton color='primary' onClick={() => history.push('/')}>
          <ArrowBackIcon />
        </IconButton>
      )}
    </>
  )
}

export default Pokemon
