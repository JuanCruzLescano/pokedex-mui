import {Route, Switch} from 'react-router-dom'
import PokeBar from './components/AppBar'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <>
      <PokeBar />
      <Switch>
        <Route exact path="/" render={props => <Pokedex {...props} />} />
        <Route
          exact
          path="/:pokemonId"
          render={props => <Pokemon {...props} />}
        />
      </Switch>
    </>
  )
}

export default App
