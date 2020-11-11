import {useState} from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Grid,
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import data from '../utils/mockData'
import toFirstCharUpperCase from '../utils/toFirstCharUpperCase'
import PokeSpinner from './PokeSpinner'

const useStyles = makeStyles({
  pokemonGrid: {
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
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
  const [pokemonData, setPokemonData] = useState()

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
