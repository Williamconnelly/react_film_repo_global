import React, { Component } from 'react';
import './App.css';
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import TMDB from "./TMDB";
import axios from "axios";

const films = TMDB.films;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            films,
            faves: [],
            current: {}
        }
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
    }

    handleFaveToggle(film) {
        console.log("toggling fave")
        const faves = Array.from(this.state.faves)
        const filmIndex = faves.indexOf(film)
        if (filmIndex > -1) {
            // It has been found in faves, remove it!
            faves.splice(filmIndex, 1);
        } else {
            // It is not in faves yet
            faves.push(film)
        }
        this.setState({
            faves
        })
    }

    handleDetailsClick(film) {
        console.log(`Fetching Details`);
        const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
        axios.get(url).then(data => {
            // console.log(data);
            this.setState({
                current: data.data
            })
        })
    }

    render() {
        return (
            <div className="film-library">
                <FilmListing films={this.state.films} 
                             faves={this.state.faves} 
                             onFaveToggle={this.handleFaveToggle} 
                             onDetailsClick={this.handleDetailsClick}
                             />
                <FilmDetails film={this.state.current} />
            </div>
        );
    }
}

export default App;