import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';


class Breeds extends Component {

    render() {
        return (
            <div className='row align-items-center justify-content-center breed_full'>

                <Navbar />

                <div className='row breed_text align-items-center justify-content-center'>
                    <h1>Breeds</h1>
                    <div className='row align-items-center justify-content-center'>
                        <p>Shows items go here</p>
                    </div>

                </div>
            </div>
        )
    }



}



export default Breeds;