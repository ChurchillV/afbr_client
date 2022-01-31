import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center' style={{ backgroundImage: props.image_src }}>

            <div className='container-fluid '>
                <div className='row align-items-center justify-content-center'>

                    <img src={props.image_src} height={props.height} width={props.width} className={props.className}></img>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <p>{props.text3}</p>


                </div>

                <div className=' align-items-center justify-content-center'>
                    <Link to={props.url}>
                        Register
                    </Link>
                </div>
            </div>






        </div>

    )
}



export default RegisterCard;