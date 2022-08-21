import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo1 from '../images/logo2.jpg'
import $ from 'jquery'


class Navbar extends Component {

    componentDidMount = () => {
        if (window.screen.width < 660) {
            console.log(window.location)
            if (window.location.pathname.split('/').includes('my_dogs')) {
                console.log('hide the following')
                $('.nav-link').css('color', 'white')

                $('nav').addClass('navbar-dark')

                $('.navtitle').css('color', 'white')

            }
            else {
                console.log('cnahging')
            }

        }
    }


    render() {
        return (
            <div class='row  position-sticky align-content-center justify-content-center  w-100' style={{zIndex: '30'}}>
                {/* <span className='navtitle font-weight-bold' style={{ color: this.props.color }}>THE AFRICAN BULLY REGISTRY</span> */}

                <div className='w-100'>
                    <nav class={`navbar navbar-light navbar-expand-lg ${this.props.navbar_dark}`}>
                        <Link class="navbar-brand " to=""><img src={logo1} height='60px' width='60px'></img></Link>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="w-100 align-items-center justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav text-center d-none d-sm-block">
                                <li class="nav-item active" style={{ color: this.props.color }}>
                                    <span className='navtitle' style={{ color: this.props.color }}>THE AFRICAN BULLY REGISTRY</span>

                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active" style={{ color: this.props.color }}>
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/home">Home </Link>
                                </li>
                                {/* <li class="nav-item active">
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/about">About Us</Link>
                                </li> */}
                                <li class="nav-item active">
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/breeds">Breeds</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/community">Community</Link>
                                </li>
                                {/* <li class="nav-item active">
                            <Link class="nav-link"   style={{color: this.props.color}}to="/shows_and_events">Shows And Events</Link>
                        </li> */}
                                {/* <li class="nav-item active">
                            <Link class="nav-link"  style={{color: this.props.color}} to="/judges">Judges</Link>
                        </li> */}


                                <li class="nav-item active">
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/registration" id="navbarDropdownMenuLink">Register Dog
                                    </Link>

                                </li>
                                {/* <li class="nav-item ">
                            <Link class="nav-link"   style={{color: this.props.color}} to="/contact">Contact
                            </Link>
                            
                        </li> */}
                                <li class="nav-item active">
                                    <Link style={{ color: this.props.color }} class="nav-link" to="/sign_up">Sign Up</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link to='/login' style={{ color: this.props.color }} class="nav-link" onClick={this.props.toggle_login}>Login</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link" style={{ color: this.props.color }} to="/profile">Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

            </div>
        )
    }



}



export default Navbar;