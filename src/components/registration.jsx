import React from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/dog12.jpeg'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import '../css_files/registration.css';


const Registration = () => {
    return (
        <div className='row align-items-center justify-content-center'>
            <Navbar />
            <RegisterCard image_src={puppies} text1='Litter Registations' className='puppies'
                text2='$20.00'
                url='/litter_registrations' />
            <RegisterCard image_src={dog} text1='Dog Registations'
            className='puppies'
                text2='$20.00'
                url='/dog_registrations' />
            <RegisterCard image_src={adult}
            className='puppies'
                text1='Adult Registations'
                text2='$30.00' url='/adult_registrations' />
        </div>
    )
}

export default Registration;