import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center' style={{ backgroundImage: props.image_src }}>

            <div className='container-fluid '>
                <div className='row align-items-center justify-content-center'>
                    <div>
                    <img src={props.image_src} height={props.height} width={props.width} className={props.className}></img>
                    <p className='register-card-p '>{props.text1}</p>
                    <p className='register-card-p text-primary'>{props.text2}</p>
                    <p className='register-card-p'>{props.text3}</p>
                    </div>
                  


                </div>

                <div className='row align-items-center justify-content-center '>
                    <Link to={props.url}>
                        <span className='register-card-register text-success'>Register</span>
                    </Link>
                </div>
            </div>






        </div>

    )
}



export default RegisterCard;