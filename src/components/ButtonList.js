import React, { Component } from 'react';

export default class ButtonList extends Component {
    constructor(){
        super();
        this.state = {
            buttons : []
        }
    }

    componentDidMount(){
        this.setState({
            buttons: this.props.buttonList
        });
    }

    componentWillUpdate(prevState){
        if(prevState.buttonList != this.props.buttonList){
            this.setState({
                buttons: prevState.buttonList
            });
        }
    }

    render() {
        return(
            <div>
                <section id="buttonList">
                <button>Pulp Fiction</button>
                <button>Forrest Gump</button>
                <button>Titanic</button>                
                    {
                        this.state.buttons.map((button) => {
                            return button;
                        })
                    }
                </section>
            </div>
        )
    }
} 