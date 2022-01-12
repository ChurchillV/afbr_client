import React from "react";
import Image from './image'
import logo1 from '../images/logo1.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar";
import '../css_files/about.css';

const About = () => {
    return (
        <div className='row about_body align-items-center justify-content-center'>
            <Navbar />
            <div className='row align-items-center justify-content-center about_main'>

                {/* <div className='row image_row' style={{ backgroundColor: 'blue' }}>
                    <img src={logo1} className="image_about"></img>
                </div> */}

                <div className="row align-items-center justify-content-center">
                    <div className='col-sm- about_text'>
                        <p>The African Bully Registry</p>
                        <p>This registry is an international register which enables breeders in Africa and overseas who breed American bullies,,<br/>
                            American bull dogs, American pitbull terriers, French bull dogs and all other "bully" breeds to come under one umbrella.</p>

                        <p> For many years breeders in Africa had to rely on other registry's outside the continent to register their dogs.</p>
                        <p>This comes with a lot of challenges.</p>

                        <p>This registry is created to bring and unite all passionate breeders and dog lovers together, especially in Africa..</p>

                        <p> To be able to achieve our goal of uniting and bringing the continent together, the African BULLY REGISTRY intends <br/>to put together series of shows
                            both conformation and assement tests for pure breeds without documents and<br/> other breed worthy events in various countries across Africa‼️</p>

                    </div>
                </div>


            </div>

            <div className='row align-items-center justify-content-center' style={{ backgroundColor: 'white', color: 'black' }}>
                <div className='col-sm-'>

                </div>
            </div>

        </div>
    )
}

export default About;