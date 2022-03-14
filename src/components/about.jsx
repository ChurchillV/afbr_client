import React from "react";
import Image from './image'
import pic1 from '../images/dog12.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./navbar";
import '../css_files/about.css';

const About = () => {
    return (
        <div className='row about_body align-items-center justify-content-center'>
            <Navbar />
            <div className="container">
                <div className='row align-items-center justify-content-center '>
                    <div className="container">
                        <div className="row align-items-center justify-content-center pic_row_about">
                            <div className="col-lg- about_heading text-capitalize">
                                About us
                            </div>
                        </div>
                    </div>




                    <div className="row align-items-center about_text_main justify-content-center text-left">
                        <div className='col-lg- about_text align-items-center justify-content-center'>


                            <p className=" text-uppercase afbr_heading">The African Bully Registry</p>
                            <p>This registry is an international register which enables breeders in Africa and overseas who breed American bullies,,<br />
                                American bull dogs, American pitbull terriers, French bull dogs and all other "bully" breeds to come under one umbrella.</p>

                            <p>This registry is created to bring and unite all passionate breeders and dog lovers together, especially in Africa..</p>

                        </div>

                        <div className="about_text text-left">
                            <p> For many years breeders in Africa had to rely on other registry's outside the continent to register their dogs.</p>
                            <p>This comes with a lot of challenges.</p>

                            <p> To be able to achieve our goal of uniting and bringing the continent together, the African BULLY REGISTRY intends <br />to put together series of shows
                                both conformation and assement tests for pure breeds without documents and<br /> other breed worthy events in various countries across Africa‼️</p>


                        </div>
                    </div>
                </div>






            </div>
            </div>

            )
}

            export default About;