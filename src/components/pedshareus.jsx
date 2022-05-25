import React from "react";
import axios from 'axios'
import { url } from "./weburl";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { BeatLoader } from "react-spinners";
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'



export class PedShareForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image_url: '',
            imageSelected: '',
            public_id: '',
            user: '',
            loaded: false
        }
    }

    componentDidMount = () => {

        // !this.props.pedigree && this.getTransactUrl()
        this.getcurrentuser()
    }
    handleImage = (e) => {
        this.setState({ imageSelected: e.target.files[0] },
            () => {
                console.log(this.state)
                this.uploadImage()
            })


    }

    componentDidUpdate(prevProps){
        if(prevProps.price !== this.props.price){
            this.setState({...this.state, price:this.props.price}, ()=>
            this.getTransactUrl()
            )
        }
        console.log(prevProps.price)
        console.log(this.props)
     }

    getTransactUrl = () => {
        console.log(this.props.price,'this.props.price')
        axios.post(`${url}api/dpo/transact`, {
            transaction_name: 'Litter_Registrations',
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

    sendtolocal = () => {
        localStorage.setItem("public_id",

            JSON.stringify(this.state.public_id)

        )

        localStorage.setItem("user",

            JSON.stringify(this.state.firebaseUser)

        )
    }

    //trial
    sendLitRegEmail = () => {
        axios
            .post(`${url}api/email/litter`, {
                user: this.state.firebaseUser,
                public_id: this.state.public_id

            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    sendPedRegEmail = () => {
        axios
            .post(`${url}api/email/pedigree`, {
                user: this.state.firebaseUser,
                public_id: this.state.public_id

            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    uploadImage = () => {
        const formData = new FormData()
        formData.append('file', this.state.imageSelected)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) => {

                this.setState({
                    ...this.state,
                    public_id: response.data.public_id
                }, () => console.log(this.state)
                )

                console.log('responseeeee', response.data.public_id)
                console.log('image successfuly uploaded thank you jehovah')
            })
            .catch((err) => console.log(err))
    }

    submit = (e) => {
        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)
        if (this.props.litter_registrations) {
            this.sendtolocal()

        }
        if (this.props.pedigree) {
            this.sendPedRegEmail()
        }


        if (this.props.litter_registrations) {
            window.location = this.state.dpo
        }


        // window.open(this.state.dpo, '_blank')
    }
    render() {
        return (
            <div className="row align-items-center justify-content-center">
                {this.state.loaded ? <div className='row align-items-center justidy-content-center'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.uploadImage()
                    }}>

                        <div className='form-row align-items-center justify-content-center'>
                            <div className='form-group col-sm-'>
                                <label for="inputimage">{this.props.label} &nbsp;</label>
                                <input type='file' name='image' className='btn btn-default text-white' onChange={this.handleImage} id='inputimage' ></input>
                                {this.state.public_id && <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.public_id}.png`} width='100px'></img>
                                }

                            </div>

                            {this.state.dpo && !this.props.pedigree ?
                                <input type='submit' className='btn btn-success' onClick={this.submit}></input> :
                                <div>{
                                    !this.props.pedigree ?
                                        <div>
                                            <p>Loading payment link. Just a sec</p>

                                            <BeatLoader color="white" />

                                        </div>
                                        : <p></p>

                                }

                                </div>}

                            {this.props.pedigree &&
                                <input type='submit' className='btn btn-success' onClick={this.submit}></input>

                            }
                            {/* {!this.props.litter_registrations && <input type='submit' className='btn btn-success' onClick={this.submit}></input>}  */}

                        </div>
                    </form>
                </div>
                    :
                    <div>
                        <p className="text-warning">Please signup/login before you can proceed</p>

                        <BeatLoader color="white" />
                    </div>

                }

            </div>
        )
    }

}