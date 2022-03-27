import { withRouter } from "./pedigree_cards"
import React from "react";
import { Link } from "react-router-dom";
import Profile from "./profile";
import axios from 'axios';
import { url } from "./weburl";


class PersonalForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          
            user: {

            }
        };
    }

    componentDidMount = () => {
        console.log(this.props.params.uid)
        this.changeUserToId()
    }

   


    changeUserToId = () => {
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
                    user: { ...this.state.user, public_id: response.data.public_id }
                },
                    () => {
                        console.log(this.state.user)
                        callback()
                        console.log('called the callback')
                        this.props.navigate('/profile')

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
            user: { ...this.state.user, image_url: e.target.files[0].name }
        },
            this.addImageSelected(e))


    }

    updateUserInfo = () => {
        axios
            .post(`${url}api/users/edit/${this.props.params.uid}`, this.state.user)
            .then((res) => {

                console.log(res.data.message);
                console.log('editeed')
            })
            .catch((err) => {
                console.log("Error couldn't edit user");
                console.log(err.message);
            });
    }

    handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        let user = {
            [name]: value,

        }
        // this.setState((data) => ({ ...data, [e.target.name]: e.target.value }));
        this.setState({
            ...this.state,
            user: { ...this.state.user, [name]: value }
        }, () => {
            console.log(this.state)
            if (this.props.newdog) {

                console.log('changing statte')
            }
            if (this.props.appenddog) {
                console.log(this.props)
                console.log('changing state')
            }
        }
        )


        //change this to getteing the id later




    }

    submit = (e) => {
        e.preventDefault()
        this.uploadImage(this.updateUserInfo)
        // this.updateUserInfo()
        console.log('submitting')

    }


    

    render() {
        return (
            <div className="container-fluid " style={{color: 'black'}}>
                <Profile class='profile_first'>

                <form onSubmit={(e) => {
                this.submit(e)
            }}
                method='post' className='text-dark align-items-start justify-content-start'>

            
                <div className='form-row'>
                    <div className='form-group smallrem text-dark'>
                        <label for="inputimage">Change Profile Image &nbsp;</label>
                        <input type='file' onChange={this.handleImageChange} name='image' accept='image/*' id='inputimage' ></input>
                       
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group  smallrem text-dark">
                        <label for="inputName">Name</label>
                        <input name='name' onChange={this.handleChange}  value={this.state.user.username} type="text" class="form-control" id="inputName" placeholder="Name of User"></input>
                    </div>
                </div>
                <div className='form-row'>
                    <div class="form-group  smallrem  col-md- text-dark">
                        <label for="inputAge">Phone Number</label>
                        <input name='phone_number'  type="number" class="form-control" value={this.state.user.phone_number}
                         id="inputAge" onChange={this.handleChange}  placeholder="Phone Number"></input>

                    </div>
                  
                </div>


                <div class="form-row">
                    <div class="form-group  smallrem col-md-">
                        <label for="Breed">Email</label>
                        <input name='email' type="email" value={this.state.user.email} 
                        class="form-control" onChange={this.handleChange}  id="Breed" placeholder="Email Address"></input>
                    </div>

                </div>

                <div class="form-row">
                    <div class="form-group smallrem  col-md-">
                        <label for="Breed">Contact Address</label>
                        <input name='contact_address'value={this.state.user.contact_address} type="text" class="form-control" 
                        id="Breed" onChange={this.handleChange}  placeholder="Contact"></input>
                    </div>

                </div>

            
                <button type="submit" class="btn btn-warning">Register</button>
                 
      
            </form>
                </Profile>
            </div>
        )
    }

}

export default withRouter(PersonalForm)