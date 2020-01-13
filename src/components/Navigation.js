import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

import {Link} from 'react-router-dom';

import './Style.css';

export class Navigation extends Component{
    render(){
        return(
<div className="nav-bg">

    <div className="text-black followus pt-1 pb-1">
<div className="container">
	<div className="row">
    	<div className="col-md-6 col-md-9">
     <span>Follow us</span> &nbsp; <img src="https://alumni.sti.edu/img/facebook.png" className="mb-1"></img> <img src="https://alumni.sti.edu/img/linkedin.png" className="mb-1"/>
        </div>
        <div className="col-md-6 col-md-3 right-align">
        	<div ><span className=" right">

           
        	      </span>
        	</div>
        </div>
    </div>
</div>
</div>
  



<nav className="navbar navbar-expand-lg navbar-light bg-white navbar-wrapper">


<div className="container">
  <img src="https://alumni.sti.edu/img/logo-white-latest.png" className="d-sm-block d-md-none logo-ftop"></img>
  <img src="https://alumni.sti.edu/img/logo-yellow.png" className="d-none d-lg-block logo-ftop"></img>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
         
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ABOUT STIAA
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/news">History / Vision & Mission</Link>
          <Link className="dropdown-item" to="/news">STIAA Officers</Link>
          <Link className="dropdown-item" to="/news">Alumni Pledge</Link>
          <Link className="dropdown-item" to="/news">Recognized Local Chapters</Link>
          <Link className="dropdown-item" to="/news">Membership Benefits</Link>
          <Link className="dropdown-item" to="/news">Registration</Link>

        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ACTIVITIES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/news">STI Distinguished Alumni Awards</Link>
          <Link className="dropdown-item" to="/news">Alumni Reconnect Campaign</Link>
          <Link className="dropdown-item" to="/news">Alumni Seminars</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        CONNECT
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="/news">Alumni Feature</Link>
          <Link className="dropdown-item" to="/news">Honors & Awardees</Link>
          <Link className="dropdown-item" to="/news">Alumni News</Link>
          <Link className="dropdown-item" to="/careertips">Career Tips & Advisory</Link>
        </div>
      </li>
      <li className="na v-item">
        <Link className="nav-link" to="/news">STORE</Link>
      </li>
    </ul>

  </div>
  </div>
</nav>





</div>

        )
    }
}