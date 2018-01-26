import React, { Component } from 'react';
import _ from 'lodash';

const queryURL = movie => 
"https://api.giphy.com/v1/gifs/search?q=${Titanic}&api_key=a8761e066005497a87b6e979d453e4b9&limit=12";

export default class movieGif extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        fetch(queryURL(this.props.movie))
            .then(d => d.json())
            .then(d => {
            this.setState({
                movieGifData: d
            }) 
            console.log(d.data);           
        })
    }
    render() {
        var movieGifs = _.map(this.state.movieGifData, (movieGif) => {
            return <li>{movieGif.id}</li>
        }); 
        return(
            <div>
                <section id="movieGif">
                    <ul>{movieGifs}</ul>
                </section>
            </div>
        );
    }
} 