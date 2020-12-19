import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieDetails from './components/MovieDetails/MovieDetails';

import MovieSearch from './components/MovieSearch/MovieSearch';


function App() {
  return (
    <div className="App">
      <Switch>

        <Route path='/details/:movieId'>
          <MovieDetails />
        </Route>

        <Route path='/search/:page'>
          <MovieSearch />
        </Route>
        <Route path='/'>
          <Redirect to='/search/1'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
