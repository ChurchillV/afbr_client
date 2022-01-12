import React from 'react';
import '../css_files/profile.css'
import { Link } from 'react-router-dom';


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
            return <p className='profile_card_p'>{dog}:&nbsp;&nbsp;{this.props.dog[dog]}</p>
        })
        
    }
    
    render(){
        return (
            <div className='card_'>
                
    
                <img src={this.props.image_src} height={this.props.height} width={this.props.width}></img>
                {this.info()}
                
               
            
            </div>
            
        )
    }
    
    
}



export default Profile_Card;