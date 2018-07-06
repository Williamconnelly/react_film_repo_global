import React, {Component} from "react";

class Fave extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            isFave: false
        }
    }
    handleClick(e) {
        e.stopPropagation();
        console.log("handling Fave click!")
        console.log(this.state.isFave)
        this.setState({
            isFave: !this.state.isFave
        })
    }

    render() {
        const isFave = (this.state.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return(
            <div className={"film-row-fave " + isFave} onClick = {(e) => this.handleClick(e)}>
                <p className="material-icons">{isFave}</p>
            </div>
        )
    }
}

export default Fave