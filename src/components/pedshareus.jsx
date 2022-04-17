import React from "react";
import axios from 'axios'
import { url } from "./weburl";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BeatLoader } from "react-spinners";


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
        this.getTransactUrl()
        this.getcurrentuser()
    }
    handleImage = (e) => {
        this.setState({ imageSelected: e.target.files[0] },
            () => {
                console.log(this.state)
                this.uploadImage()
            })


    }
    getTransactUrl = () => {

        axios.post(`${url}api/dpo/transact`, {
            transaction_name: 'Litter Registrations',
            transaction_cost: 0.02
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

        this.sendLitRegEmail()
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
                                
                            <input type='submit' className='btn btn-success' onClick={this.submit}></input>
                        </div>
                    </form>
                </div>
                    : <BeatLoader color="white" />
                }

            </div>
        )
    }

}