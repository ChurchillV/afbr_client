import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import { withRouter } from "./ProfileDog";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './weburl';
import { Search } from './search';
import axios from "axios";
import Profile_pic from '../images/profile.jpg'



class Personal extends React.Component {

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




    changeUserToId = (callback) => {
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
            <div className="container-fluid">
                <Profile class='profile_first'>


                    <div className=' text-dark row align-items-center justify-content-start'>

                        <div className="col-lg-6 smallrem">
                            {this.state.user ? <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.user.public_id}.png`} className='img-fluid profile_pic_user2'></img>
                                : <img src={Profile_pic} className='img-fluid profile_pic_user2'></img>}


                        </div>
                        <div className="col-lg-6 smallrem">
                            <p className="list-group-item">Username: &nbsp; &nbsp;{this.state.user.username}</p>
                            <p className="list-group-item">Email:  &nbsp; &nbsp;{this.state.user.email}</p>
                            <p className="list-group-item">Phone Number:  &nbsp; &nbsp;{this.state.user.phone_number}</p>
                            <p className="list-group-item">Contact Address:  &nbsp; &nbsp;{this.state.user.contact_address}</p>

                        </div>
                    </div>
                    <div className=' row align-items-center justify-content-start'>

                        <div className="col-lg- mt-5 smallrem btn btn-warning">
                            <Link to={`/profile/personal/edit/${this.props.params.uid}`}>Edit</Link>
                        </div>
                    </div>
                </Profile>
            </div>
        )
    }

}

export default withRouter(Personal)

