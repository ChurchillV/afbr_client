import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dogpic from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile from './profile';
import axios from 'axios';
import { set } from 'mongoose';
import { setState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './weburl';
import { Search } from './search';




class ProfileMain extends Component {

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
                this.setState({ dogs: res.data }, () => (console.log(this.state)))
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
                    <DogCard image_src={dogpic}
                        dogname={dog.name} />
                </Link>
            </div>
        ))
    }




    searchClick = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <Profile>
                    {/* <div className='row align-items-center justify-content-center' >
                        <Search name='profile_search' onClick={this.props.searchClick} />

                    </div> */}


                    <div className='row align-items-center justify-content-center' style={{ padding: '1%' }}>


                        {this.render_dog_list()}
                        {console.log('hey')}
                    </div>

                </Profile>
            </div>


        )

    }



}



export default ProfileMain;