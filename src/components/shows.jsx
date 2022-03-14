import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/shows_and_events.css'
import shows1 from '../images/shows_1_preview.png'
import shows2 from '../images/shows_2_preview.png'
import shows3 from '../images/shows_3_preview.png'


class Shows extends Component {

    render() {
        return (
            <div className='container_fluid'>
                <div className='row align-items-center justify-content-center '>

                    <div>
                    <Navbar />
                    </div>

                 

                    <div className='container-fluid'>
                        <div className='row align-items-center justify-content-center shows_text'>

                            <div className='col-md-6 shows_img_col'>
                                <img src={shows1} className='shows_img'></img>
                            </div>

                            <div className='col-md-6 align-items-center shows_main_text justify-content-center'>
                                <h1 className='h1_judges text_capitalize text_uppercase text-align-left'>AFBR Shows And Events</h1>
                                <h3 className='p_apply'>No shows have been held yet</h3>
                                <p className='p_apply'> Sign up, contact us if you would like to <br />
                                    hold a show with us</p>
                            </div>


                        </div>
                    </div>
                </div>






            </div>

        )
    }



}



export default Shows;