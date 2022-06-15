import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from '../images/litter1.jpeg'
import puppy from '../images/doga4.jpeg'
import dog from '../images/doga3.jpeg'
import promotion from '../images/promotion.png'

import '../css_files/registration.css';
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
            litter_registrations_price:'',
            puppy_registrations_price:'',
            dog_registrations_price:''
        }

    }

    componentDidMount =()=>{
        // this.getcurrentuserLocation()
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
                        <div className='row align-items-center justify-content-center pt-2'>
                            <div className='col-lg- registration_title py-1'>
                                <p>Register your dog with the African Bully Registry</p>
                            </div>
                            

                        </div>
                        <div className='row align-items-center justify-content-center py-2 mb-2 mx-5 bg-success promo_row'>
                        <div className='col-lg-3'>
                                <img src={promotion} alt="" width={'150px'}/>
                            </div>
                            <div className='col-lg-6'>
                                <h5 className="promo text-white font-weight-bold text-uppercase text-italic">
                                    PROMO: Discounted prices last until June 20th.&nbsp; 
                                    <span className="text-capitalize font-weight-normal"> First 10 registrations only. <hr /> &nbsp;</span>
                                    <span className="text-capitalize font-weight-normal">(10 remaining)</span></h5>
                            </div>
                            

                        </div>
                    </div>



                    <div className='row text-left  align-items-center justify-content-center'>



                        <div className="col-md-3 register-card my-2 ">
                            <RegisterCard image_src={litter} title='Litter Registation'
                                className='puppies'
                                text1='Register a collection of puppies with us'
                                text_price={` $${this.props.litter_registrations_price}.00`}
                                // text_price2={`International: ${this.litter_registrations_price}`}
                                url='/litter_registrations'
                                litter_price={this.state.litter_registrations_price}
                                cancelled_text={'$25.00'}
                                puppy_price={this.state.puppy_registrations_price}
                                dog_price={this.state.dog_registrations_price}

                                />
                        </div>





                        <div className="col-md-3 register-card">
                            <RegisterCard image_src={puppy} title='Puppy Registation'
                                className='puppies'
                                text1='Register your puppy with us'
                                text2='Age: less than 12 months old'
                                cancelled_text={'$30.00'}

                                text_price={` $${this.props.puppy_registrations_price}.00`}
                                url='/dog_registrations'
                            />
                        </div>

                        <div className="col-md-3 register-card">

                            <RegisterCard image_src={dog} title='Dog Registration'
                                className='puppies'
                                text1='Register an adult dog with us'
                                text2='Age: above 12 months old'
                                cancelled_text={'$35.00'}

                                text_price={` $${this.props.dog_registrations_price}.00`}
                                url='/adult_registrations' />
                        </div>




                    </div>
                </div>



            </div>

        )
    }

}

export default Registration;