
import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import '../css_files/registration.css'
import { Auth, Hub } from 'aws-amplify'
// import "./Signup.css";

class RegisterForm extends Component {

    constructor(props) {
        super(props)
        console.log('this.prpos.sires', Object.keys(this.props))
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

    //edit wont work here by displaying the initial values cos props = this.state not this.state.dog

    render() {
        return (
            <form onSubmit={(e) => {
                this.props.submit(e)
            }}
                method='post' className='align-items-center justify-content-center FORM'>


                <div className='form-row'>
                    <div className='form-group'>
                        <label for="inputimage">Upload image &nbsp;</label>
                        <input type='file' name='image' accept='image/*' id='inputimage' ></input>
                        {/* { this.props.image_urls.map(imagesrc => <img src={imagesrc} alt='Dog pic'></img>)} */}

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
                        <label for="inputAge">Age</label>
                        <input name='age' value={this.props.dog.age} onChange={this.props.handleChange} type="number" class="form-control" id="inputAge" placeholder="Age"></input>

                    </div>
                    {/* <div class="form-group col-md-6">
                        <label for="inputBreed">Sex</label>
                        <input name='sex' value={this.props.dog.sex} onChange={this.props.handleChange} type="text" class="form-control" id="inputBreed" placeholder="Sex"></input>
                    </div> */}
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputSire">Sire</label>
                        <select name='sire' onChange={this.props.handleChange} id="inputSire" class="form-control">
                            <option>Unkown</option>
                            {this.props.sires ? this.option_list_sires() : null}                        </select>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="inputDam">Dam</label>
                        <select name='dam' onChange={this.props.handleChange} id="inputDam" class="form-control">
                            <option>Unknown</option>
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
                        <input name='date_of_birth' value={this.props.dog.sex} onChange={this.props.handleChange} class="form-date" type="date" id="Date"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Breed</label>
                        <input name='breed' value={this.props.dog.breed} onChange={this.props.handleChange} type="text" class="form-control" id="Breed" placeholder="Breed"></input>
                    </div>

                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <button type="submit" class="btn btn-success">Register</button>
                {this.props.to_sires_first ? <Link to='/dog_registrations/pedig-sirefirst' class="btn btn-primary">Save and continue to sire's 1st gen</Link> : null}
                {this.props.to_dams_first ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to dam's 1st gen</Link> : null}
                {this.props.to_sires_sires_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Sire's sires first gen</Link> : null}
                {this.props.to_sires_dams_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to sire's dam's 1st gen</Link> : null}
                {this.props.to_dams_sires_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Dam's sire's s 1st gen</Link> : null}
                {this.props.to_dams_dams_firstgen ? <Link to='/dog_registrations/pedig-damfirst' class="btn btn-primary">Save and continue to Dam's dam's 1st gen</Link> : null}

            </form>
        )
    }



}


const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

export const SignUpForm = () => {
    const { formState, updateFormState } = useState(initialFormState)

    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }

    const { formType } = formState
    async function SignUp() {
        const { username, email, password } = formState
        await Auth.signUp({ username, password, attributes: { email } })
        updateFormState(() => ({ ...formState, formType: 'confirmSignup' }))
    }
    async function confirmSignUp() {
        const { username, authCode } = formState
        await Auth.confirmSignUp({ username, authCode })
        updateFormState(() => ({ ...formState, formType: 'signIn' }))
    }
    async function SignIn() {
        const { username, password } = formState
        await Auth.SignIn({ username, password })
        updateFormState(() => ({ ...formState, formType: 'signedIn' }))
    }

    return (
        <div className="Signup">
            {
                formType === 'signUp' && (
                    <div>
                        <input name='username' onChange={onChange} placeholder='username'></input>
                        <input name='password' type='password' onChange={onChange} placeholder='password'></input>
                        <input name='email' onChange={onChange} placeholder='email'></input>
                        <Button onClick={signUp}>SIgn UP</Button>



                    </div>


                )}
            {
                formType === 'signIn' && (
                    <div>
                        <input name='password' type='password' onChange={onChange} placeholder='password'></input>
                        <input name='email' onChange={onChange} placeholder='email'></input>
                        <Button onClick={SignIn}>SIgn In</Button>



                    </div>


                )}
            {
                formType === 'confirmSignUp' && (
                    <div>
                        <input name='authCode' placeholder='Confirmation Code'></input>
                        <Button onClick={confirmSignUp} >Confirm Sign up</Button>



                    </div>


                )}
            {
                formType === 'signedIn' && (
                    <div>
                        <h1>
                            Hello world welcome user</h1>


                    </div>


                )}
        </div >

    )}

    export default RegisterForm;

