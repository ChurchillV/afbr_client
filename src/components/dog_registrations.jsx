import React from "react";
import Navbar from "./navbar";

import RegisterForm from './register_form'
import axios from 'axios';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'

import UserContext from '../App'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Link, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { url } from "./weburl";
import emailjs from '@emailjs/browser'
import { init } from '@emailjs/browser';
import { PedShareForm } from "./pedshareus";
import { getLocation } from "./confetti";
import CountryContext from "./country_context";


export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

class DogRegistration extends React.Component {
    static contextType = CountryContext

    constructor(props) {
        super(props)

        this.state = {
            dog: {
                'name': '',
            },
            sires: {
            },
            dams: {
            },
            edit: false,
            dpo: '',
            loaded: false,
            image_urls: '',
            dpo_loaded: false,
        }
    }



    componentDidMount = () => {
        console.log('contenxt comes here',this.context)
        // this.getcurrentuser()
        if (this.context.user){
            this.setState({loaded: true})
        }

        this.check_if_to_edit()
    }


    check_if_to_edit = () => {
        for (let i = 0; i < this.props.location.pathname.split('/').length; i++) {
            // console.log('bingo')
            console.log(this.props.location.pathname.split('/').length)
            // console.log(this.props.location.pathname.split())
            console.log('..........', this.props.location.pathname.split('/')[i])
            if (this.props.location.pathname.split('/')[i] === 'edit') {
                console.log('bingo')
                this.setState({ edit: true }, () => {
                    axios
                        .get(`${url}api/dogs/${this.props.params.dog_id}`)
                        .then((res) => {

                            console.log(res.data);
                            this.setState({ dog: res.data[0] }, () => console.log(this.state))
                            // console.log('data',data)
                        })
                        .catch((err) => {
                            console.log("Error couldn't create Dog");
                            console.log(err.message);
                        });
                })
            } else {
                console.log('banjo')
            }
        }


    }


