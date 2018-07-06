import React, { Component } from 'react';
import FilmRow from "./FilmRow";

class FilmListing extends Component {
    constructor(props) {
        super(props)
        this.handleFilterClick = this.handleFilterClick.bind(this)
        this.state = {
            filter: "all"
        }
    }
    handleFilterClick(filter) {
        console.log(`Setting Filter to ${filter}`);
        this.setState({
            filter: filter
        })
    }

    render() {
        let allFilms = this.props.films.map( (film) => {
            return (
                <FilmRow film={film} key={film.id}/>
            )
        })

        const checkFilter = this.state.filter === 'all' ? 'is-active' : ""

        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={"film-list-filter " + checkFilter} onClick= {() => {this.handleFilterClick("all")}}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div className={"film-list-filter " + checkFilter} onClick= {() => {this.handleFilterClick("faves")}}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
            );
        }  
    }

export default FilmListing;