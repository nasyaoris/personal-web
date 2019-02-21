import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './about.css';
import {Menu} from './Navbar';





export const Name = () => (
    <section className="nama">
        <div className="row">
            <div className="col-8" style={{padding: '5%'}}>
                <p style={{fontSize:"25px"}}>This is me...</p>
                <h1 className="a">Oristania Wahyu Nabasya</h1>
                <SocialIcon style={{height: "35px" , width:"35px", marginRight: "2%"}} className="social-icon social" url="https://www.linkedin.com/in/oristania-wahyu-nabasya" />
                <SocialIcon style={{height: "35px" , width:"35px", marginRight: "2%"}} className="social-icon social" url="https://github.com/oristania/" />
                <SocialIcon style={{height: "35px" , width:"35px", marginRight: "2%"}} className="social-icon social" url="https://www.instagram.com/nasyaoris/" />
                <SocialIcon style={{height: "35px" , width:"35px", marginRight: "2%"}} className="social-icon social" url="http://twitter.com/nasyaoris" />
                
            </div>
            <div className="col-md-4 foto">
            <div className="circle"> 
            </div>
        </div>
      
         
        </div>
    </section>
)

export const Fashion = () => (
    <section className="container-fluid fashion">
        <div className="row">
            <h2 style={{fontFamily: 'Indie Flower, cursive'}}>i'm a fashion enthusiast</h2>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="row">
                <div className="col-md-3 col-xs-6">
                    <div className="circle f"> 
                    </div>
                </div>
                <div className="col-6">
                    <p className="ab">yes, i do design</p>
                </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                <div className="col-md-3 col-xs-6">
                    <div className="circle art"> 
                    </div>
                </div>
                <div className="col-6" >
                   <p className="ab">and i love abstract art </p>
                </div>
                </div>
            </div>
        </div>
    </section>
)

export const Software = () => (
    <section className="container-fluid software" style={{minHeight: "34vh"}}>
        <div className="komponen">
        <div className="row">
            <h2 style={{fontFamily: 'Indie Flower, cursive'}}>currently playing along with these...</h2>
        </div>
        <div className="stack row">
            <div className="col-4"><img className="logo" src="./react-logo.92892148.png"/></div>
            <div className="col-4"><img className="logo" src="./download.png" /></div>
            <div className="col-4"><img className="logo" src="./css3.44e0fb33.png" /></div>  
        </div>
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>    
        </div>

    </div>


    </section>
)

export class About extends React.Component {
    render () {
        document.body.style = 'background:  #BDC581' 
        return (
            <div>
                <Menu />
                <Name />
                <Fashion />
                <Software />
            </div>
        )
    }
}