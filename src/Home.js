import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Biodata} from './Biodata';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background : "#d06a9b;"
        }
        this.ChangeColor = this.ChangeColor.bind(this);
    }

    ChangeColor() {
        if (this.state.background == "#d06a9b;") {
            this.setState({
                background : "#F8EFBA"
            });
        }else{
            this.setState({
                background : "#d06a9b;"
            })
        }
    }
    
    render () {
        document.body.style = 'background: '+this.state.background
        return (
        <div className="home">
            <div className="mood">
            <button type="button" className="btn btn-default" onClick={this.ChangeColor} >MOOD</button>
            </div>
            <div className= "box">
             < Biodata />
           </div>
        </div> 
        )
    }

}

export default Home;