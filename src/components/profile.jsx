import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Navbar from './navbar';
import { auth, db, Logout } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import $ from 'jquery'
import axios from 'axios'
import { url } from './weburl';
import CountryContext from './country_context';



const dogcard_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = dogcard_style

class Profile extends Component {
    static contextType = CountryContext

    constructor(props) {
        super(props)
        this.state = {
            profile_incomplete: true
        }
    }

    componentDidMount() {
        this.getcurrentuser()
        this.profile_incomplete()

        if (window.screen.width < 660) {
            // console.log('hide the following')
            $('.to_be_hidden_profile').css('display', 'none')
            $('to_be_hidden_profile').on(
                    'click', function(){
                    $('to_be_hidden_profile').slideToggle()
                }
            )
        }

    }
    changeUserToId = () => {
        axios
            .get(`${url}api/users/getUserByUid/${this.state.firebaseUser.uid}`)
            .then((res) => {
                console.log('fetching...', this.state.firebaseUser.uid)
                console.log(res.data)
                this.setState({
                    ...this.state,
                    user: res.data[0]
                },
                    () => {
                        // console.log('chaingn personal state after calling uid', this.state)

                    })
            })

            .catch((err) => {
                console.log(err)
            })
    }


    getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    // console.log('on Authstate profile', this.state.firebaseUser)
                    this.changeUserToId()

                });

            } else {
                this.setState({ user: null });
                // console.log('displatyin data from profile')

            }

            if (this.state.loading) {
                this.setState({ loading: false });
            }
        });
    }

    profile_incomplete = () => {
        for (var detail in this.context.user_sql_details) {
            if (!this.context.user_sql_details[detail] && detail in ['username', 
        "email", "contact_address", "phone_number"]) {
                console.log('false')
                // console.log(detail)
                this.setState({ profile_incomplete: true })
            }
        }

    }
    render() {
        return (

            <div className='container-fluid'>
                <Navbar color={this.props.navbarcolor} />
                <div className={`${this.props.classname_} row ${this.props.class} align-items-center justify-content-center`}>
                    <div className='col-sm-2 align-self-start pro_nav_col to_be_hidden_profile'>
                        <div className='text-dark align-items-center justify-content-center pro_nav'>

                        {this.context.user_sql_details && this.context.user_sql_details.public_id ? <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.context.user_sql_details.public_id}.png`} 
                            className='img-fluid profile_pic_user2'></img> : <img src={Profile_pic} className='img-fluid profile_pic_user'></img>}
                            
                            <h6 style={{ color: 'rgb(186, 129, 8' }}>Welcome, <span className='font-weight-bold'>{this.context.user_sql_details ? this.context.user_sql_details.username : null}</span></h6>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/Home' style={{ color: this.props.navbarcolor }}>Home</Link>
                        </div>
                        {/* <div className='row align-items-center justify-content-center pro_nav'>
                           {this.state.firebaseUser ? <Link to={`/profile/personal/${this.state.firebaseUser.uid}`}  style={{color:this.props.navbarcolor}}>Personal</Link> :  <Link to='/profile/personal/'>Personal</Link> }
                        </div> */}
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link style={{ color: this.props.navbarcolor }} to='/my_dogs'>My dogs</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link style={{ color: this.props.navbarcolor }} to='/registration'>Register</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            {this.state.profile_incomplete ?
                                <Link class=' text-warning' style={{ color: this.props.navbarcolor }} 
                                to={`/profile/personal`} >
                                    Personal</Link>
                                :
                                <Link style={{ color: this.props.navbarcolor }} 
                                to={`/profile/personal`}>Personal
                                   </Link>

                            }
                        </div>

                        <div className='row align-items-center justify-content-center pro_nav'>

                            <Link style={{ color: this.props.navbarcolor }} to='/profile/csandps'>Certificates and Pedigrees</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <button style={{ color: this.props.navbarcolor }} className='btn btn-outline-warning' onClick={Logout}>Log Out</button>
                        </div>
                    </div>
                    <div className='col-sm-10 align-items-center justify-content-center profile_main'>


                        {this.props.children}



                    </div>

                </div>


            </div>
        )
    }



}



export default Profile;