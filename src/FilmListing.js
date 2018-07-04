import React, { Component } from 'react';

class FilmListing extends Component {
    render() {
        let allFilms = this.props.films.map( (film, i) => {
            return (
                <h1>{film.title}</h1>
            )
        })

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
            );
        }  
    }

export default FilmListing;