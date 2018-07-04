import React from "react";

const FilmListing = props => (
    <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <h1>{props.films}</h1>
    </div>
)

export default FilmListing;