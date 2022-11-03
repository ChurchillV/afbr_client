import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { url } from './weburl'
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from './navbar'
import '../css_files/registration_success.css'
import { useLocation } from 'react-router';
import CountryContext from './country_context';


export const Litter_Register_Success = () =>
{
    const user_context = useContext(CountryContext)
    const params = useParams();
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");
    const [moneyPaid, setMoneyPaid] = useState(false);
    let user_ = JSON.parse(localStorage.getItem('user'))
    let public_id_ = JSON.parse(localStorage.getItem('public_id'))
    const navigate = useNavigate()

    useEffect(() =>
    {
        checkIfPaid();
        
    }, []);


    const checkIfPaid = () =>
    {

        console.log('checking if paid')
        axios
            .post(`${url}api/expresspaygh/get_transaction_status`, { token: token })
            .then((res) =>
            {
                // alert(res.data)
                console.log(res.data)
                if (res.data.result == 1)
                {
                    setMoneyPaid(true)
                    sendLitRegEmail(user_, public_id_)


                }
            })
            .catch((err) => console.log(err));
    };
    const sendLitRegEmail = (user, public_id) =>
    {
        axios
            .post(`${url}api/email/litter`, {
                user: user,
                public_id: public_id

            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }



    const okay = () =>
    {
        navigate('/profile')
    }

    // const dogDetails = () =>
    // {

    //     return Object.keys(dog).map((key) =>
    //         <p className='text-capitalize'>{key}: {dog[key]}</p>
    //     )
    // }


    return <div className='container-fluid'>
        <Navbar />
        <div className='container-fluid w-100 registration_success_full '>

            {moneyPaid ? (
                <div className='view_height_100'>

                    <div className='row align-items-center justify-content-center p1 py-5 my-5'>
                        <div className='col-sm-3 py-5 my-5'>
                            <p className='text-capitalize text-white py-5'>Hello
                             <span className='text-warning font-weight-bold'>&nbsp;{user_context && user_context.user_sql_details && user_context.user_sql_details.username}&nbsp;,</span>
                              you have
                                successfully registered completed a litter registration form</p>
                            <p className='text-capitalize text-white py-5'>Click Okay to Complete Process</p>
                            <button className='btn btn-outline-warning w-100 ok' onClick={okay}>OK</button>
                        </div>




                    </div>
                </div>
            ) : (
                <div className="container ">
                    <div className="row align-items-center justify-content-center">

                        <div className="col-sm-6 py-5">
                            {user_context && user_context.user_sql_details && <p>Pending payment,
                                {user_context.user_sql_details.username}</p>}
                            <p>This message usually appears because mobile money was selected
                                as a payment method.
                                <hr /> Please be rest assurred that
                                once the payment has been completed and approved
                                your registration will be 100% approved.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
}