import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ComingSoon} from './ComingSoon';
import { Home } from './Home';
import Typewriter from 'typewriter-effect';


export class Icon extends React.Component {
    constructor(props) {
        super(props);
      
    }


    render() {
        return (
            <img src={this.props.image} className= {this.props.className}/>
        )
    }

}




export class Biodata extends React.Component{


    render() {
       return ( 
        <div className="white-square-container rounded">
        <div className="bio">
          <h1><Typewriter className="type" 
                options={{
                strings: "Hello, I am Nasya",
                autoStart: true,
                loop: true
                }}
            /></h1>

          <p>i am an undergraduate student from Information System </p>
          <p>hopefully developing web and explore business development</p>
          <div className="row">
          <div className="col-md-4 pp"><Link to="/portofolio"><Icon image="https://img.icons8.com/dusk/64/000000/unicorn.png" className="button s"/></Link></div>
          <div className="col-md-4 pp"><Link to="/about"><Icon image="https://img.icons8.com/dusk/64/000000/ghost.png" className="button g"  /></Link></div>
          <div className="col-md-4 pp"><Link to="/experience"><Icon image="https://img.icons8.com/dusk/64/000000/theatre-mask.png" className="button d" /></Link></div>
          </div>
          <div className = "row b">
            <div className="col-md-4 btn btn-default p">portofolio</div>
            <div className="col-md-4 btn btn-default p">about me</div>
            <div className="col-md-4 btn btn-default p">experience</div>
          </div>
        </div>
        </div>
    )

    }
} 



    
    
    