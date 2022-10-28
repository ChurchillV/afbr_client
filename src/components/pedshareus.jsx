import React from "react";
import axios from 'axios'
import { url } from "./weburl";
// import { BeatLoader } from "react-spinners";
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners'
import CountryContext from "./country_context";



export class PedShareForm extends React.Component {

    static contextType = CountryContext

    constructor(props) {
        super(props)
        this.state = {
            image_url: '',
            imageSelected: '',
            public_id: '',
            user: '',
            loaded: false,
            submit_button: 'Submit'
        }
    }

    handleImage = (e) => {
        this.setState({ imageSelected: e.target.files[0] },
            () => {
                this.uploadImage()
            })


    }


    getTransactUrl = () => {
        axios.post(`${url}api/expresspaygh/dpo_transact`, {
            location: this.context.location,
            transaction_name: 'litter_registrations',
            transaction_cost: this.props.price,
            username: this.context.user.displayName,
            email: this.context.user.email
        })
            .then((res) => {
                this.setState({ dpo: res.data, dpo_loaded: true }, () => {
                    window.location = this.state.dpo

                })

            })

            .catch((err) => console.log(err))
    }



    sendtolocal = () => {
        localStorage.setItem("public_id",

            JSON.stringify(this.state.public_id)

        )

        localStorage.setItem("user",

            // JSON.stringify(this.state.firebaseUser)
            JSON.stringify(this.context.user)


        )
    }

    //trial
    sendLitRegEmail = () => {
        axios
            .post(`${url}api/email/litter`, {
                // user: this.state.firebaseUser,
                user: this.context.user,

                public_id: this.state.public_id

            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    sendPedRegEmail = () => {
        axios
            .post(`${url}api/email/pedigree`, {
                // user: this.state.firebaseUser,
                user: this.context.user,

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
                    public_id: response.data.public_id,
                }, () => console.log(this.state)
                )

                console.log('responseeeee', response.data.public_id)
                console.log('image successfuly uploaded thank you jehovah')
            })
            .catch((err) => console.log(err))
    }

    submit = (e) => {
        e.preventDefault()
        this.setState({submit_button: 'Loading just a sec'})
        if (this.props.litter_registrations) {
            this.getTransactUrl()
            this.sendtolocal()

        }
        if (this.props.pedigree) {
            this.sendPedRegEmail()
        }



        // window.open(this.state.dpo, '_blank')
    }
    render() {
        return (
            <div className="row align-items-center justify-content-center">
                {this.context.user ? <div className='row align-items-center justidy-content-center'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        this.uploadImage()
                    }}>

                        <div className='form-row align-items-start justify-content-start'>
                            <div className='form-group col-sm-12'>
                                <label for="inputimage">{this.props.label} &nbsp;</label>
                                <input type='file' name='image' className='text-white' onChange={this.handleImage} id='inputimage' ></input>
                                {this.state.public_id && <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.public_id}.png`} width='100px'></img>
                                }

                            </div>

                            {!this.props.pedigree ?
                                <input type='submit' value={this.state.submit_button} className='btn btn-success' onClick={this.submit}></input> :
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
                                <input type='submit' value="Upload Pedigree"
                                className='btn btn-success' onClick={this.submit}></input>

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