import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/shows_and_events.css'
import shows2 from '../images/shows4.jpg'


class Shows extends Component {

    render() {
        return (
            <div className='row align-items-center justify-content-center shows_full'>

                <Navbar />
                <div className='row align-items-center justify-content-center shows_text'>

                    <div className='col-sm-6 shows_img_col'>
                        <img src={shows2} className='shows_img'></img>
                    </div>

                    <div className='col-sm-6'>
                        <h1 className='h1_judges'>Shows And Events</h1>
                        <p className='p_apply'>No shows have been held yet</p>
                        <p>Sign up, contact us if you would like to <br/>
                        hold a show with us</p>
                    </div>


                </div>

            </div>

        )
    }



}



export default Shows;