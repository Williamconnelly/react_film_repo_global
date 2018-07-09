import React from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

const FilmRow = props => {
    let title = props.film.title;
        let year = new Date(props.film.release_date).getFullYear();
        return (
            <div className="film-row" onClick={props.onDetailsClick}>
            <FilmPoster film={props.film}/>

            <div className="film-summary">
                <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
        </div>
    )
}

export default FilmRow;