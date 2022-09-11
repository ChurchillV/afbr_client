import React from 'react';
import Navbar from './navbar';
import cartoon from '../images/cartoon1.png'
import '../css_files/profile_not_logged_in.css'
import { Link } from "react-router-dom";
import Footer from './footer';


export const Profile_Not_Logged_In = () => {
    return (
        <div className=''>
            <Navbar />
            <div className='d9d9d9 '>

                <div className='container py-5 py-sm-0 mt-2 mt-sm-0 ' >
                    <div className='row align-items-center justify-content-center py-5 my-0 my-sm-5'>
                        {/* <div className='col-sm-4'>
                            <img src={cartoon} alt="" className='img-fluid img-responsive img-custom-responsive d-none d-sm-inline' />
                        </div> */}
                        <div className='col-sm-8 text-left text-md-left py-5 mx-5 mx-sm-0'>
                            <h1 className='font-weight-normal 
                            text-dark mt-5 mt-sm-0 mb-5 mb-sm-0 '>
                                <span className='text-warning '>  Oops!!!</span> Seems like you are not logged in to view your dashboard.</h1>
                            {/* <p>Please sign up or login to view your dashboard.</p> */}
                            <small>
                            <li class="d-inline ">
                                <Link class="" to="/login">Login&nbsp;&nbsp;&nbsp;</Link>
                                <Link class="" to="/sign_up">Sign up&nbsp;&nbsp;&nbsp;</Link>

                                <Link class="" to="/home">Home</Link>

                            </li>
                            </small> 

                            {/* <p className='mt-0 mt-sm-5 '><small>The African Bully Registry</small></p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <Footer />

            </div>
        </div>

    )
}