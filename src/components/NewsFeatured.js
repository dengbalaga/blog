import React,{Component} from 'react';

import {Table} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import './Style.css';

export class NewsFeatured extends Component {

    constructor(props){
        super(props);
        this.state = {deps:[]}
    }

    componentDidMount(){
        this.refreshList();
    }
    
    refreshList(){

       // const proxyurl = "http://localhost:3000/";
        //const url = "https://www.sti.edu/alumniapi/api/newsarticle?feature"; // site that doesn’t send Access-Control-*
        //fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com


        //fetch('https://www.sti.edu/eduapi/api/newsarticle')
        //fetch('https://www.sti.edu/eduapi/api/newsarticle')
        fetch('/newsarticle')
        //fetch('http://localhost:59619/api/newsarticle')
        .then((response) => response.json())
        .then(data => {
        this.setState({deps:data});    
        }
        );

    }



    render(){

        const {deps} = this.state;


        
        return(
            <div className=" wrapper-featured">
            <div className="container">

                     
                        

                <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="font-article-title mt-5 mb-4">News & Events</h1>
                        </div>
                          
                        {deps.map(dep=>
         
                            <div className="col-md-4 news" key={dep.id}>
                            <div className="card">
                                <div className="pb-3">
                                    <div>
                                        <img className="card-img-top" src={dep.imagepathlink}></img>
                                        <h5 className="mt-4 pl-4 pr-4">{dep.title}</h5>
                                        <Link className="font-blue pl-4 pr-4" to={`/newsdetail/${dep.Id}`}> LEARN MORE</Link>
                                    </div>
                                </div>
                            </div>
                            </div>         
                                       
                        )}


                </div>






             </div>
             </div>
        
        )
    }
}