import React, {Component} from 'react';
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
    constructor(props) {
        super(props)
        this.handleDetailsClick = this.handleDetailsClick.bind(this)
        this.state = {
            
        }
    }

    handleDetailsClick(film) {
        console.log(`Fetching Details for ${film}`);
        // console.log("Fetching Details for ", film)
    }

    render() {
        let title = this.props.film.title;
        let year = new Date(this.props.film.release_date).getFullYear();
        return (
            <div className="film-row" onClick= {() => this.handleDetailsClick(this.props.film)}>
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