import React from 'react';

const FilmRow = props => {
    let title = props.film.title;
    let posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`;
    let year = new Date(props.film.release_date).getFullYear();
    return (
        <div className="film-row">
            <img src={posterUrl} alt="" />

            <div className="film-summary">
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
        </div>
    )
  }

export default FilmRow;