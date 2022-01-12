import React from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/puppies.jfif'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import RegisterForm from './register_form'

import logo2 from '../images/logo2.jpg'


const AdultRegistration = () => {
    return (
        <div className='row align-items-center justify-content-center'>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <img src={logo2} height='300px'></img>
                    </div>
                    <div className="col-md-8">
                        <RegisterForm />
                    </div>
                </div>
            </div>

            
           


        </div>
    )
}

export default AdultRegistration;