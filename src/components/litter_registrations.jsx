import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/puppies.jfif'
import litter_file from '../images/LITTER_REGISTRATION_FORM.pdf'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import RegisterFormLitter from "./register_form_litter";
import '../css_files/registration.css'
import axios from "axios";
import { url } from "./weburl";
import { PedShareForm } from "./pedshareus";





class LitterRegistration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }
    
    componentDidMount = () => {
    }

    render(){
        return (
            <div className="bgyellow">
    
                <div className="container bgyellow dog_reg_full">
                    <div className="row justify-content-center align-items-center">
                        <Navbar color='white' navbar_dark='navbar-dark'/>
                    </div>
                    <div className="row align-items-center justify-content-center  my-3">
                            <p>Please follow the following three steps 
                                to complete litter registration with us
                            </p>
                    </div>
                    <div className="row align-items-center justify-content-center  my-3">
                        <div className="col-sm-6">
    
                            <a href={litter_file} className="text-white" download>1. Download
                                the litter registration form here</a>
    
                                <img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/iztl3avchjiannfl0yim.png'
                                width={'10%'} />
                        
    
    
                        </div>
                        
                    </div>
    
                    <div className="row align-items-center justify-content-center  my-3">
                        2. Fill the form at your convenience
                    </div>
                    <div className="row justify-content-center align-items-center my-3">
                        <div className="col-sm-6">
                        <p>3. Submit the Form to us</p>
    
                        <PedShareForm label='Upload Filled Document Here' litter_registrations={true} />
                       
                        </div>
                       
                    </div>
    
    
                </div>
    
    
    
    
            </div>
        )
    }
    
}

export default LitterRegistration;