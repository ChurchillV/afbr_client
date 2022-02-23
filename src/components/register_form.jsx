
import React, { Component, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../css_files/registration.css'
import { Auth, Hub } from 'aws-amplify'
import {Image} from 'cloudinary-react'
import axios from 'axios'
import Amplify from 'aws-amplify'
import {Search} from './search'
// import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'


// import "./Signup.css";

class RegisterForm extends Component {

    constructor(props) {
        super(props)
        console.log('this.prpos.sires',this.props)
        this.state = {
            imageSelected: ''
        }
        // console.log('this.prpos.dams', Object.values(this.props.dams))

    }

    option_list_dams = () => {
        return Object.values(this.props.dams).map((item) => {
            return <option name='dam' value={item.id}>{item.name}</option>

        })
    }

    option_list_sires = () => {
        return Object.values(this.props.sires).map((item) => {
            return <option name='sire' value={item.id}>{item.name}</option>

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
                        <label for="inputName">Name</label>
                        <input name='name' value={this.props.dog.name} onChange={this.props.handleChange} type="text" class="form-control" id="inputName" placeholder="Name of Dog"></input>
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

                <div className='form-row'>
                    <div class="form-group col-md-">
                        <label for="inputAge">Age</label>
                        <input name='age' value={this.props.dog.age} onChange={this.props.handleChange} type="number" class="form-control" id="inputAge" placeholder="Age"></input>

                    </div>
                    
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputSire">Registered Sire</label>
                        <select name='sire' onChange={this.props.handleChange} 
                        placeholder='Enter dogs name' id="inputSire" class="form-control">
                            <option name='sire' value='404'>Unkown Genealogy</option>
                            {this.props.sires ? this.option_list_sires() : null} 
                            
                       </select>
                      
                    </div>
                </div>
               
                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputDam">Registered Dam</label>
                        <select name='dam' onChange={this.props.handleChange} id="inputDam" class="form-control">
                        <option name='dam' value='404'>Unkown Genealogy</option>
                            {this.props.dams ? this.option_list_dams() : null}
                            
                        </select>
                       
                    </div>
                </div>
            

                <div className='form-row'>
                    <div class="form-group">

                        <div class="form-check">
                            <input class="form-check-input" type="radio" onChange={this.props.handleChange} name="sex" value='male' id="male"></input>
                            <label class="form-check-label" for="male">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" onChange={this.props.handleChange} name="sex" value='female' id="female"></input>
                            <label class="form-check-label" for="female">
                                Female
                            </label>
                        </div>
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputDate">Date of Birth</label>
                        <input name='date_of_birth' value={this.props.dog.sex} onChange={this.props.handleChange} 
                        class="form-date" type="date" id="Date"></input>
                    </div>
                    <div class="form-group col-md-">
                        <label for="inputDate"> Place of Birth</label>
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
                        <label for="inputDam">Breeds</label>
                        <select name='breed' onChange={this.props.handleChange} id="inputDam" class="form-control">
                        <option name='breed' value='American Bulldog'>American Bulldog</option>
                        <option name='breed' value='French Bulldog'>French Bulldog</option>
                        <option name='breed' value='American Bully'>American Bully</option>
                        <option name='breed' value='American XL Bully'>American XL Bully</option>



                            
                            
                        </select>
                       
                    </div>

                </div>

               
                <button type="submit" class="btn btn-success">Register</button>
                {this.props.to_sires_first ? <Link to='/dog_registrations/pedig-sirefirst' class="btn btn-primary">Save and continue to sire's 1st gen</Link> : null}
                {this.props.to_dams_first ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to dam's 1st gen</Link> : null}
                {this.props.to_sires_sires_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Sire's sires first gen</Link> : null}
                {this.props.to_sires_dams_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to sire's dam's 1st gen</Link> : null}
                {this.props.to_dams_sires_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Dam's sire's s 1st gen</Link> : null}
                {this.props.to_dams_dams_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Dam's dam's 1st gen</Link> : null}
                
                {this.props.saveAndContinue ? <Link onClick={(e) => {
                    this.props.submit(e)
                    // window.location.push('/dog_registrations/save_and_here')
                    }} to='/dog_registrations/save_and_end_here' class="btn btn-secondary">Save and Continue</Link> : null}


                {this.props.saveAndEndHere ? <Link onClick={(e) => {
                    this.props.submit(e)
                    // window.location.push('/dog_registrations/save_and_here')
                    }} to='/dog_registrations/save_and_end_here' class="btn btn-primary">Save and End Here</Link> : null}

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
    return(
        <div>
            {/* <AmplifySignOut/> */}
            <h1>My app content</h1>
        </div>
    )
}
    export default RegisterForm;

