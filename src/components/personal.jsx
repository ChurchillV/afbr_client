import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import { withRouter } from "./ProfileDog";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { url } from './weburl';
import { Search } from './search';
import axios from "axios";


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
                <Profile>

                <div className=' row align-items-center justify-content-center'>

                    <div className="col-lg-">
                        <Link to={`/profile/personal/edit/${this.props.params.uid}`}>Edit</Link>
                    </div>
                </div>
                <div className=' text-dark row align-items-center justify-content-center'>

                    <div className="col-lg-">
                        <p>Username: &nbsp; &nbsp;{this.state.user.username}</p>
                        <p>Email:  &nbsp; &nbsp;{this.state.user.email}</p>
                        <p>Phone Number:  &nbsp; &nbsp;{this.state.user.phone_number}</p>
                        <p>Contact Address:  &nbsp; &nbsp;{this.state.user.address}</p>
                    </div>
                </div>
                </Profile>
            </div>
        )
    }

}

export default withRouter(Personal)

