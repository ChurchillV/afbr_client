import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import { withRouter } from "./ProfileDog";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './weburl';
import axios from "axios";
import Profile_pic from '../images/profile.jpg'
import CountryContext from "./country_context";
import '../css_files/personal.css'

class Personal extends React.Component {
    static contextType = CountryContext
    constructor(props) {
        super(props);
        this.state = {
            dogs: [

            ],
            user: ''
        };
    }

    componentDidMount = () => {
        // console.log('logging user sql details', this.context.user_sql_details)
        // this.changeUserToId()

    }

    render() {
        return (
            <div className="container-fluid nice_font1">
                <Profile class='profile_first'>

                    <div className='row align-items-start justify-content-start text-dark personal_nav mt-2 mt-sm-0'>
                        <div className='col-sm-'>
                            <small className='text-dark '>Dogs Registered: <span className='font-weight-bold'>0</span> &nbsp;&nbsp;&nbsp;</small>
                        </div>
                        <div className='col-sm-'>
                            <small className='text-dark '>Posts: <span className='font-weight-bold'>0</span>&nbsp;&nbsp;&nbsp;</small>
                        </div>

                        <div className='col-sm-'>
                            <small className='text-dark'>Followers: <span className='font-weight-bold'>0</span></small>
                        </div>

                    </div>
                    <div className=' text-dark row align-items-end justify-content-center my-5 mt-0 text-left'>

                        <div className="col-md-4 smallrem">
                            {this.context.user_sql_details && this.context.user_sql_details.public_id ? <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.context.user_sql_details.public_id}.png`} 
                            className='img-fluid profile_pic_user2'></img> : <img src={Profile_pic} className='img-fluid profile_pic_user'></img>}
                            {/* {this.context.user_sql_details && !this.context.user_sql_details.uid  && <img src={Profile_pic} className='img-fluid profile_pic_user'></img>} */}


                        </div>
                        {
                            this.context.user_sql_details &&
                            <div className="col-md-5 smallrem text-left w-100 mt-5 mt-sm-0">
                                <p className="text-left">Username: &nbsp; &nbsp;<span className="font-weight-bold">{this.context.user_sql_details.username}</span></p>
                                <p className="">Email:  &nbsp; &nbsp;<span className="font-weight-bold">{this.context.user_sql_details.email}</span></p>
                                <p className="">Phone Number:  &nbsp; &nbsp;<span className="font-weight-bold">{this.context.user_sql_details.phone_number}</span></p>
                                {/* <p className="">Country:  &nbsp; &nbsp;<span className="font-weight-bold">{this.context.user_sql_details.country}</span></p> */}

                                <p className="">Contact Address:  &nbsp; &nbsp;<span className="font-weight-bold">{this.context.user_sql_details.contact_address}</span></p>

                            </div>
                        }
                        {/* <div className="col-md-2 smallrem btn btn-secondary mb-3 text-white w-100">
                        <Link className="text-white" to={`/profile/personal/edit`}>Edit Details</Link>


                        </div> */}
                       
                    </div>
                </Profile>
            </div>
        )
    }

}

export default withRouter(Personal)

