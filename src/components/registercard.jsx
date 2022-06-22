import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center ' >

            <div className='container-fluid '>



            </div>

            <div className='container-fluid'>
                <div class="card w-100 ">
                    <img class="card-img-top" src={props.image_src} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title text-black">{props.title}</h5>
                            <p class="card-text">{props.subtitle}</p>
                        </div>
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item text-small  " style={{fontSize: '1rem'}}>{props.text1}</li>
                            
                            <li class="list-group-item text-small " style={{fontSize: '1rem'}}>{props.text2}</li>
                            {/* {props.text2 && <li class="list-group-item text-small">{props.text3}</li> }
                            {props.text4  &&<li class="list-group-item text-small">{props.text4}</li> }
                             */}
                            {props.text_price &&   <li class="list-group-item text-small">Price : <strike><span className='text-small text-primary'>{props.cancelled_text} </span></strike> &nbsp;
                            <span className='font-weight-bold text-warning'>{props.text_price}</span></li> }
                            {props.text_price2 &&  <li class="list-group-item text-small">{props.text_price2}</li> }


                        </ul>
                        <div class="card-body bg-grad-g-y">
                            <a href="#" class="card-link">{props.link1}</a>
                            <a href={props.url} class="card-link text-black font-weight-bold text-uppercase">Register</a>
                        </div>
                </div>


            </div>






        </div>

    )
}



export default RegisterCard;