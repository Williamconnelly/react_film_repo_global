import React, {Component} from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
    
    render() {
        let title = this.props.film.title;
        let year = new Date(this.props.film.release_date).getFullYear();
        return (
            <div className="film-row" onClick={this.props.onDetailsClick}>
            <FilmPoster film={this.props.film}/>

            <div className="film-summary">
                <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
                <h1>{title}</h1>
                <p>{year}</p>
            </div>
        </div>
        )
    }
}

export default FilmRow;