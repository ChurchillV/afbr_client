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
        this.getcurrentuser()
        sendLitRegEmail(localStorage.getItem('user'))
        
    }, [])

    const sendLitRegEmail = () => {
        axios
            .post(`${url}api/email/litter`, {
                user: user,
                
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                callback()
                

            } else {
                setUser(user)
            }

            if (loading) {
                setUser(user)
            }
        });
    }


    const okay = ()=>{
        sendLitRegEmail()
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
                    successfully registered completed a litter registration form</p>

                </div>

            </div>
            <div className='row align-items-center justify-content-center p2 my-3'>
                <div className='col-sm-6 my-5'>

                  
                </div>
                <div className='col-sm-6'>
                        {dogDetails()}

                    </div>


            </div>
            <div className='row align-items-center justify-content-center p3 '>
                <div className='col-sm-'>

                    <p>Click Okay to Complete PRocess</p>
                    <button className='btn btn-success w-100 ok' onClick={okay}>OK</button>


                </div>

            </div>

        </div>
    </div>
}