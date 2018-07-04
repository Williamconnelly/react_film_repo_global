import React, { Component } from 'react';
import './App.css';
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";

const films = TMDB.films;
console.log(films);

class App extends Component {
    render() {
        return (
            <div className="film-library">
                <FilmListing films={films}/>
             <FilmDetails/>
            </div>
        );
    }
}

export default App;
