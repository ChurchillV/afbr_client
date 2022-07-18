import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar";
import '../css_files/about.css';
import Footer from "./footer";

const About = () => {
    return (
        <div className="container border_left_yellow   my-5 py-3 ">
            <div className='row mb-3 align-items-center justify-content-center '>
                <div className="bg-white col-lg-7 text-uppercase font-weight-normal text-left">
                    <h5>What is the African Bully Registry?</h5> 
                </div>


            </div>


            <div className="row  align-items-center justify-content-center text-left">
                <div className=' bg-white col-lg-7'>


                    <p>This registry is an international registry which enables breeders in Africa and overseas who breed American bullies,
                        American bull dogs, American pitbull terriers, French bull dogs and all other "bully" breeds to come under one umbrella.</p>

                    <p>This registry is created to bring and unite all passionate breeders and dog lovers together, especially in Africa..</p>


                    <p> For many years breeders in Africa had to rely on other registry's outside the continent to register their dogs.</p>
                    <p>This comes with a lot of challenges.</p>

                    <p> To be able to achieve our goal of uniting and bringing the continent together, the African BULLY REGISTRY intends to put together series of shows
                        both conformation and assement tests for pure breeds without documents andother breed worthy events in various countries across Africa‼️</p>
                </div>


            </div>






        </div>



    )
}

export default About;