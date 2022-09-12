import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dogpic from '../images/logo1.jpg'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile from './profile';
import axios from 'axios';
import { set } from 'mongoose';
import { setState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './weburl';
import Search from './search';

import $ from 'jquery'
import { ProfileFooter } from './profile_footer';
import { BeatLoader } from 'react-spinners';
import CountryContext from './country_context';
import { Profile_Not_Logged_In } from './profile_not_logged_in';
import Footer from './footer';


class ProfileMain extends Component {
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
        this.getcurrentuser(this.refreshList
        )


        if (window.screen.width < 660) {
            console.log('hide the following')
            $('.bottom_profile').css('display', 'visible')

        }

    }

    getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    console.log('on Authstate dog reg', this.state.firebaseUser)
                    this.changeUserToId(callback)

                });

            } else {
                this.setState({ user: null });
                console.log('usershmm')

            }

            if (this.state.loading) {
                this.setState({ loading: false });
            }
        });
    }


    changeUserToId = (callback) => {
        axios
            .get(`${url}api/users/getUserByUid/${this.state.firebaseUser.uid}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    user: res.data[0].id
                },
                    () => {
                        callback()
                        console.log('chaingn profile main state after calling uid', this.state.user)

                    })
            })

            .catch((err) => {
                console.log(err)
            })
    }
    refreshList = () => {


        axios
            .get(`${url}api/dogs/getdoguser/${this.state.user}`)
            .then((res) => {
                this.setState({ dogs: res.data }, () => ('b' * 10, console.log(this.state)))
            }
            )

            .catch((err) => {
                console.log("Error couldnt get Dog");
                console.log(err.message);
            });




    };

    render_dog_list = () => {

        return this.state.dogs.map((dog) => (
            <div className='col-md-6 text-capitalize render_card'>
                <Link to={`/my_dogs/${dog.id}`}>
                    <DogCard image_src={dogpic} dog_id={dog.id}
                        dogname={dog.name} dog_public_id={dog.public_id} />
                </Link>
            </div>
        ))
    }




    onSearchClick = (e) => {
        e.preventDefault()

    }


    render() {
        return (
            <div>
                {this.context.user ?
                    <div>
                        <Profile class='profile_first' navbarcolor='black'>
                            <div className='row align-items-center justify-content-center' >
                                <div className='col-sm-12'>
                                    <Search name='profile_search' send_to={true} onSearchClick={this.onSearchClick} />

                                </div>

                            </div>
                            {/* <div className='row align-items-center justify-content-center'>
                                <div className='col-sm-'>
                                    <p><small className='text-dark'> Please complete your profile details for us</small></p>
                                </div>
                            </div> */}

                            <div className='row align-items-center justify-content-center' style={{ padding: '1%' }}>
                                {/* check on this later , add a load spinner */}
                                {/* {!this.state.dogs[0] && <BeatLoader size='large' color='black' />} */}
                                {this.render_dog_list()}
                                {console.log('hey')}
                                {!this.state.dogs[0] &&
                                    <div className='nice_font my-5 py-5 text-left mx-5'>
                                        <h3 className='text-dark'>You have no registered dogs yet.</h3>
                                        <p className='m-0 text-dark '>&#128517;Like to
                                            <Link class="text-warning" to="/registration"> register </Link>
                                             one with us?</p>
                                        {/* <small className='text-warning mt-5' style={{fontSize: "1rem"}}>Please reach out to our support team if this is a mistake.</small> */}
                                    </div>}
                            </div>

                        </Profile>
                        {/* profile at the bottom for mobile view */}
                        {window.screen.width < 660 && <ProfileFooter navbarcolor='white' />}
                    </div>
                    : <Profile_Not_Logged_In />
                }
            </div>


        )

    }



}



export default ProfileMain;