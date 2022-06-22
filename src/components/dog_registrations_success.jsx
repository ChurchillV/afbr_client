import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './navbar'
import '../css_files/registration_success.css'
import logo from '../images/logo22.png'
import thumbs from '../images/thumbs3.png'





export const Register_Success = () => {

    const params = useParams()
    let dog_name = params.dog_name
    let username = params.username
    let email = params.email
    const [dog, setDog] = useState({})
    const [user, setUser] = useState({})



    const navigate = useNavigate()

    useEffect(() => {

        setHasBeenPaidFor()
    }, [])

    const setHasBeenPaidFor = () => {
        axios
            .post(`${url}api/dogs/has_paid`, {
                dog: {
                    name: dog_name
                }
            })
            .then((res) => {
                console.log(res)
                sendDogRegEmail()
            }
            )
            .catch((err) => console.log(err))

    }
    const sendDogRegEmail = () => {
        axios
            .post(`${url}api/email/dog_registered`, {
                user: {
                    displayName: username,
                    email: email
                },
                dog: {
                    name: dog_name
                }
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }




    const okay = (e) => {
        e.preventDefault()
        navigate('/profile')

    }

    const dogDetails = () => {

        return Object.keys(dog).map((key) =>
            <p className='text-capitalize'>{key}: {dog[key]}</p>
        )
    }


    return <div className='container-fluid'>
        <Navbar />
        <div className='container-fluid w-100 registration_success_full bg-d9'>


            <div className='row align-items-center justify-content-center p1 py-5 mt-5'>
                <div className='col-sm-6'>
                    <h2 className='text-capitalize text-white'>Congratulations <span className='text-uppercase font-weight-bold'>{username}</span> , you have
                        successfully registered <span className='font-weight-bold text-uppercase'>{dog_name}</span> with the AFBR</h2>

                    <p className='text-white'><span className='font-weight-bold text-uppercase'>{dog_name}</span> should appear under your profile within 6 hours of registration</p>

                </div>
                <div className='col-sm-3'>
                    <img class='profile_img_sire' src={logo}
                    >
                    </img>


                </div>

            </div>
            
            <div className='row align-items-center justify-content-center '>
                <div className='col-sm-4'>

                    <h3 className='font-weight-light'>Click on the Thumbs Up to complete the process</h3>


                </div>
                <div className='col-sm-2'>
                <img class='' onClick={(e) => okay(e)} src={thumbs}
                    >
                    </img>


                </div>

            </div>

        </div>
    </div>
}