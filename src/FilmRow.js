import React, {Component} from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
    render() {
        let title = this.props.film.title;
        let year = new Date(this.props.film.release_date).getFullYear();
        return (
            <div className="film-row">
            <FilmPoster film={this.props.film}/>

            <div className="film-summary">
                <Fave />
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
        </div>
        )
    }
}

export default FilmRow;