
import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css_files/registration.css'
import { Image } from 'cloudinary-react'
import axios from 'axios'
import Search from './search'
import { BarLoader, BeatLoader } from 'react-spinners';
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'


// import "./Signup.css";

class RegisterForm extends Component {

    constructor(props) {
        super(props)
        console.log('this.prpos.sires', this.props)
        this.state = {
            imageSelected: ''
        }
        // console.log('this.prpos.dams', Object.values(this.props.dams))

    }

    option_list_dams = () => {
        return Object.values(this.props.dams).map((item) => {
            return <option name='dam' className='text-lowercase text-capitalize' value={item.id}>{item.name}</option>

        })
    }

    option_list_sires = () => {
        return Object.values(this.props.sires).map((item) => {
            return <option name='sire' className='text-lowercase text-capitalize' value={item.id}>{item.name}</option>

        })
    }


    render() {

        return (
            <form onSubmit={(e) => {
                this.props.submit(e)
            }}
                method='post' className='align-items-center justify-content-center FORM'>


                <div className='form-row'>
                    <div className='form-group'>
                        <label for="inputimage">Upload image &nbsp;</label>
                        <input type='file' name='image' onChange={this.props.handleImageChange} accept='image/*' id='inputimage' ></input>
                        {/* <button onClick={this.props.uploadImage}>submit</button> */}
                        {/* { this.props.image_urls.map(imagesrc => <img src={imagesrc} alt='Dog pic'></img>)} */}
                        {/* 
                        <Image
                            style={{width:200}}
                             cloudName='daurieb51'
                            publicId='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/hwznl698fndnwqhmdnhn.png'
                            /> */}
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group ">
                        <label for="inputName">Registration Name</label>
                        <input name='name' value={this.props.dog.name} onChange={this.props.handleChange} type="text" class="form-control" id="inputName" placeholder="Registration Name of Dog"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group col-md-">
                        <label for="inputName">Kennel Name</label>
                        <input name='kennel_name' value={this.props.dog.kennel_name} onChange={this.props.handleChange}
                            type="text" class="form-control" id="inputName" placeholder="Kennel Name"></input>
                    </div>
                    <div class="form-group col-md-">
                        <label for="inputName">Current Owner</label>
                        <input name='current_owner' value={this.props.dog.current_owner} onChange={this.props.handleChange}
                            type="text" class="form-control" id="inputName" placeholder="Current Owner"></input>
                    </div>
                </div>

                {/* <div className='form-row'>
                    <div class="form-group col-md-">
                        <label for="inputAge">Age</label>
                        <input name='age' value={this.props.dog.age} onChange={this.props.handleChange} type="number" class="form-control" id="inputAge" placeholder="Age"></input>

                    </div>
                    
                </div> */}
                <div className='form-row'>
                    <div class="form-group ">
                        <label for="inputName">AFBR NO</label>

                        <input name='afbr_no' value={this.props.dog.afbr_no} onChange={this.props.handleChange}
                            type="number" class="form-control" id="inputName" placeholder="AFBR NO."></input>
                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputSire">Registered Sire</label>
                        <p class='small'>Enter Unkown Genealogy if dam did not appear in searchlist</p>

                        <Search onSearchClick={this.props.handleChange} name='sire' />

                    </div>
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputSire">Registered Dam</label>
                        <p class='small'>Enter Unkown Genealogy if dam did not appear in searchlist</p>
                        <Search onSearchClick={this.props.handleChange} name='dam' />

                    </div>
                </div>


                <div className='form-row yellow_bottom'>
                    <p className='text-white'>Gender: &nbsp;</p>
                    <div class="form-group col-md-">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" onChange={this.props.handleChange} name="sex" value='male' id="male"></input>
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        </div>
                        <div className='form-group col-md-'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" onChange={this.props.handleChange} name="sex" value='female' id="female"></input>
                                <label class="form-check-label" for="female">
                                    Female
                                </label>
                            </div>
                        </div>

                    
                </div>
                <div class="form-row my-2 yellow_bottom">
                <div class="form-group col-md-">
                    <p>Physical Attributes</p>
                </div>
                </div>
                <div className='form-row'>
                <div class="form-group col-md-">
                        <label for="inputDate">Height: &nbsp;</label>
                        <input name='height' value={this.props.dog.height} onChange={this.props.handleChange}
                            class="form-date" type="number" id="Date"></input>
                    </div>
                </div>
                    
                    
                
                <div className='form-row my-2 yellow_bottom'>
                <div class="form-group col-md-">
                        <label for="inputDate">Weight: &nbsp;</label>
                        <input name='weight' value={this.props.dog.weight}
                            onChange={this.props.handleChange} class="form-date" type="number" id="Date"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputDate">Date of Birth:&nbsp;</label>
                        <input name='date_of_birth' value={this.props.dog.sex} onChange={this.props.handleChange}
                            class="form-date" type="date" id="Date"></input>
                    </div>
                    
                </div>
                <div className='form-row mt-4'>
                    
                <div class="form-group col-md-">
                        <label for="inputDate"> Place of Birth:&nbsp;</label>
                        <input name='place_of_birth' value={this.props.dog.place_of_birth}
                            onChange={this.props.handleChange} class="form-date" type="text" id="Date"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Land of Standing</label>
                        <input name='land_of_standing' value={this.props.dog.land_of_standing}
                            onChange={this.props.handleChange} type="text" class="form-control" id="Breed" placeholder="Land Of Standing"></input>
                    </div>

                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="inputDam">Breed</label>
                        <select name='breed' onChange={this.props.handleChange} id="inputDam" class="form-control">
                            <option name='breed' value='American Bulldog'>American Bulldog</option>
                            <option name='breed' value='French Bulldog'>French Bulldog</option>
                            <option name='breed' value='American Bully'>American Bully</option>
                            <option name='breed' value='American XL Bully'>American XL Bully</option>





                        </select>

                    </div>

                </div>


                {this.props.dpo_loaded && <button type="submit" class="btn btn-success">Register</button>}
                {!this.props.dpo_loaded &&
                    <div>
                        <p className='text-white'>Generating payment link. Just a sec</p>
                        <BeatLoader color='white' size={30} />
                    </div>}
                {this.props.special && <button type="submit" class="btn btn-success">Special Register</button>}

            </form>
        )
    }



}


