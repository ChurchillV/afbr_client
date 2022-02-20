import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/judges.css'
import judges from '../images/judge1-removebg-preview.png'



class Judges extends Component {

    render() {
        return (
            <div>
                <div className='row align-items-center justify-content-center '>

                    <Navbar />
                    <div className='container-fluid judges_full'>
                        <div className='row align-items-center justify-content-center judges_text'>
                            <div className='col-md- py-5'>
                                <h1 className=' py-5'>Judges</h1>
                                <p className='p_apply'>Apply as a Judge</p>
                                <p>THE AFRICAN BULLY REGISTRY</p>
                            </div>
{/* 
                            <div className='col-md-6 shows_img_col'>
                                <img src={judges} className='shows_img'></img>
                            </div> */}
                        </div>

                    </div>
                    <div className='row align-items-center justify-content-end judges_text'>

                      
                    </div>
                  
                </div>

            </div>


        )
    }



}



export default Judges;