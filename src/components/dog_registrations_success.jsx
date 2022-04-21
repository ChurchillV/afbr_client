import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate } from 'react-router-dom'
import Navbar from './navbar'
import '../css_files/registration_success.css'
import logo from '../images/logo2.jpg'



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
        
        sendDogInfo()
    }, [])

    const sendDogRegEmail = () => {
        axios
            .post(`${url}api/email/dog_registered`, {
                user: user,
                dog: dog
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }


    const sendDogInfo = () => {
        console.log('calling sendDogInfo')
        axios
            .post(`${url}api/dogs`, { dog: dog, user: user })
            .then((res) => {

                sendDogRegEmail()
                console.log(res.data.message);
                console.log('dog created/editted in congrats page')

                localStorage.clear()

                

            })


            .catch((err) => {
                console.log("Error couldn't create Dog");
                console.log(err.message);
            });
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
        <div className='container-fluid w-100 registration_success_full'>


            <div className='row align-items-center justify-content-center p1 py-5'>
                <div className='col-lg-'>
                    <p className='text-capitalize text-white'>Hello {user.displayName}, you have 
                    successfully registered {dog.name}</p>

                </div>

            </div>
            <div className='row align-items-center justify-content-center p2 my-3'>
                <div className='col-sm-6 my-5'>

                    {dog.public_id ?
                        <img class='profile_img_sire'
                            src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${dog.public_id}.png`}></img>
                        :
                        <img class='profile_img_sire' src={logo}
                        >
                        </img>



                    }
                  
                </div>
                <div className='col-sm-6'>
                        {dogDetails()}

                    </div>


            </div>
            <div className='row align-items-center justify-content-center p3 '>
                <div className='col-sm-'>

                    <p>Click Okay to Complete PRocess</p>
                    <button className='btn btn-success w-100 ok' onClick={(e)=> okay}>OK</button>


                </div>

            </div>

        </div>
    </div>
}