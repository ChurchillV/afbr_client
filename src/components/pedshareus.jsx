import React from "react";
import Navbar from "./navbar";
import axios from 'axios'


export class PedShareForm extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            image_url : '',
            imageSelected: '',
            public_id: ''
        }
    }
    handleImage = (e) => {
        this.setState({imageSelected: e.target.files[0]},
             ()=> {
                 console.log(this.state)
                 this.uploadImage()
             })
       

    }

    uploadImage = () => {
        const formData = new FormData()
        formData.append('file', this.state.imageSelected)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) => {
                
                this.setState({ ...this.state,
                     public_id: response.data.public_id 
                },() => console.log(this.state)
                    )

                    console.log('responseeeee', response.data.public_id)
                    console.log('image successfuly uploaded thank you jehovah')
            })
            .catch((err) => console.log(err))
    }
    render(){
        return(
            <div className="row align-items-center justify-content-center">
                
                <div className='row align-items-center justidy-content-center'>
                                    <form onSubmit={(e) => {
                                        e.preventDefault()
                                        this.uploadImage()
                                    }}>
    
                                        <div className='form-row'>
                                            <div className='form-group'>
                                                <label for="inputimage">Upload Pedigree &nbsp;</label>
                                                <input type='file' name='image' className='btn btn-default' onChange={this.handleImage} accept='image/*' id='inputimage' ></input>
                                                <img  src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.public_id}.png`} width='100px'></img>
                                            </div>
                                            <input type='submit' className='btn btn-success'></input>
                                        </div>
                                    </form>
                                </div>
            </div>
        )
    }
 
}