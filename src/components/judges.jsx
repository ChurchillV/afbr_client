import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/judges.css'
import judges from '../images/judge1.png'



class Judges extends Component {

    render() {
        return (
            <div className='row align-items-center justify-content-center judges_full'>

                <Navbar />
                <div className='container'>
                    <div className='row align-items-center justify-content-center judges_text'>
                        <div className='col-sm-6 '>
                        <h1 className='h1_judges'>Judges</h1>
                        <p className='p_apply'>Apply as a Judge</p>
                        </div>
                       
                        <div className='col-sm-6 shows_img_col'>
                            <img src={judges} className='shows_img'></img>
                        </div>
                    </div>

                </div>
                <div className='row align-items-center justify-content-end judges_text'>

                    <p>THE AFRICAN BULLY REGISTRY</p>
                </div>

            </div>

           
        )
    }



}



export default Judges;