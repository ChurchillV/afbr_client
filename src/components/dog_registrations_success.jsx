import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate , useParams} from 'react-router-dom'
import Navbar from './navbar'
import '../css_files/registration_success.css'
import logo from '../images/logo2.jpg'



export const Register_Success = () => {

    const params = useParams()
    let dog_name = params.dog_name
    let username = params.username
    const [dog, setDog] = useState({})
    const [user, setUser] = useState({})

  

    const navigate = useNavigate()

    useEffect(() => {
       
        setHasBeenPaidFor()
    }, [])

    const setHasBeenPaidFor = () => {
        axios
        .post(`${url}api/dogs/has_paid`, {
            dog:{
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
    const sendDogRegEmail = ( ) => {
        axios
            .post(`${url}api/email/dog_registered`, {
                user:  {
                    displayName: username
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
        <div className='container-fluid w-100 registration_success_full'>


            <div className='row align-items-center justify-content-center p1 py-5'>
                <div className='col-lg-'>
                    <p className='text-capitalize text-white'>Hello {username}, you have 
                    successfully registered {dog_name}</p>

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
                    <button className='btn btn-success w-100 ok' onClick={(e)=> okay(e)}>OK</button>


                </div>

            </div>

        </div>
    </div>
}