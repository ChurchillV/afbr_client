import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "./navbar";
import RegisterCard from "./registercard";
import litter from "../images/litter1.jpeg";
import puppy from "../images/puppy3.jpeg";
import dog from "../images/adult1.jpeg";
import { Link } from "react-router-dom";

import "../css_files/registration.css";
import "../css_files/extras.css";

class RegistrationInternational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dpo: "",
      loaded: false,
      location: "",
      price: "",
      litter_registrations_price: "",
      puppy_registrations_price: "",
      dog_registrations_price: "",
    };
  }

  componentDidMount = () => {
    // this.getcurrentuserLocation()
  };
  render() {
    return (
      <div className="">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <Navbar />
          </div>
        </div>
        <div className="d9d9d9_international">
          <div className="container">
            <div className="container">
              <div className="row py-4">
                <div className="col-sm-6 border_right_yellow">
                  <Link class="font-weight-bold text-uppercase " to="/registration/domestic">
                    DOMESTIC (GHANAIAN)
                  </Link>
                </div>
                <div className="col-sm-6">
                  <Link class="font-weight-bold text-uppercase text-warning" to="/registration/international">
                    INTERNATIONAL
                  </Link>
                </div>
              </div>
              {/* <div className="row align-items-center justify-content-center pt-1 ">
                <div
                  className="col-sm-10  py-1 my-5 my-sm-0 text-capitalize 
                                 text-left"
                >
                  <p>Register your dog with us</p>
                </div>
              </div> */}
              <div className="row text-left  align-items-center justify-content-center mb-5 ">
                <div className="col-md-10 register-card my-2 box_shadow">
                  <RegisterCard
                    image_src={litter}
                    title="Litter Registration"
                    className="puppies "
                    text1="Register a collection of puppies with us"
                    text_price={` $25.00`}
                    url="/litter_registrations/25"
                  />
                </div>
              </div>

              <div className="row align-items-center justify-content-center mb-5 ">
                <div className="col-md-10 register-card box_shadow">
                  <RegisterCard
                    image_src={puppy}
                    title="Puppy Registration"
                    className="puppies"
                    text1="Register your puppy with us"
                    text2="Age: less than 12 months old"
                    // cancelled_text={'$30.00'}

                    text_price={` $30.00`}
                    url="/dog_registrations/30"
                  />
                </div>
              </div>

              <div className="row align-items-center justify-content-center mb-5 ">
                <div className="col-md-10 register-card box_shadow">
                  <RegisterCard
                    image_src={dog}
                    title="Adult Registration"
                    className="puppies"
                    text1="Register an adult dog with us"
                    text2="Age: above 12 months old"
                    // cancelled_text={'$35.00'}

                    text_price={` $40.00`}
                    url="/adult_registrations/40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationInternational;
