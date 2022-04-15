import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import '../css_files/registration_success.css'



export const Register_Success = () => {

    const [dog, setDog] = useState({})
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem('dog')
        console.log(localStorage.dog)

        setDog(JSON.parse(localStorage.getItem('dog')))
        setUser(JSON.parse(localStorage.getItem('user')))

        console.log(localStorage.user)
    }, [])

    const sendDogRegEmail = () => {
        axios
            .post(`${url}api/email/dog_registered`, {
                user: this.state.firebaseUser,
                dog: this.state.dog
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    const sendDogInfo = () => {
        console.log('calling sendDogInfo')
        axios
            .post(`${url}api/dogs`, { dog: dog, user: user })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog created/editted in congrats page')

                localStorage.clear()
                navigate('/profile')

                sendDogRegEmail()

            })


            .catch((err) => {
                console.log("Error couldn't create Dog");
                console.log(err.message);
            });
    }

    const dogDetails = () => {

        return Object.keys(dog).map((key) =>
            <p className='text-capitalize'>{key}: {dog[key]}</p>
        )
    }


    return <div className='container'>
        <Navbar />
        <div className='registration_success_full'>

            <div className='row align-items-center justify-content-center py-5'>
                <div className='col-lg-'>
                    <h1 className='text-capitalize'>Dog successfully created</h1>

                </div>

            </div>
            <div className='row align-items-center justify-content-center'>
                <div className='col-lg-'>

                    {dogDetails()}

                </div>

            </div>
            <div className='row align-items-center justify-content-center py-5'>
                <div className='col-lg-'>

                    <p>Click Okay to Complete PRocess</p>
                    <button className='btn btn-success' onClick={sendDogInfo}>OK</button>


                </div>

            </div>

        </div>
    </div>
}