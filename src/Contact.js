import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from './Navbar';
import './contact.css'


export class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        list: [],
      };
    }
  
    onChange = (event) => {
      this.setState({ term: event.target.value });
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const url = `https://cors-anywhere.herokuapp.com/https://nasyaoris.herokuapp.com/api/newComment?message=${this.state.term}`;
      fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .then(
            this.fetchList()
        )
        .catch(e => console.log('error', e));
    }
    fetchList() {
        const urlAll = `https://cors-anywhere.herokuapp.com/https://nasyaoris.herokuapp.com/api/allComment`;
        fetch(urlAll)
            .then(response => response.json())
            .then(data => {
                let comments = data.map((comment) => {
                    return (
                        <div>
                        <p>{comment.message}</p>
                        <small>{comment.datetime}</small>
                        <hr />
                        </div>
                    )
                })
                console.log(comments);
                this.setState({list:comments});
            })
    }
    componentDidMount() {
        this.fetchList();
    }

  
  
    render() {
        document.body.style = "background: #BDC581"
      return (
        <div className="Contact">
         < Menu />
            <div class="row text-center">
                <div class="col-md-12 col-sm-12">
                    <p class="p4" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '50px', color: '#F8EFBA'}}>leave your message here</p>
                </div>
        </div>
        <div class="row text-center">
        <div class="col-md-2 col-sm-2"></div>
        <div class="col-md-8 col-sm-8">
            < section name="form">
            <form className="form" id="post-form" onSubmit={this.handleSubmit} >
            <input className="form-control input-sl" type="text" value={this.state.term} onChange={this.onChange} />
            <div class="row text-center submitbtn">
            <div class="col-md-2 col-sm-2"></div>
             <div class="col-md-8 col-sm-8">
            <button type="submit" class="btn btn-default send" id="submit">Send!</button>
            </div>
            </div>
            </form>
            <section className="list"><li>{this.state.list}</li></section>
        </section>
        </div>
        <div class="col-md-2 col-sm-2"></div>
        </div>
        </div>
      );
    }
  }
  
  
  export default Contact;