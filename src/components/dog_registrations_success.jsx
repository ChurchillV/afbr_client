import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate } from 'react-router-dom'


export const Register_Success = () => {

    const [ dog, setDog ] = useState({})
    const [ user, setUser ] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.getItem('dog')
        console.log(localStorage.dog)

        setDog(JSON.parse(localStorage.getItem('dog')))
        setUser(JSON.parse(localStorage.getItem('user')))

        console.log(localStorage.user)
    }, [])
    

    const sendDogInfo = () => {
        console.log('calling sendDogInfo')
         axios
            .post(`${url}api/dogs`, {dog:dog, user:user})
            .then((res) => {

                console.log(res.data.message);
                console.log('dog created/editted in congrats page')

                localStorage.clear()
                navigate('/profile')

            })


            .catch((err) => {
                console.log("Error couldn't create Dog");
                console.log(err.message);
            });
    }

    const dogDetails = () => {
      
        return Object.keys(dog).map((key)=>
            <p className='text-capitalize'>{key}: {dog[key]}</p>
            )
    }


    return <div className='container'>
        <h1>Dog successfully created</h1>
        {dogDetails()}

        <h1>Click Okay to Complete PRocess</h1>
        <button className='btn btn-success' onClick={sendDogInfo}>OK</button>
    </div>
}