import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from '../images/litter1.jpeg'
import puppy from '../images/doga4.jpeg'
import dog from '../images/doga3.jpeg'
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
        this.getcurrentuserLocation()
    }


    getPrices = () => {
        if (this.state.location === 'Ghana'){

            //local
            this.setState({litter_registrations_price : '$20.00'})
            this.setState({puppy_registrations_price : '$30.00'})
            this.setState({dog_registrations_price : '$35.00'})

        }
        else{
                     //international prices
            this.setState({litter_registrations_price : '$25.00'})
            this.setState({puppy_registrations_price : '$35.00'})
            this.setState({dog_registrations_price : '$40.00'})

        }
    }
    getcurrentuserLocation = () => {
        axios.get('https://ipapi.co/json/') 
        
        .then((res)=> {
            console.log(res.data)
            this.setState({location: res.data.country_name},
                 ()=>this.getPrices())
        })
        .then((err)=> console.log(err))
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
                                text_price={`Price: ${this.state.litter_registrations_price}`}
                                // text_price2={`International: ${this.litter_registrations_price}`}
                                url='/litter_registrations'
                                litter_price={this.state.litter_registrations_price}
                                puppy_price={this.state.puppy_registrations_price}
                                dog_price={this.state.dog_registrations_price}

                                />
                        </div>





                        <div className="col-md-3 register-card">
                            <RegisterCard image_src={puppy} title='Puppy Registation'
                                className='puppies'
                                text1='Register your puppy with us'
                                text2='Age: less than 12 months old'
                                text_price={`Price: ${this.state.puppy_registrations_price}`}
                                url='/dog_registrations'
                            />
                        </div>

                        <div className="col-md-3 register-card">

                            <RegisterCard image_src={dog} title='Dog Registration'
                                className='puppies'
                                text1='Register an adult dog with us'
                                text2='Age: above 12 months old'
                                text_price={`Price: ${this.state.dog_registrations_price}`}
                                url='/adult_registrations' />
                        </div>




                    </div>
                </div>



            </div>

        )
    }

}

export default Registration;