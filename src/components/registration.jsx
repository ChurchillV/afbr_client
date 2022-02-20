import React from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/dog12.jpeg'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import '../css_files/registration.css';


const Registration = () => {
    return (
        <div className="container-fluid registration_full">
            <div className='row align-items-center justify-content-center'>
                <div className="col-lg-">
                    <Navbar />

                </div>

            </div>
            <div className='row align-items-center justify-content-center py-5'>
                    <div className='col-lg- registration_title py-2'>
                        <h1>Register your dog with the African Bully Registry</h1>
                    </div>

                </div>
            <div className='row align-items-center justify-content-center'>


                <div className="col-md-3 register-card">
                    <RegisterCard image_src={puppies} text1='Litter Registations'
                        className='puppies'
                        text2='$20.00'
                        url='/litter_registrations' />
                </div>
                <div className="col-md-3 register-card">
                    <RegisterCard image_src={dog} text1='Dog Registations'
                        className='puppies'
                        text2='$20.00'
                        url='/dog_registrations' />
                </div >

                <div className="col-md-3 register-card">

                    <RegisterCard image_src={adult}
                        className='puppies'
                        text1='Adult Registations'
                        text2='$30.00' url='/adult_registrations' />
                </div>

            </div>
        </div>

    )
}

export default Registration;