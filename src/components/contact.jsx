import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';




class Contact extends Component {

    render() {
        return (
            <div className='row align-items-center justify-content-center'> 
               
                <Navbar/>

                <div className='row align-items-center justify-content-center' style={{backgroundColor: 'red'}}>
                    <h1>Contact</h1>
                    <p>Contact items go here</p>
                    </div>
            </div>
        )
    }



}



export default Contact;