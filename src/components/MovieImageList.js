import React, { Component } from 'react';

export default class MovieImageList extends Component {

    constructor(){
        super();
        this.state = {
            movieTitle : "",
            movieImages : []
        }
    }
    

    /* 
        This function every time the parent receives a new movie title
        so if the movieTitle is different from the previous movie title, 
        we will fetch the new images AFTER we set the state
    */
    componentWillUpdate(currentState){
        if(currentState.movieTitle != this.state.movieTitle){
            this.setState({
                movieTitle : this.props.movieTitle
            }, this.updateMovieImages());
        }
    }

    /* in this function we would fetch the movie image data */
    updateMovieImages = () => {
        let movieTitle = this.state.movieTitle;
        /* fetch the images and put them into an array */
        /* 
        let returnedImages = [];
        fetch(someUrl).then(data => {
            returnedImages.push(data.imageUrl);
        }).then(()=>{
            this.setState({ movieImages: returnedImages})
        })

        */
    }

    render() {
        return(
            <div>
                <section id="movieImageList">
                    <p>Movie Images: { this.state.movieTitle }</p>
                    {
                        this.state.movieImages.map((image, i) => {
                            return <img src={image} />
                        })
                    }
                </section>
            </div>
        )
    }
} 