import React from 'react';
import '../css_files/registration.css'
import { Link } from 'react-router-dom';

const RegisterCard = (props) => {
    return (
        <div className='row align-items-center justify-content-center ' >

            <div className='container-fluid '>



            </div>

            <div className='container-fluid'>
                <div class="card w-100">
                    <img class="card-img-top" src={props.image_src} alt="Card image cap"></img>
                        <div class="card-body">
                            <h5 class="card-title text-dark">{props.title}</h5>
                            <p class="card-text">{props.subtitle}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{props.text1}</li>
                            <li class="list-group-item">{props.text2}</li>
                            <li class="list-group-item">{props.text3}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">{props.link1}</a>
                            <a href={props.url} class="card-link">Register</a>
                        </div>
                </div>


            </div>






        </div>

    )
}



export default RegisterCard;