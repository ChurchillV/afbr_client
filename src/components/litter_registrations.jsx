import React, { useState } from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/puppies.jfif'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import RegisterFormLitter from "./register_form_litter";
import '../css_files/registration.css'




const LitterRegistration = () => {
    const [dog, setDog] = useState({})
    const [image_urls, setImage_Urls] = useState()

    const test = 'test'
    const submit = () => {
        console.log('submit')
    }

    const handleChange = () => {
        console.log(test)
    }
    return (
        <div className="bgyellow">

            <div className="container bgyellow dog_reg_full">
                <div className="row justify-content-center align-items-center">
                    <Navbar color='white' />
                </div>

                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-9">
                        <RegisterFormLitter dog={dog}
                            image_urls={image_urls}

                            submit={submit} handleChange={handleChange}

                        />
                    </div>
                </div>
            </div>




        </div>
    )
}

export default LitterRegistration;