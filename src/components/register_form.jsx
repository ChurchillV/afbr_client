
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
            imageSelected: '',
            register_text: 'Register',
            special_register_text: 'Special Register',
            edit_text: 'Edit'
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


    changeToLoading = () => {
        this.setState({ register_text: 'Loading, just a sec' })
        this.setState({ special_register_text: 'Loading, just a sec' })

        this.setState({ edit_text: 'Loading, just a sec' })

    }

    render() {

        return (
            <form onSubmit={(e) => {
                this.props.submit(e)
            }}
                method='post' className='container  align-items-center justify-content-center FORM text-left'>


                <div className='form-row'>
                    <div className='form-group'>
                        <label for="inputimage">Upload image &nbsp;</label>
                        <input type='file' name='image' onChange={this.props.handleImageChange} accept='image/*' id='inputimage' ></input>

                    </div>
                </div>
                <div className='form-row justify-content-between'>
                    <div className='form-group col-sm-4 align-items-start'>
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
                                <p class='small'>Enter Unkown Genealogy if sire did not appear in searchlist</p>

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
                    </div>

                    <div className='form-group col-sm-6 align-items-start justify-content-start border_left_yellow pl-0 pl-sm-5'>

                        <div className='form-row '>
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
 
                        <div className='form-row '>
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
                        <div className='form-row'>
                            <div class="form-group col-md-">
                                <label for="inputDate">Height: &nbsp;</label>
                                <input name='height' value={this.props.dog.height} onChange={this.props.handleChange}
                                    class="form-date" type="number" id="Date"></input>
                            </div>
                        </div>

                    </div>
                </div>








                {/* {this.props.dpo_loaded && <button type="submit" class="btn btn-success">Register</button>} */}
                {(!this.props.edit && !this.props.special) && <button type="submit" class="btn btn-success btn-lg w-100 mt-5"
                 onClick={() => this.changeToLoading()}>{this.state.register_text}</button>}
   
                {this.props.special && <button type="submit" class="btn btn-success btn-lg w-100 mt-5" onClick={() => this.changeToLoading()}>{this.state.special_register_text}</button>}
                {this.props.edit && <button type="submit" className="btn btn-success btn-lg w-100 mt-5" onClick={() => this.changeToLoading()}>{this.state.edit_text}</button>}
            </form>
        )
    }



}



export default RegisterForm;

