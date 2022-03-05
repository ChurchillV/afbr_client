import React from 'react';
import '../css_files/profile.css'
import $ from 'jquery'



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


    componentDidMount = () => {
        if (window.screen.width < 660){
            console.log('hide the following')
            $('.to_be_hidden').css('display', 'none')
            $('_to_be_hidden').on(
                'click', function(){
                    $('_to_be_hidden').slideToggle()
                }
            )
        }
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
            <div className='container-fluid card_ profile_card_fluid'>


                <div className='row justify-content-center align-items-center'>
                    <div className='col-sm-6'>
                        <h3>{this.props.dog.name}</h3>
                        {this.props.dog.public_id ?
                            <img class='main_profile_img_dog'
                                src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog.public_id}.png`}></img>

                            :
                            <img class='main_profile_img_dog'src={this.props.image_src}
                            >
                            </img>

                            



                        }
                    </div>
                    <div className='col-sm-6 to_be_hidden'>
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