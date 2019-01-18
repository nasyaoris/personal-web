import React from 'react';
import ReactDOM from 'react-dom';
import "./comingsoon.css"
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar';

export class ComingSoon extends React.Component {
render() {
    document.body.style = "background: #BDC581"
    return (
        <div>
            < Navbar />
        <div className="row soon">
            <Typewriter className="type" 
                options={{
                wrapperClassName: "type",
                strings: "Coming Soon",
                autoStart: true,
                loop: true,
                }}
            />
        </div>
        </div>
    )
    
}



}

export default ComingSoon;