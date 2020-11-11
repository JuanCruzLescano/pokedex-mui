import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './theme'

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