    uploadImage = (callback) => {
        // console.log(files[0])
        const formData = new FormData()
        formData.append('file', this.state.imageSelected)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) => {

                this.setState({

                    ...this.state,
                    dog: { ...this.state.dog, public_id: response.data.public_id }
                },
                    () => {
                        console.log(this.state.dog)
                        callback()
                        console.log('called the callback')
                        // this.props.navigate('/profile')

                    })

                console.log('responseeeee', response.data.public_id)
                console.log('image successfuly uploaded thank you jehovah')
            })


        // this.uploadImagetodb()

    }


    addImageSelected = (e) => {
        this.setState({
            ...this.state,
            imageSelected: e.target.files[0]
        },
            () => console.log(this.state.imageSelected, this.state))

    }
    handleImageChange = (e) => {
        
        console.log(e.target.files[0].name)


        // this.setState((data) => ({ ...data, [e.target.name]: e.target.value }));
        this.setState({
            ...this.state,
            dog: { ...this.state.dog, image_url: e.target.files[0].name }
        },
            this.addImageSelected(e))


    }




    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        let dog = {
            [name]: value,

        }
        // this.setState((data) => ({ ...data, [e.target.name]: e.target.value }));
        this.setState({
            ...this.state,
            dog: { ...this.state.dog, [name]: value }
        }, () => {
            console.log(this.state)
            if (this.props.newdog) {

                console.log('manual pedigree working')
                this.props.getnameofDog(this.state.dog.name)
            }
            if (this.props.appenddog) {
                console.log(this.props)
                console.log('manual pedigree working in appenddog')
                this.props.getnameofDog2(this.state.dog.name)
            }
        }
        )


        //change this to getteing the id later




    }

    getTransactUrl = () => {
        
        axios.post(`${url}api/expresspaygh/transact`, {
            location: this.context.location,
            transaction_name: this.props.transaction_name,
            transaction_cost: this.state.price,
            dog_name: this.state.dog.name,
            // username: this.state.firebaseUser.displayName,
            username: this.context.user.displayName,
            // email: this.state.firebaseUser.email
            email: this.context.user.email
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ expresspaygh: res.data, dpo_loaded: true }, () => {
                    
                    window.location = this.state.expresspaygh

                })

            })

            .catch((err) => console.log(err))
    }

    onSearchChange = (e) => {

    }

    edit = (e) => {

        e.preventDefault()
        if (this.state.imageSelected) {
            this.uploadImage(this.updateDogInfo)

            console.log('image url  presnet, ready to eedit')

        }
        else {
            this.updateDogInfo()
            console.log('no image url present, ready to edit')
        }



    }

    updateDogInfo = () => {
        axios
            .put(`${url}api/dogs/${this.props.params.dog_id}`, this.state.dog)
            .then((res) => {

                console.log(res.data.message);
                console.log('editeed')
                this.props.navigate('/profile')

            })
            .catch((err) => {
                console.log("Error couldn't edit Dog");
                console.log(err.message);
            });
    }

    sendDogInfo = () => {
        console.log('calling sendDogInfo')
        axios
            .post(`${url}api/dogs`, { dog: this.state.dog, user: this.context.user })
            .then((res) => {

                // sendDogRegEmail()
                console.log(res.data.message);
                console.log('dog created/editted in congrats page')

                this.getTransactUrl()

                // window.location = `/dog_registrations_success/${this.state.dog.name}/${this.state.firebaseUser.displayName}/${this.state.dog.public_id}`

            })


            .catch((err) => {
                console.log("Error couldn't create Dog");
                console.log(err.message);
            });
    }



    submit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)






        if (this.state.dog.image_url) {
            this.uploadImage(this.sendDogInfo)

            console.log('image url  presnet  and navigating to dpo')
            // window.location = this.state.dpo
            // window.location = `/dog_registrations_success/${this.state.dog.name}/${this.state.firebaseUser.displayName}/${this.state.dog.public_id}`


        }
        else {
            this.sendDogInfo()
            console.log('navigating to profile')

      
            console.log('no image url present')
        }


    }


    render() {
        return (

            <div className='row align-items-center justify-content-center dog_reg_full'>
                <Navbar color='white' navbar_dark={'navbar-dark'} />

                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">

                        {this.context.user && <div className="col-sm-9">
                            {this.state.edit ?
                                <RegisterForm dog={this.state.dog} sires={this.state.sires}
                                    dams={this.state.dams} submit={this.edit}
                                    handleChange={this.handleChange}
                                    image_urls={this.state.image_urls}
                                    uploadImagetodb={this.uploadImagetodb}
                                    uploadImage={this.uploadImage}
                                    handleImageChange={this.handleImageChange}
                                    dpo_loaded={this.state.dpo_loaded}
                                    edit={true}
                                />
                                :
                                <RegisterForm dog={this.state} to_sires_first={this.props.to_sires_first}
                                    to_dams_first={this.props.to_dams_first}
                                    image_urls={this.state.image_urls}
                                    handleImageChange={this.handleImageChange}
                                    dpo_loaded={this.state.dpo_loaded}
                                    sires={this.state.sires}
                                    dams={this.state.dams}
                                    uploadImagetodb={this.uploadImagetodb}
                                    uploadImage={this.uploadImage}
                                    submit={this.submit} handleChange={this.handleChange}
                                    getdogid={this.props.getdogid}
                                    getnameofDog={this.props.getnameofDog}
                                    


                                />


                            }
                            <div className="col-sm-3">
                                <PedShareForm label='Upload Pedigree so that we fill it for you' pedigree={true} />
                            </div>
                        </div>}


                        {!this.context.user &&
                            <div >
                                <p>Getting ready, please make sure you are logged in/signed up</p>
                                <BeatLoader loading size={30} color={'white'} />

                            </div>
                        }

                    </div>

                </div>


            </div>






        )
    }


}

export default withRouter(DogRegistration);