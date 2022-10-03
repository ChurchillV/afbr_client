import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center border_right_yellow' >


            <div class="col-sm-4 align-items-center align-items-sm-start justify-content-center text-left">

                <img class={props.className} src={props.image_src} alt="Card image cap"></img>

            </div>


            <div className='col-sm-6 align-items-center align-items-sm-start justify-content-center text-left'>
                <div class="border-yellow  mt-4 mt-sm-0 mb-4 mb-sm-2">
                    <h5 class=" text-black   text-uppercase ">{props.title}</h5>
                </div>
                <p class="m-0" style={{ fontSize: '1rem' }}>{props.text1}</p>

                <p class="m-0" style={{ fontSize: '1rem' }}>{props.text2}</p>

                {props.text_price && <p class="my-3">Price : 
                    <span className=' text-success '>{props.text_price}</span></p>}
                {props.text_price2 && <p class="text-small my-3">{props.text_price2}</p>}


            </div>
            <div class="col-sm-2 align-items-center align-items-sm-start 
            justify-content-center text-center text-sm-left py-3">
                <a href="#" class="card-link">{props.link1}</a>
                <a href={props.url} class="text-success  text-uppercase font-weight-bold">Register</a>
            </div>

        </div>









    )
}



export default RegisterCard;