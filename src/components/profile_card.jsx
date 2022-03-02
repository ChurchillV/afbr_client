import React from 'react';
import '../css_files/profile.css'
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react'



//to be edited soon
class Profile_Card extends React.Component {


    // for (const [key, value] of Object.entries(props.dog)) {
    //     console.log(key,value)
    //   }

    constructor(props) {
        super(props)
        console.log('this.prpos', this.props)






        // console.log('this.prpos.sires', Object.values(this.props.dog.sires))

    }



    info = () => {
        let ignore = ['id']
        return Object.keys(this.props.dog).map((dog) => {
            if (dog === 'id' || dog=='public_id' ||  dog=='user' ||
            dog=='image_url'){
                console.log(dog)
                console.log(true)
            }
            else{
                return <p className='profile_card_p text-capitalize' style={{ marginBottom: '0px' }}>{dog}:&nbsp;&nbsp;{this.props.dog[dog]}</p>

            }
        })

    }




    render() {
        return (
            <div className='container-fluid card_'>


                <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-6'>

                        {this.props.dog.public_id ?
                            <img class='main_profile_img_dog'
                                src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog.public_id}.png`}></img>

                            :
                            <img class='profile_img_dog' style={{width: '100%'}} src={this.props.image_src}
                            >
                            </img>



                        }
                    </div>
                    <div className='col-sm-6'>
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