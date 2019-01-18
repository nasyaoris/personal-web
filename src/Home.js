import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Biodata} from './Biodata';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background : "#c44569;"
        }
        this.ChangeColor = this.ChangeColor.bind(this);
    }

    ChangeColor() {
        if (this.state.background == "#c44569;") {
            this.setState({
                background : "#F8EFBA"
            });
        }else{
            this.setState({
                background : "#c44569;"
            })
        }
    }
    
    render () {
        document.body.style = 'background: '+this.state.background
        return (
        <div>
            <button type="button" className="btn btn-default" onClick={this.ChangeColor} >MOOD</button>
            <div className= "box">
             < Biodata />
           </div>
        </div> 
        )
    }

}

export default Home;