import React, { useState, useEffect } from "react";
import Navbar from "./navbar";

import litter_file from '../images/LITTER_REGISTRATION_FORM.pdf'
import { Link, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';

import '../css_files/registration.css'
import { url } from "./weburl";
import { PedShareForm } from "./pedshareus";
import { withRouter } from "./dog_registrations";
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'
import CountryContext from "./country_context";




class LitterRegistration extends React.Component
{
    static contextType = CountryContext

    constructor(props)
    {
        super(props)
        this.state = {
        }
    }

    componentDidMount = () =>
    {
    }

    render()
    {
        return (
            <div className="dog_reg_full view_height_100">
                <div className="container  ">
                    <div className="row justify-content-center align-items-center">
                        <Navbar color='white' navbar_dark='navbar-dark' />
                    </div>
                    {this.context.user && this.context.user_sql_details &&
                        this.context.user_sql_details.phone_number &&

                        <div>
                            <div className="row align-items-center justify-content-center  my-3">
                                <p>Please follow the following three steps
                                    to complete litter registration with us
                                </p>
                            </div>
                            <div className="row align-items-center justify-content-center  my-3">
                                <div className="col-sm-6">

                                    <a href={litter_file} className="text-white" download>1. Download
                                        the litter registration form here</a>

                                    <img src='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/iztl3avchjiannfl0yim.png'
                                        width={'10%'} />



                                </div>

                            </div>

                            <div className="row align-items-center justify-content-center  my-3">
                                2. Fill the form at your convenience
                            </div>
                            <div className="row justify-content-center align-items-center my-3">
                                <div className="col-sm-6">
                                    <p>3. Submit the Form to us</p>

                                    <PedShareForm label='Upload Filled Document Here' litter_registrations={true}
                                        price={this.props.params.price} />

                                </div>

                            </div>

                        </div>
                    }
                    {this.context.user && this.context.user_sql_details &&
                        !this.context.user_sql_details.phone_number && <div className="container">

                            <div className="row align-items-center justify-content-center  view_height_100">

                                <div className="col-sm-6 mx-3 mx-sm-0 text-center text-md-left">

                                    <h3 className="text-warning">Please supply your phone number before proceeding.</h3>
                                    <p>Phone numbers allow us to reach out to you after a dog has
                                        been registered.
                                    </p>
                                    <p>
                                        Kindly use the link below to visit your attach your
                                        phone number to your details.
                                    </p>
                                    <Link className="text-success font-weight-bold" to="/profile/personal">Go to Profile</Link>

                                </div>
                            </div>
                        </div>}

                </div>



                {!this.context.user &&
                    <div className="container">

                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-6 view_height_100 mx-5 mx-sm-0">
                                <BeatLoader loading size={30} color={'white'} />

                                <p>Getting ready, please make sure you are
                                    <span className="text-warning"> logged in/signed up</span></p>

                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }

}

export default withRouter(LitterRegistration);