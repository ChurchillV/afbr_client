import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='register-card' style={{backgroundImage: props.image_src}}>
            

            <img src={props.image_src} height={props.height} width={props.width} className={props.className}></img>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            
            <Link to={props.url}>
            Register
            </Link>
            
           
        
        </div>
        
    )
}



export default RegisterCard;