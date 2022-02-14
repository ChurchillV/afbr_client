import React from 'react';
import '../css_files/profile.css'
import { Link } from 'react-router-dom';
import {Image} from 'cloudinary-react'



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

        return Object.keys(this.props.dog).map((dog) => {
            // console.log(this.props.dog[dog])
            // console.log(dog)
            return <h5 className='profile_card_p mt-1'>{dog}:&nbsp;&nbsp;{this.props.dog[dog]}</h5>
        })
        
    }
    

    

    render(){
        return (
            <div className='card_'>

                {/* <Image
                            style={{width:200}}
                             cloudName='daurieb51'
                            publicId='https://res.cloudinary.com/daurieb51/image/upload/v1642082142/hwznl698fndnwqhmdnhn.png'
                            /> */}
                
                {this.props.dog.public_id ? 
                // <Image
                //  class='profile_img_dog'
                //  cloudName='daurieb51'
                //     publicId={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog.public_id}.png`}
                
                <img class='profile_img_dog'
                src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.dog.public_id}.png`}></img>

               : 
                <img class='profile_img_dog' src={this.props.image_src} 
                >
                </img>

                
            
            }
                      
                            
                            {this.info()}
                
               
            
            </div>
            
        )
    }
    
    
}



export default Profile_Card;