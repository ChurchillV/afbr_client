import React from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from '../images/doga2.jpg'
import puppy from '../images/doga4.jpeg'
import dog from '../images/doga3.jpeg'
import '../css_files/registration.css';


const Registration = () => {
    return (
        <div className="container-fluid registration_full">
            <div className='row align-items-center justify-content-center'>
                <div className="col-lg-">
                    <Navbar />

                </div>

            </div>
            <div className='row align-items-center justify-content-center py-5 registration_text'>
            <div className='row align-items-center justify-content-center py-5'>
                    <div className='col-lg- registration_title py-2'>
                        <h1>Register your dog with the African Bully Registry</h1>
                    </div>

                </div>
            <div className='row text-left  align-items-center justify-content-center'>


                <div className="col-md-3 register-card my-2 ">
                    <RegisterCard image_src={litter} title='Litter Registation'
                        className='puppies'
                        text1='Domestic: $20.00'
                        text2='International: $25.00'
                        url='/litter_registrations' />
                </div>
                <div className="col-md-3 register-card">
                    <RegisterCard image_src={puppy} title='Puppy Registation'
                        className='puppies'
                        text1='Domestic: $20.00'
                        text2='International: $25.00'
                        url='/dog_registrations' />
                </div >

                <div className="col-md-3 register-card">

                    <RegisterCard image_src={dog} title='Dog Registration'
                        className='puppies'
                        text1='Domestic: $35.00'
                        text2='International: $40.00'
                         url='/adult_registrations' />
                </div>

            </div>
            </div>



        </div>

    )
}

export default Registration;