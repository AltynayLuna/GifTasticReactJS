import React, { Component } from 'react';
import AddMovie from './AddMovie';
import ButtonList from './ButtonList';
import MovieImageList from './MovieImageList';
import MovieGif from './MovieGif';

export default class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            buttonList : []
        }
    }

    imageButtonHandler = (movieTitle) => {
        let newMovieButton = <button>{movieTitle}</button>
        this.setState({
            buttonList: [...this.state.buttonList, newMovieButton]
        });
    }

    render() {
        return(
            <div>
                <section id="showcase">
                    <div className="showcase-container">
                        <div className="showcase-content">
                            <h1>Iconic Movies of the <span className="primary-text">'90s</span></h1>
                        </div>
                    </div>
                </section>
                <AddMovie newButton = {this.imageButtonHandler}/>
                <ButtonList buttonList={this.state.buttonList}/>
                <MovieImageList />
                <MovieGif />
            </div>
        )
    }
} 