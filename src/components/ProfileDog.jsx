import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import Logo from '../images/logo2-removebg-preview (1).png'

import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile_Card from './profile_card';
import { useParams, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
import Try from './try';
import { url } from './weburl';


import Profile from './profile';
import Pedigree from './pedigree';



// export default DogCard;
const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

class ProfileDog extends Component {

    constructor(props) {
        super(props)

    
        this.state = {
            specificdog: {

            },
            edit: false,
            dog_sire_name: null,
            dog_dam_name: null,
            Pedigree: {

            }
        }


    }


    componentDidMount() {

        this.props.getdogpedigree(this.props.params.dog_id)
        this.getspecificdog()
        console.log(this.props)

    };


    // getpedigree = () => {
    //     console.log('calling in getpedgiree')
    //     return this.props.pedigree.maindog
    // }

    getspecificdog = () => {
        axios
            .get(`${url}api/dogs/${this.props.params.dog_id}`)
            .then((res) => {
                console.log(this.props.params.dog_id)
                this.setState({ specificdog: res.data[0] }, () => {
                    console.log('finished setting state in profiledog', this.state)

                },
                    // this.getdogpic()
                )



            }

            )

            .catch((err) => {
                console.log("Error couldnt get Dog");
                console.log(err.message);
            });
    }




    handleDelete = () => {
        axios
            .delete(`${url}api/dogs/${this.props.params.dog_id}`)


            .catch((err) => {
                console.log("Error couldnt delete Dog");
                console.log(err.message);
            });

    }


    render() {
        return (
            <div className='profiledog yellow'>
                <Profile class='profile' navbarcolor='white'>
                    <div className='row  row_edit align-items-end justify-content-end'>

                        




                    </div>

                    <div className='row  align-items-start justify-content-start'>




                        <div className='col-sm-'>


                            {this.props.pedigree ? <Profile_Card image_src={Logo} height={height}
                                width={width}
                                dog={this.props.pedigree.maindog}
                                sire={this.props.pedigree.sire}
                                dam={this.props.pedigree.dam}

                            />
                                : null}
                        </div>


                    </div>



                </Profile>
                {this.props.pedigree.maindog.name ? <Pedigree data={this.props.pedigree}
                /> : null}



            </div>

        )
    }

}







export default withRouter(ProfileDog);