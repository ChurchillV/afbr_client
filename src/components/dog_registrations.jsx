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


export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

class DogRegistration extends React.Component {

    constructor(props) {
        super(props)

        console.log('this.props', this.props.location)
        // console.log(this.props.location.pathname.split('/'))


        this.state = {
            dog: {
                'name': '',
                'sex': '',
                'breed': '',
                'sire': '',
                'dam': '',
                'age': '',
                'date_of_birth': '',
                'image_url': '',
                'public_id': '',
                'user': ''
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



    check_if_to_edit = () => {
        for (let i = 0; i < this.props.location.pathname.split('/').length; i++) {
            // console.log('bingo')
            console.log(this.props.location.pathname.split('/').length)
            // console.log(this.props.location.pathname.split())
            console.log('..........', this.props.location.pathname.split('/')[i])
            if (this.props.location.pathname.split('/')[i] === 'edit') {
                console.log('bingo')
                this.setState({ edit: true })
            } else {
                console.log('banjo')
            }
        }
    }





    // useEffect(() => getData, console.log('hello'))
    componentDidUpdate(prevProps){
        if(prevProps.puppy_registrations_price !== this.props.puppy_registrations_price){
            this.setState({...this.state, price:this.props.puppy_registrations_price}, ()=>
            this.getTransactUrl()
            )

        }
        if(prevProps.dog_registrations_price !== this.props.dog_registrations_price){
            this.setState({...this.state, price:this.props.dog_registrations_price}, ()=>
            this.getTransactUrl()
            )

        }
        console.log(prevProps.puppy_registrations_price)
     }


    componentDidMount = () => {
        this.getcurrentuser()
        console.log(this.props)
        // const user =  this.context
        // console.log('user',this.props.user.uid)
        console.log('dog registrations state', this.state)



        //do so that this is only called when it is to be editted
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
        this.check_if_to_edit()



    }


    getcurrentuser = (callback) => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    console.log('on Authstate dog reg', this.state.firebaseUser)
                    // this.changeUserToId(callback)
                    this.setState({ loaded: true })
                });

            } else {
                this.setState({ user: null });
                console.log('usershmm')
                this.setState({ loaded: false })

            }

            if (this.state.loading) {
                console.log('loading user')
                this.setState({ loaded: false });
            }
        });
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
        // const {  value } = e.target.files[0]
        // console.log('e.')
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

        axios.post(`${url}api/dpo/transact`, {
            transaction_name: 'Dog_Registrations',
            transaction_cost: this.state.price
        })
            .then((res) => {
                console.log(res.data)
                this.setState({ dpo: res.data, dpo_loaded: true }, () => {
                    console.log(this.state)
                })

            })

            .catch((err) => console.log(err))
    }

    onSearchChange = (e) => {

    }

    edit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)



        if (this.state.imageSelected) {
            this.uploadImage(this.updateDogInfo)
            console.log('image url  presnet, ready to eedit')

        }
        else {
            this.updateDogInfo()
            this.props.navigate('/profile')

            console.log('no image url present, ready to edit')
        }



    }

    updateDogInfo = () => {
        axios
            .put(`${url}api/dogs/${this.props.params.dog_id}`, this.state.dog)
            .then((res) => {

                console.log(res.data.message);
                console.log('editeed')
            })
            .catch((err) => {
                console.log("Error couldn't edit Dog");
                console.log(err.message);
            });
    }

    sendDogInfo = () => {

        localStorage.setItem("dog",

            JSON.stringify(this.state.dog)

        )

        localStorage.setItem("user",

            JSON.stringify(this.state.firebaseUser)

        )


        console.log('localstorage', localStorage.user)
        console.log('localstorage', localStorage.dog)




    }



    submit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)






        if (this.state.dog.image_url) {
            this.uploadImage(this.sendDogInfo)

            console.log('image url  presnet  and navigating to dpo')
            window.location = this.state.dpo

        }
        else {
            this.sendDogInfo()
            console.log('navigating to profile')

            //changing this to avoid the user registering for free

            // window.open(this.state.dpo, '_blank')
            window.location = this.state.dpo

            console.log('no image url present')
        }


    }


    render() {
        return (

            <div className='row align-items-center justify-content-center dog_reg_full'>
                <Navbar color='white' navbar_dark={'navbar-dark'} />

                <div className="container-fluid">

                    <div className="row align-items-center justify-content-center">

                        {this.state.loaded && <div className="col-sm-9">
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
                                    getnameofDog2={this.props.getnameofDog2}
                                    getnext_dog_id={this.props.getnext_dog_id}
                                />


                            }
                            <div className="col-sm-3">
                                <PedShareForm label='Upload Pedigree so that we fill it for you' pedigree={true} />
                            </div>
                        </div>}


                        {!this.state.loaded &&
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