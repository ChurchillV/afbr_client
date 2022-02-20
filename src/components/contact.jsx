import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/contact.css';





class Contact extends Component {

    render() {
        return (

            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center'>

                    <Navbar />

                </div>

                <div>
                    <div className='row align-items-center justify-content-center py-5 contact_text' >
                        <div className='col-lg-'>
                            <h1>Contact Us</h1>
                            <p>Contact items go here</p>
                        </div>

                    </div>
                </div>
            </div>

        )
    }



}



export default Contact;