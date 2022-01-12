import React from 'react';
import '../css_files/App.css'
import { Link } from 'react-router-dom';


//to be edited soon
class Try extends React.Component {


    // for (const [key, value] of Object.entries(props.dog)) {
    //     console.log(key,value)
    //   }

    constructor(props) {
        super(props)
        console.log('this.prpos', this.props)
        Object.keys(this.props.dog).map((dog) => {
            // console.log(this.props.dog[dog])
            // console.log(dog)
            console.log('im here but you cant see me', dog)
        
        // console.log('this.prpos.sires', Object.values(this.props.dog.sires))
        })
    }

    info = () => {

        return Object.keys(this.props.dog).map((dog) => {
            // console.log(this.props.dog[dog])
            // console.log(dog)
            return <a href='/my_dogs/3'><p>{dog}:&nbsp;&nbsp;{this.props.dog[dog]}</p></a>
        })
        
    }
    
    render(){
        return (
            <div className='card_'>
                
    
                    {/* <img src={this.props.image_src} height={this.props.height} width={this.props.width}></img> */}
                {this.info()}
                hello
                
               
            
            </div>
            
        )
    }
    
    
}



export default Try;