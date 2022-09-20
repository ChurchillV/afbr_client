import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from '../images/litter1.jpeg'
import puppy from '../images/doga4.jpeg'
import dog from '../images/doga3.jpeg'
import promotion from '../images/promotion.png'

import '../css_files/registration.css';
import '../css_files/extras.css';

import { url } from "./weburl";
import dog_registrations from "./dog_registrations";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";


class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dpo: '',
            loaded: false,
            location: '',
            price: '',
            litter_registrations_price: '',
            puppy_registrations_price: '',
            dog_registrations_price: ''
        }

    }

    componentDidMount = () => {
        // this.getcurrentuserLocation()
    }
    render() {
        return (
            <div className="">
                <div className='row align-items-center justify-content-center'>
                    <div className="col-lg-12">
                        <Navbar />

                    </div>

                </div>
                <div className="d9d9d9">
                    <div className="container">
                        <div className="container">
                            <div className='row align-items-center justify-content-center pt-1 '>

                                <div className='col-sm-10  py-1 my-5 my-sm-0 text-uppercase 
                                 text-left'>
                                    <p>Register your dog with us</p>
                                </div>



                            </div>

                            <div className='row text-left  align-items-center justify-content-center mb-5 '>



                                <div className="col-md-10 register-card my-2 box_shadow">
                                    <RegisterCard image_src={litter} title='Litter Registration'
                                        className='puppies '
                                        text1='Register a collection of puppies with us'
                                        text_price={` $${this.props.litter_registrations_price}.00`}
                                        // text_price2={`International: ${this.litter_registrations_price}`}
                                        url='/litter_registrations'
                                        litter_price={this.state.litter_registrations_price}
                                        // cancelled_text={'$25.00'}
                                        puppy_price={this.state.puppy_registrations_price}
                                        dog_price={this.state.dog_registrations_price}

                                    />
                                </div>

                            </div>


                            <div className="row align-items-center justify-content-center mb-5 ">
                                <div className="col-md-10 register-card box_shadow">
                                    <RegisterCard image_src={puppy} title='Puppy Registration'
                                        className='puppies'
                                        text1='Register your puppy with us'
                                        text2='Age: less than 12 months old'
                                        // cancelled_text={'$30.00'}

                                        text_price={` $${this.props.puppy_registrations_price}.00`}
                                        url='/dog_registrations'
                                    />
                                </div>
                            </div>

                            <div className="row align-items-center justify-content-center mb-5 ">
                                <div className="col-md-10 register-card box_shadow">

                                    <RegisterCard image_src={dog} title='Dog Registration'
                                        className='puppies'
                                        text1='Register an adult dog with us'
                                        text2='Age: above 12 months old'
                                        // cancelled_text={'$35.00'}

                                        text_price={` $${this.props.dog_registrations_price}.00`}
                                        url='/adult_registrations' />
                                </div>




                            </div>
                        </div>
                    </div>

                </div>


            </div>




        )
    }

}

export default Registration;