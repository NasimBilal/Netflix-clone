import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import WelcomePage from './Pages/Welcome';
import SignUpPage from './Pages/SignUp';
import SignInPage from './Pages/SignIn';
import Home from './Pages/Home';
import Mail from './Context/emailContext';
import TvShowsPage from './Pages/TvShows';
import MoviesPage from './Pages/Movies';
import Search from './Context/searchContext';
import SearchPage from './Pages/Search';

function App() {
  return (
    <Mail>
      <Search>
      <div className="App">
        <BrowserRouter>
          <Route exact path='/'>
            <WelcomePage/>
          </Route>
          <Route path='/signup'>
            <SignUpPage/>
          </Route>
          <Route path='/signin'>
            <SignInPage/>
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/tv-shows'>
            <TvShowsPage/>
          </Route>
          <Route path='/movies'>
            <MoviesPage/>
          </Route>
          <Route exact path='/search'>
            <SearchPage/>
          </Route>
        </BrowserRouter>
      </div>
      </Search>

    </Mail>
  );
}

export default App;
