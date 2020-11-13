import {useState, useEffect} from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
} from '@material-ui/core'
import {makeStyles, fade} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import toFirstCharUpperCase from '../utils/toFirstCharUpperCase'
import PokeSpinner from './PokeSpinner'
import pokemonLogo from '../assets/pokemonLogo.svg'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  pokemonGrid: {
    margin: theme.spacing(0),
    maxWidth: '100%',
    paddingTop: '20px',
    paddingRight: '50px',
    paddingLeft: '50px',
  },
  pokemonCard: {},
  cardMedia: {
    width: 130,
    height: 130,
    margin: 'auto',
  },
  cardContent: {
    textAlign: 'center',
  },
  pokemonLogo: {
    height: 40,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Pokedex = props => {
  const {history} = props
  const classes = useStyles()
  const [pokemonData, setPokemonData] = useState({})
  const [filter, setFilter] = useState('')

  const handleSearchChange = e => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then(response => {
      const {results} = response.data
      const newPokemonData = {}
      results.forEach((pokemon, index) => {
        newPokemonData[index + 1] = {
          id: index + 1,
          name: pokemon.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
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
            <Typography>{`${id}. ${toFirstCharUpperCase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
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
                  onChange={handleSearchChange}
                  placeholder="Search..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{'aria-label': 'search'}}
                />
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokemonGrid}>
          {Object.keys(pokemonData).map(
            pokemonId =>
              pokemonData[pokemonId].name.includes(filter) &&
              getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <PokeSpinner />
      )}
    </>
  )
}

export default Pokedex
