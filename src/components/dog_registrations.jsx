import React from "react";
import Navbar from "./navbar";

import RegisterForm from './register_form'
import axios from 'axios';

import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';


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
            },

            sires: {

            },

            dams: {

            },
            edit: false,
            images: [],
            image_urls: []

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


        // if (this.state.images < 1)
        //     return;
        // else {
        //     const newImageUrls = [];
        //     this.state.images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
        //     this.setState({ ...this.state, image_urls: newImageUrls })
        // }
        //do so that this is only called when it is to be editted
        axios
            .get(`http://localhost:8000/api/dogs/${this.props.params.dog_id}`)
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
            .get(`http://localhost:8000/api/dogs/sires`)
            .then((res) => {

                console.log(res.data);
                this.setState({ sires: res.data }, () => console.log(this.state))
                // console.log('data',data) 
            })
            .catch((err) => {
                console.log("Error couldn't get sires");
                console.log(err.message);
            });


        //get all dams

        axios
            .get(`http://localhost:8000/api/dogs/dams`)
            .then((res) => {

                console.log(res.data);
                this.setState({ dams: res.data }, () => console.log(this.state))
                console.log('herre')
                // console.log('data',data) 
            })
            .catch((err) => {
                console.log("Error couldn't get dams");
                console.log(err.message);
            });

    }


    onImageChange = (e) => {
        console.log('here')
        // this.setState({...this.state,'a':'1'}, ()=> console.log(this.state))
        this.setState({ images: e.target.files }, () => {
            console.log('image uploadad', e.target.files[0], this.state)
            axios
            .post(`http://localhost:8000/api/dogs/pictures`)
            .then((res) => {

              console.log('succsedffulst u[lod')
            })
            .catch((err) => {
                console.log("Error couldn't upload pix");
                console.log(err.message);
            });
        })
    }


    handleChange = (e) => {

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



    edit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(e.target.sex)
        // console.log(e.target.value)


        axios
            .put(`http://localhost:8000/api/dogs/${this.props.params.dog_id}`, this.state.dog)
            .then((res) => {

                console.log(res.data.message);
                console.log('editeed')
            })
            .catch((err) => {
                console.log("Error couldn't edit Dog");
                console.log(err.message);
            });
    }

    submit = (e) => {

        e.preventDefault()

        // setData((data) => ({...data, [e.target.name]: e.target.value }))
        console.log(this.state)
        // console.log(e.target.name)
        // console.log(e.target.value)
        // console.log(e.target.sex)
        // console.log(e.target.value)


        axios
            .post("http://localhost:8000/api/dogs", this.state.dog)
            .then((res) => {

                console.log(res.data.message);
                console.log('dog created/editted')
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

        console.log(e.target.image.value)
        axios
            .post("http://localhost:8000/api/pictures", e.target.image.value)
            .then((res) => {

                console.log(res.data.message);
                console.log('image loaded successfully')
                

            })

            .catch((err) => {
                console.log("Error couldn't send image");
                console.log(err.message);
            });

        



    }


    render() {
        return (
            <div className='row align-items-center justify-content-center dog_reg_full'>
                <Navbar color='white' />
                <div className="container-fluid">

                    <div className="row align-items-center justify-content-center">


                        <div className="col-md-">
                            {this.state.edit ?
                                <RegisterForm dog={this.state.dog} sires={this.state.sires}
                                    dams={this.state.dams} submit={this.edit} handleChange={this.handleChange} />
                                :
                                <RegisterForm dog={this.state} to_sires_first={this.props.to_sires_first}
                                    to_dams_first={this.props.to_dams_first}
                                    // to_sires_sires_firstgen={this.props.to_sires_sires_firstgen}
                                    // to_sires_dams_firstgen={this.props.to_sires_dams_firstgen}
                                    // to_dams_sires_firstgen={this.props.to_dams_sires_firstgen}
                                    // to_dams_dams_firstgen={this.props.to_dams_dams_firstgen}
                                    image_urls={this.state.image_urls}
                                    onImageChange={this.onImageChange}
                                    sires={this.state.sires}
                                    dams={this.state.dams}

                                    submit={this.submit} handleChange={this.handleChange}
                                    getdogid={this.props.getdogid}
                                    getnameofDog={this.props.getnameofDog}
                                    getnameofDog2={this.props.getnameofDog2}
                                    getnext_dog_id={this.props.getnext_dog_id} />

                            }
                            {/*  */}
                        </div>
                        <div className="col-md- dog_reg_pic_row align-self-start">
                            <Link to='/dog_registrations/pedig-main'><p style={{ color: 'white' }}>Add pedigree manually</p></Link>
                        </div>


                    </div>

                </div>


            </div>






        )
    }


}

export default withRouter(DogRegistration);