import React from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/puppies.jfif'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'


const LitterRegistration = () => {
    return (
        <div className='row align-items-center justify-content-center'>
            <Navbar />
            <div className='col-sm-'>
            <h1>Register your litters today in 2 simple steps </h1>
            <br/>
           <p>Download the litter registration form below</p>
            </div>
           
           
        </div>
    )
}

export default LitterRegistration;