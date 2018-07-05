import React from 'react';
import FilmPoster from "./FilmPoster";

const FilmRow = props => {
    let title = props.film.title;
    let year = new Date(props.film.release_date).getFullYear();
    return (
        <div className="film-row">
            <FilmPoster film={props.film}/>

            <div className="film-summary">
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
        </div>
    )
  }

export default FilmRow;