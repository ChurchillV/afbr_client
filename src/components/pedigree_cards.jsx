import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile_Card from './profile_card';
import { useParams, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';


import Profile from './profile';
import Pedigree from './pedigree';
// const colstyle = {
//     row_style: {
//         margin: '1%',
//         backgroundColor: 'black',
//         border: '1px solid black'
//     },
//     column_style: {
//         padding: '1%',
//         border: '1px solid black',
//         fontSize: '2vw'
//     },
//     p_style: {
//         border: '1px solid black'
//     }
// }





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

export class PedigreeFrame extends Component {

    constructor(props) {
        super(props)
        this.state = ''
    }

    render() {
        return (
            <div className='sire_sire'>

                {/* <div className='sire_sire_1'>
                    <div className='sire_sire_1'>
                        <img src={Profile_pic} height='100vw' width='100vw' className='image'></img>
                    </div>
                    <div className='sire_sire_1 label'>
                        AFBR dog q kennel sky
                    </div>
                </div>
                <div className='sire_sire_1'>
                    <div className='sire_sire_1'>
                        <img src={Profile_pic} height='100vw' width='100vw' className='image'></img>
                    </div>
                    <div className='sire_sire_1 label'>
                        AFBR dog q kennel sky
                    </div>
                </div> */}

                {this.props.children}
            </div>
        )
    }

}



export class PedigreeDogCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dog_sire_name: ''
        }

    }

    // componentDidMount() {
    //     this.getsire()
    // }

    // getsire = () => {
    //     //get dog sire name image
    //     axios
    //         .get(`http://localhost:8000/api/dogs/${this.props.dog}`)
    //         .then((res) => {

    //             this.setState({ dog_sire_name: res.data[0].name }, () => console.log('finished setting state in pedigree card', this.state))
    //             console.log(res.data)

    //         }
    //         )
    //         .catch((err) => {
    //             // console.log("Error couldnt get Dog");
    //             // console.log(err.message);
    //         });

    // }
    render() {
        return (
            <a style={{color:'whitesmoke'}} href={`/my_dogs/${this.props.dog_id}`}>
                <div className='sire_sire_1'>
                    <div className='sire_sire_1'>
                        <img src={Profile_pic} height='100vw' width='100vw' className='image'></img>
                    </div>
                    <div className='sire_sire_1 label'>
                        {this.props.dog_name}
                    </div>
                </div>
            </a>


        )
    }

}


export class PedigreeDogCard2_sire extends Component {


    //the difference between these 2 components is that the second one is supplied the 
    //child and goes along by itself to ferch the parent
    constructor(props) {
        super(props)
        this.state = {
            dog_sire_name: ''
        }
        console.log(this.props)

    }

    componentDidMount() {
        this.getsire()
    }

    getsire = () => {
        //get dog sire name image
        axios
            .get(`http://localhost:8000/api/dogs/${this.props.child}`)
            .then((res) => {

                this.setState({ dog_sire_id: res.data[0].sire }, () => {
                    this.getsire_name()
                    console.log('finished setting state in pedigree card', this.state)}
                    )
                console.log(res.data)

            }
            )
            .catch((err) => {
                console.log(this.props.child)
                console.log("Error couldnt get Dog in getsire method");
                console.log(err.message);
            });

    }

    getsire_name = () => {
        //get dog sire name image
        axios
            .get(`http://localhost:8000/api/dogs/${this.state.dog_sire_id}`)
            .then((res) => {

                this.setState({ dog_sire_name: res.data[0].name }, () => console.log('finished setting state in pedigree card', this.state))
                console.log(res.data)

            }
            )
            .catch((err) => {
                console.log("Error couldnt get Dogin p");
                console.log(err.message);
            });

    }
    render() {
        return (
            <a href={`/my_dogs/${this.state.dog_sire_id}`}>
                <div className='sire_sire_1'>
                    <div className='sire_sire_1'>
                        <img src={Profile_pic} height='100vw' width='100vw' className='image'></img>
                    </div>
                    <div className='sire_sire_1 label'>
                        {this.state.dog_sire_name ? this.state.dog_sire_name : 'Unkown genealogy'}
                    </div>
                </div>
            </a>


        )
    }

}

export class PedigreeDogCard2_dam extends Component {


    //the difference between these 2 components is that the second one is supplied the 
    //child and goes along by itself to ferch the parent
    constructor(props) {
        super(props)
        this.state = {
            dog_sire_name: ''
        }

    }

    componentDidMount() {
        this.getdam()
    }

    getdam = () => {
        //get dog sire name image
        axios
            .get(`http://localhost:8000/api/dogs/${this.props.child}`)
            .then((res) => {

                this.setState({ dog_dam_id: res.data[0].dam }, () => {
                    this.getdam_name()
                    console.log('finished setting state in pedigree card', this.state)}
                    )
                console.log(res.data)

            }
            )
            .catch((err) => {
                // console.log("Error couldnt get Dog");
                // console.log(err.message);
            });

    }

    getdam_name = () => {
        //get dog sire name image
        axios
            .get(`http://localhost:8000/api/dogs/${this.state.dog_dam_id}`)
            .then((res) => {

                this.setState({ dog_dam_name: res.data[0].name }, () => console.log('finished setting state in pedigree card', this.state))
                console.log(res.data)

            }
            )
            .catch((err) => {
                // console.log("Error couldnt get Dog");
                // console.log(err.message);
            });

    }
    render() {
        return (
            <a href={`/my_dogs/${this.state.dog_dam_id}`}>
                <div className='sire_sire_1'>
                    <div className='sire_sire_1'>
                        <img src={Profile_pic} height='100vw' width='100vw' className='image'></img>
                    </div>
                    <div className='sire_sire_1 label'>
                        {this.state.dog_dam_name ?  this.state.dog_dam_name: 'Unkown genealogy'}
                    </div>
                </div>
            </a>


        )
    }

}
