import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center ' >

            <div className='container-fluid '>
                


            </div>

            <div className='container-fluid '>
                <div className='row align-items-center justify-content-center py-5'>
                    <div className='col-lg-5'>
                        <img src={props.image_src} className={props.className}></img>
                    </div>

                    <div className='col-lg-7 register_card_col'>
                        <p className='register-card-p '>{props.text1}</p>
                        <p className='register-card-p'>{props.text2}</p>
                        <p className='register-card-p'>{props.text3}</p>

                        <Link to={props.url}>
                            <span className='register-card-register '><h1>Register</h1></span>
                        </Link>
                    </div>

                </div>


            </div>






        </div>

    )
}



export default RegisterCard;