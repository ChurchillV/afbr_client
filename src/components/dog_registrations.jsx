import React from "react";
import Navbar from "./navbar";

import RegisterForm from './register_form'
import axios from 'axios';
import UserContext from '../App'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { Link, useLocation, useNavigate, useParams, Navigate } from 'react-router-dom';
import { url } from "./weburl";


export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

class DogRegistration extends React.Component {
    static contextType = UserContext;

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



    componentDidMount = () => {

        this.getcurrentuser()

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

        //get all sires

        axios
            .get(`${url}api/dogs/sires`)
            .then((res) => {

                console.log(res.data);
                this.setState({ ...this.state, sires: res.data }, () => console.log(this.state))
                // console.log('data',data) 
            })
            .catch((err) => {
                console.log("Error couldn't get sires");
                console.log(err.message);
            });


        //get all dams

        axios
            .get(`${url}api/dogs/dams`)
            .then((res) => {

                console.log(res.data);
                this.setState({ ...this.state, dams: res.data }, () => console.log(this.state))
                console.log('herre')
                // console.log('data',data) 
            })
            .catch((err) => {
                console.log("Error couldn't get dams");
                console.log(err.message);
            });

    }


    getcurrentuser = (callback) =>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.setState({ ...this.state, firebaseUser: user }, () => {
                    console.log('on Authstate dog reg', this.state.firebaseUser)
                    // this.changeUserToId(callback)
                });
              
            } else {
                this.setState({ user: null });
                console.log('usershmm')

            }

            if (this.state.loading) {
                this.setState({ loading: false });
            }
        });
    }



    // changeUserToId = (callback) => {
    //     axios
    //         .get(`${url}api/users/getUserByUid/${this.state.firebaseUser.uid}`)
    //         .then((res) => {
    //             console.log(res.data)
    //             this.setState({
    //                 ...this.state, 
    //                 dog: {...this.state.dog, user: res.data[0].id}}, 
    //                () =>  {
    //                    console.log('chaingn dog registrations state after calling uid', this.state.dog)

    //                })
    //         })
            
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    uploadImage = (callback) => {
        // console.log(files[0])
        const formData = new FormData()
        formData.append('file', this.state.imageSelected)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) => {
                console.log('responseeeee', response.data.public_id)
                console.log('image successfuly uploaded thank you jehovah')
                this.setState({
                    ...this.state,
                    dog: { ...this.state.dog, public_id: response.data.public_id }
                },
                    () => {
                        console.log(this.state.dog)
                        callback()
                        console.log('called the callback')
                    })


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
    // console.log(data) 
    // function handleChange(e) {
    //     console.log('none')
    // }

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
        axios
            .post(`${url}api/dogs`, {dog:this.state.dog, user:this.state.firebaseUser})
            .then((res) => {

                console.log(res.data.message);
                console.log('dog created/editted')

                //new dog is used when filling the manual pedigree section
                if (this.props.newdog) {
                    this.props.getdogid()
                }
                if (this.props.appenddog) {
                    this.props.getnext_dog_id(this.props.appendto)
                }

            })


            .catch((err) => {
                console.log("Error couldn't create Dog");
                console.log(err.message);
            });

    }

    sendDogRegEmail = () => {
        axios
        .post(`${url}api/email/dog_registered`, { user: this.state.firebaseUser,
                    dog: this.state.dog })
        .then((res) => console.log('successfully sent email', res))
        .catch((err) => console.log(err))

        console.log('sendmail')
    }

    submit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)
        





        if (this.state.dog.image_url) {
            this.uploadImage(this.sendDogInfo)
            
            console.log('image url  presnet')

        }
        else {
            this.sendDogInfo()
            console.log('no image url present')
        }
        console.log('navigating to profile')
        this.sendDogRegEmail()
        this.props.navigate('/profile')

    }


    render() {
        return (

            <div className='row align-items-center justify-content-center dog_reg_full'>
                {this.props.navbar ? <Navbar color='white' /> : null}

                <div className="container-fluid">

                    <div className="row align-items-center justify-content-center">


                        <div className="col-md-9">
                            {this.state.edit ?
                                <RegisterForm dog={this.state.dog} sires={this.state.sires}
                                    dams={this.state.dams} submit={this.edit}
                                    handleChange={this.handleChange}
                                    image_urls={this.state.image_urls}
                                    uploadImagetodb={this.uploadImagetodb}
                                    uploadImage={this.uploadImage}
                                    handleImageChange={this.handleImageChange} />
                                :
                                <RegisterForm dog={this.state} to_sires_first={this.props.to_sires_first}
                                    to_dams_first={this.props.to_dams_first}
                                    // to_sires_sires_firstgen={this.props.to_sires_sires_firstgen}
                                    // to_sires_dams_firstgen={this.props.to_sires_dams_firstgen}
                                    // to_dams_sires_firstgen={this.props.to_dams_sires_firstgen}
                                    // to_dams_dams_firstgen={this.props.to_dams_dams_firstgen}
                                    image_urls={this.state.image_urls}
                                    handleImageChange={this.handleImageChange}
                                    sires={this.state.sires}
                                    dams={this.state.dams}
                                    uploadImagetodb={this.uploadImagetodb}
                                    uploadImage={this.uploadImage}
                                    submit={this.submit} handleChange={this.handleChange}
                                    getdogid={this.props.getdogid}
                                    getnameofDog={this.props.getnameofDog}
                                    getnameofDog2={this.props.getnameofDog2}
                                    getnext_dog_id={this.props.getnext_dog_id}
                                    saveAndEndHere={true}
                                    saveAndContinue={true} />


                            }

                        </div>
                        <div className="col-md-3">
                            <Link to='/dog_registrations/pedig-main'><p style={{ color: 'white' }}>Add pedigree manually</p></Link>
                        </div>


                    </div>

                </div>


            </div>






        )
    }


}

export default withRouter(DogRegistration);