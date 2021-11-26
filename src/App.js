import React from 'react'
import './style.css'
import Weather from './components/Weather'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
    return(
        <Router basname={process.env.PUBLIC_URL}>
            <Switch>
                <Route path="/" exact component={Weather} />
            </Switch>
        </Router>
    )
}
export default App;