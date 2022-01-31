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
              
                <div className='shows_blob'>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#daa520" d="M67,-20.8C72.5,-4.7,52.9,20.6,31.8,33.4C10.8,46.2,-11.7,46.7,-29.8,35C-47.8,23.3,-61.4,-0.6,-55.7,-16.9C-50,-33.2,-25,-42.1,2.9,-43C30.7,-44,61.4,-37,67,-20.8Z" transform="translate(100 100)" />
                    </svg>
                </div>

                <div className='row align-items-center justify-content-center shows_text'>

                    <div className='col-md-6 shows_img_col'>
                        <img src={shows2} className='shows_img'></img>
                    </div>

                    <div className='col-md-6 align-items-center shows_main_text justify-content-center'>
                        <h1 className='h1_judges'>Shows And Events</h1>
                        <p className='p_apply'>No shows have been held yet</p>
                        <p>Sign up, contact us if you would like to <br />
                            hold a show with us</p>
                    </div>


                </div>
                <div className='row align-items-center justify-content-center waves_blob1_div ' >
                <div className='waves_blob1'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"><path fill="#daa520"
                            fill-opacity="1" d="M0,160L24,170.7C48,181,96,203,144,202.7C192,203,240,181,288,170.7C336,160,384,160,432,170.7C480,181,528,203,576,213.3C624,224,672,224,720,192C768,160,816,96,864,112C912,128,960,224,1008,229.3C1056,235,1104,149,1152,112C1200,75,1248,85,1296,80C1344,75,1392,53,1416,42.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                </div>
                </div>
               

            </div>

        )
    }



}



export default Shows;