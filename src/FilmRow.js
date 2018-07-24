import React from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";
import {FilmContext} from "./FilmContext";

const FilmRow = props => {
    return (
        <FilmContext.Consumer>
            {
                ({changeCurrentFilm}) => {
                    let title = props.film.title;
                    let year = new Date(props.film.release_date).getFullYear();
                    return (
                        <div className="film-row" onClick={() => changeCurrentFilm(props.film)}>
                        <FilmPoster film={props.film}/>

                            <div className="film-summary">
                                <Fave isFave={props.isFave} film={props.film} />
                                <h1>{title}</h1>
                                <p>{year}</p>
                            </div>
                        </div>
                    )
                }
            }
        </FilmContext.Consumer>
    )
}

export default FilmRow;