// const initialFormState = {
//     username: '', password: '', email: '', authCode: '', formType: 'signUp'
// }

// export const SignUpForm = () => {

//     const [ formState, updateFormState ] = useState(initialFormState)
//     const [user, updateUser] = useState(null)
//     useEffect(()=>{
//         checkUser()
//         setAuthListener()
//     }, [])

//     async function setAuthListener() {

//         Hub.listen('auth', (data) => {
//             switch (data.payload.event){
//                 // case 'signIn':
//                 //     console.log('user signed in');
//                 //     break;
//                 // case 'signUp':
//                 //     console.log('user signed up');
//                 //     break;
//                 case 'signOut':
//                     console.log('data from event', data)
//                     console.log('user signed out');
//                     updateFormState(() => ({...formState, formType: 'signUp'}))
//                     break;
//                 default :
//                     break





//             }
//         })
//     }
//     async function checkUser() {
//         try{
//             const user = await Auth.currentAuthenticatedUser() 
//             // user ='t'
//             console.log('user', user)
//             // updateUser(user)
//             updateFormState(() => ({ ...formState, formType: 'signUp' }))

//         }
//         catch (err) {
//             updateUser(null)
//         }
//     }

//     function onChange(e) {
//         e.persist()
//         updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
//     }
//     console.log('formstate', formState)
//     const { formType } = formState 

//     async function signUp() {
//         const { username, email, password } = formState
//         await Auth.signUp({ username, password, attributes: { email } })
//         updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }))
//         console.log('formstate', formType)
//     }
//     async function confirmSignUp() {
//         const { username, authCode } = formState
//         await Auth.confirmSignUp( username, authCode )
//         updateFormState(() => ({ ...formState, formType: 'signIn' }))
//     }
//     async function SignIn() {
//         const { username, password } = formState
//         await Auth.signIn( username, password )
//         updateFormState(() => ({ ...formState, formType: 'signedIn' }))
//     }

//     return (
//         <div className="Signup">
//             {
//                 formType === 'signUp' && (
//                     <div>
//                         <input name='username' onChange={onChange} placeholder='username'></input>
//                         <input name='password' type='password' onChange={onChange} placeholder='password'></input>
//                         <input name='email' onChange={onChange} placeholder='email'></input>
//                         <button onClick={signUp}>SIgn UP</button>
//                         <button onClick={()=> updateFormState(() => ({
//                             ...formState, formType:'signIn'
//                         }))}>SIgn In
//                         </button>




//                     </div>


//                 )}
//             {
//                 formType === 'signIn' && (
//                     <div>
//                         <input name='username'  onChange={onChange} placeholder='username'></input>
//                         <input name='password' type='password' onChange={onChange} placeholder='password'></input>
//                         <button onClick={SignIn}>SIgn In</button>



//                     </div>


//                 )}
//             {
//                 formType === 'confirmSignUp' && (
//                     <div>
//                         <input name='authCode' onChange={onChange} placeholder='Confirmation Code'></input>
//                         <button onClick={confirmSignUp} >Confirm Sign up</button>



//                     </div>


//                 )}
//             {
//                 formType === 'signedIn' && (
//                     <div>
//                         <h1>
//                             Hello world welcome {user}</h1>
//                         <button onClick={
//                             () => Auth.signOut()
//                         }>Sign Out</button>


//                     </div>


//                 )}
//         </div >

//     )}


export const SignUpForm = () => {
    return (
        <div>
            {/* <AmplifySignOut/> */}
            <h1>My app content</h1>
        </div>
    )
}
export default RegisterForm;

