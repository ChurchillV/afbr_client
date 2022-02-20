import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";

export class Personal extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Profile>

                <div className=' row align-items-center justify-content-center'>

                    <div className="col-lg-">
                        <Link to='/profile/personal/edit'>Edit</Link>
                    </div>
                </div>
                <div className=' row align-items-center justify-content-center'>

                    <div className="col-lg-">
                        <p>Username</p>
                        <p>User.email</p>
                        <p>User.phonenumber</p>
                        <p>User.address</p>
                    </div>
                </div>
                </Profile>
            </div>
        )
    }

}

export class PersonalForm extends React.Component {
    render() {
        return (
            <div className="container-fluid " style={{color: 'black'}}>
                <Profile>

                <form onSubmit={(e) => {
                this.props.submit(e)
            }}
                method='post' className='align-items-center justify-content-center'>

            
                <div className='form-row'>
                    <div className='form-group'>
                        <label for="inputimage">Upload image &nbsp;</label>
                        <input type='file' name='image' accept='image/*' id='inputimage' ></input>
                       
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group ">
                        <label for="inputName">Name</label>
                        <input name='name' type="text" class="form-control" id="inputName" placeholder="Name of Dog"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group col-md-">
                        <label for="inputAge">Phone Number</label>
                        <input name='age'  type="number" class="form-control" id="inputAge" placeholder="Age"></input>

                    </div>
                    {/* <div class="form-group col-md-6">
                        <label for="inputBreed">Sex</label>
                        <input name='sex' value={this.props.dog.sex} onChange={this.props.handleChange} type="text" class="form-control" id="inputBreed" placeholder="Sex"></input>
                    </div> */}
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Email Address</label>
                        <input name='breed' type="text" class="form-control" id="Breed" placeholder="Breed"></input>
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Contact Address</label>
                        <input name='breed' type="text" class="form-control" id="Breed" placeholder="Breed"></input>
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
                </Profile>
            </div>
        )
    }

}

