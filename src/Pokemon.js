import {useState} from 'react'
import data from './mockData'
import {Typography, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import toFirstCharUpperCase from './utils/toFirstCharUpperCase'

const useStyles = makeStyles({
  fullImage: {
    width: 300,
    height: 300,
  },
})

const Pokemon = props => {
  const classes = useStyles()
  const {match} = props
  const {pokemonId} = match.params
  const [pokemon, setPokemon] = useState(data[`${pokemonId}`])

  const generatePokemonJSX = () => {
    const {name, id, species, height, weight, types, sprites} = pokemon
    const {front_default} = sprites
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
    return (
      <>
        <Typography variant="h1">
          {`${id}. ${toFirstCharUpperCase(name)}`}
          <img src={front_default} alt={name} />
        </Typography>
        <img src={fullImageUrl} alt={name} className={classes.fullImage} />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name}</Link>
        </Typography>
        <Typography>Height: {height}</Typography>
        <Typography>Weight: {weight}</Typography>
        <Typography>Types: </Typography>
        {
          types && types.map(typeInfo => {
            const { name } = typeInfo.type
            return <Typography key={name}> {`${name}`} </Typography>
          })
        }

      </>
    )
  }
  return <>{generatePokemonJSX()}</>
}

export default Pokemon
