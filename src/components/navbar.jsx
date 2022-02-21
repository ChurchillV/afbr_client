import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo1 from '../images/logo2.jpg'


class Navbar extends Component {
    

    
    render() {
        return (
            <div class='row align-content-center justify-content-center  '>
                   <span className='navtitle'  style={{color: this.props.color}}> <p>THE AFRICAN BULLY REGSISTRY</p></span>
        
            <nav class="navbar navbar-light navbar-expand-lg ">
                <Link class="navbar-brand " to=""><img src={logo1} height='40px' width='40px'></img></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="align-content-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active" style={{color: this.props.color}}>
                            <Link class="nav-link"  style={{color: this.props.color}} to="/home">Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"  style={{color: this.props.color}} to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"   style={{color: this.props.color}}to="/breeds">Breeds</Link>
                        </li>
                        
                        <li class="nav-item">
                            <Link class="nav-link"   style={{color: this.props.color}}to="/shows_and_events">Shows And Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"  style={{color: this.props.color}} to="/judges">Judges</Link>
                        </li>
                    
                        
                        <li class="nav-item ">
                            <Link class="nav-link"   style={{color: this.props.color}} to="/registration" id="navbarDropdownMenuLink">Register
                            </Link>
                            
                        </li>
                        <li class="nav-item ">
                            <Link class="nav-link"   style={{color: this.props.color}} to="/contact">Contact
                            </Link>
                            
                        </li>
                        <li class="nav-item">
                            <Link   style={{color: this.props.color}} class="nav-link" to="/sign_up">Sign Up</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/login'   style={{color: this.props.color}} class="nav-link" onClick={this.props.toggle_login}>Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link"   style={{color: this.props.color}} to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }



}



export default Navbar;