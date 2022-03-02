import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Navbar from './navbar';
import { auth, db, logout } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const dogcard_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = dogcard_style

class Profile extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.getcurrentuser()
    }

    getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    console.log('on Authstate profile', this.state.firebaseUser)

                });

            } else {
                this.setState({ user: null });
                console.log('displatyin data from profile')

            }

            if (this.state.loading) {
                this.setState({ loading: false });
            }
        });
    }

    render() {
        return (

            <div className='container-fluid'>
                <Navbar color='black'/>
                <div className={`${this.props.classname_} row profile align-items-center justify-content-center`}>
                    <div className='col-sm-2 align-self-start pro_nav_col'>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <img src={Profile_pic} height={'100px'} width={'100px'}></img>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/Home'>Home</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                           {this.state.firebaseUser ? <Link to={`/profile/personal/${this.state.firebaseUser.uid}`}>Personal</Link> :  <Link to='/profile/personal/'>Personal</Link> }
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/my_dogs'>My dogs</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/registration'>Register</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/profile/csandps'>Certificates and Pedigrees</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <button className='btn btn-default' onClick={logout}>Log Out</button>
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