import React from 'react';
import '../css_files/profile.css'
import $ from 'jquery'
import axios from 'axios'
import { url } from './weburl';


const styles = {
    properties : {
        borderBottom: '2px solid white'
    },
    main_properties: {
        fontWeight: 'bold'
    }
}
const {properties} = styles
const main_properties = styles


//to be edited soon
class Profile_Card extends React.Component {


    // for (const [key, value] of Object.entries(props.dog)) {
    //     console.log(key,value)
    //   }

    constructor(props) {
        super(props)
        console.log('this.prpos', this.props)
        this.state = {
            sire: '',
            dam: ''
        }

  }
    componentDidMount = () => {
        // if (window.screen.width < 660) {
        //     console.log('hide the following')
        //     $('.show_details').on(
        //         'click', function () {
        //             console.log('show details clicked')
        //             $('.to_be_hidden').slideToggle()
        //         }
        //     )
        // }
    }

  

    
    info = () => {
        

        return <div className='text-capitalize align-items-center justify-content-center'>
            <div className='col-lg-'>
                <p className='smallrem '>Registered Name: &nbsp;  <span className='font-weight-bold'>{this.props.dog['name']} </span></p>
                <p className='smallrem' style={properties}>AFBR_NO:  &nbsp;<span className='font-weight-bold'>{this.props.dog['afbr_no']}</span> </p>

                <p className='smallrem'>Kennel Name:&nbsp; <span className='font-weight-bold' >{this.props.dog['kennel_name']}</span>  </p>
                <p className='smallrem'>Current Owner: <span className='font-weight-bold'> &nbsp;{this.props.dog['current_owner']}</span> </p>
                <p className='smallrem'>Sire:<span className='font-weight-bold'>&nbsp; {this.props.sire.name} </span> </p>
                <p className='smallrem'style={properties} >Dam: <span className='font-weight-bold'>&nbsp; {this.props.dam.name} </span></p>

                <p className='smallrem'>Age: &nbsp; <span className='font-weight-bold'>{this.props.dog['age']}</span> </p>
                <p className='smallrem ' >Breed:  &nbsp;<span className='font-weight-bold'>{this.props.dog['breed']}</span> </p>

                <p className='smallrem'>Height: &nbsp; <span className='font-weight-bold'>{this.props.dog['breed']}</span> </p>
                <p className='smallrem'>Weight:  &nbsp; <span className='font-weight-bold'>{this.props.dog['breed']}</span> </p>
                <p className='smallrem' style={properties}>Color: &nbsp; <span className='font-weight-bold'>{this.props.dog['color']} </span></p>

                <p className='smallrem'>Land Of Standing: &nbsp; <span className='font-weight-bold'> {this.props.dog['land_of_standing']}</span> </p>
                <p className='smallrem'>Place of Birth:  &nbsp; <span className='font-weight-bold'>{this.props.dog['place_of_birth']} </span></p>
                <p className='smallrem'>Date of Birth:  &nbsp; <span className='font-weight-bold'>{this.props.dog['date_of_birth']} </span></p>




            </div>
        </div>

    }




    render() {
        return (
            <div className='container-fluid card_ profile_card_fluid'>


                <div className='row justify-content-center align-items-center'>
                    <div className='col-5'>
                        <h3>{this.props.dog.name}</h3>
                        {this.props.dog.public_id ?
                            <img class='main_profile_img_dog'
                                src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog.public_id}.png`}></img>

                            :
                            <img class='main_profile_img_dog' src={this.props.image_src}
                            >
                            </img>





                        }
                     

                    </div >

                    <div className='col-6 to_be_hidden' >
                        <div>
                            {this.info()}

                        </div>
                    </div>
                </div>



            </div>

        )
    }


}



export default Profile_Card;