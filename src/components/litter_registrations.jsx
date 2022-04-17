import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import RegisterCard from "./registercard";
import puppies from '../images/puppies.jfif'
import dog from '../images/dog.jfif'
import adult from '../images/adult.jfif'
import RegisterFormLitter from "./register_form_litter";
import '../css_files/registration.css'
import axios from "axios";
import { url } from "./weburl";




const LitterRegistration = () => {
    const [dog, setDog] = useState({})
    const [image_urls, setImage_Urls] = useState()

    const test = 'test'

    useEffect(() => {
      getTransactUrl()
    }, [])
    const handleChange = () => {
        console.log(test)
    }

    const getTransactUrl = () => {
        
        axios.post(`${url}api/dpo/transact`, {transaction_name: 'Litter Registrations',
            transaction_cost: 0.02})
            .then((res) => {
                console.log(res.data)
                this.setState({ dpo: res.data, dpo_loaded: true }, () => {
                    console.log(this.state)
                })

            })

            .catch((err) => console.log(err))
    }

    const sendDogInfo = () => {

        localStorage.setItem("dog",

            JSON.stringify(this.state.dog)

        )

        localStorage.setItem("user",

            JSON.stringify(this.state.firebaseUser)

        )


        console.log('localstorage', localStorage.user)
        console.log('localstorage', localStorage.dog)




    }

    const submit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)




        this.sendDogInfo()
        window.open(this.state.dpo, '_blank')



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