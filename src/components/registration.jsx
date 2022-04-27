import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from '../images/litter1.jpeg'
import puppy from '../images/doga4.jpeg'
import dog from '../images/doga3.jpeg'
import '../css_files/registration.css';
import { url } from "./weburl";


class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dpo: '',
            loaded: false,
        }

    }







    render() {
        return (
            <div className="container-fluid registration_full">
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-">
                        <Navbar />

                    </div>

                </div>
                <div className='row align-items-center justify-content-center pt-1 registration_text'>
                    <div className="container">
                        <div className='row align-items-center justify-content-center py-5'>
                            <div className='col-lg- registration_title py-1'>
                                <h1>Register your dog with the African Bully Registry</h1>
                            </div>

                        </div>
                    </div>



                    <div className='row text-left  align-items-center justify-content-center'>



                        <div className="col-md-3 register-card my-2 ">
                            <RegisterCard image_src={litter} title='Litter Registation'
                                className='puppies'
                                text1='Register a collection of puppies with us'
                                text_price='Domestic: $20.00'
                                text_price1='International: $25.00'
                                url='/litter_registrations'/>
                        </div>





                        <div className="col-md-3 register-card">
                            <RegisterCard image_src={puppy} title='Puppy Registation'
                                className='puppies'
                                text1='Register your puppy with us'
                                text2='Age: less than 12 months old'
                                text_price='Domestic: $20.00'
                                text_price2='International: $25.00'
                                url='/dog_registrations'
                            />
                        </div>

                        <div className="col-md-3 register-card">

                            <RegisterCard image_src={dog} title='Dog Registration'
                                className='puppies'
                                text1='Register an adult dog with us'
                                text2='Age: above 12 months old'
                                text_price='Domestic: $35.00'
                                text_price2='International: $40.00'
                                url='/adult_registrations' />
                        </div>




                    </div>
                </div>



            </div>

        )
    }

}

export default Registration;