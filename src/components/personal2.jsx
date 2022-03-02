import { withRouter } from "./pedigree_cards"
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import axios from 'axios';
import { url } from "./weburl";


class PersonalForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dogs: [

            ],
            user: ''
        };
    }

    componentDidMount = () => {
        console.log(this.props.params.uid)
        this.changeUserToId()
    }

   


    changeUserToId = () => {
        axios
            .get(`${url}api/users/getUserByUid/${this.props.params.uid}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    user: res.data[0]
                },
                    () => {
                        console.log('chaingn personal state after calling uid', this.state)

                    })
            })

            .catch((err) => {
                console.log(err)
            })
    }
   
    

    render() {
        return (
            <div className="container-fluid " style={{color: 'black'}}>
                <Profile>

                <form onSubmit={(e) => {
                this.props.submit(e)
            }}
                method='post' className='text-dark align-items-center justify-content-center'>

            
                <div className='form-row'>
                    <div className='form-group text-dark'>
                        <label for="inputimage">Upload image &nbsp;</label>
                        <input type='file' name='image' accept='image/*' id='inputimage' ></input>
                       
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group text-dark">
                        <label for="inputName">Name</label>
                        <input name='name' value={this.state.user.username} type="text" class="form-control" id="inputName" placeholder="Name of User"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group col-md- text-dark">
                        <label for="inputAge">Phone Number</label>
                        <input name='age'  type="number" class="form-control"
                         id="inputAge" placeholder="Phone Number"></input>

                    </div>
                  
                </div>


                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Email Address</label>
                        <input name='breed' type="email" value={this.state.user.email} 
                        class="form-control" id="Breed" placeholder="Email Address"></input>
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group col-md-">
                        <label for="Breed">Contact Address</label>
                        <input name='breed' type="text" class="form-control" 
                        id="Breed" placeholder="Contact"></input>
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

export default withRouter(PersonalForm)