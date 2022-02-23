import React from 'react';
import '../css_files/pedigree.css'
import Profile_pic from '../images/logo2-removebg-preview (1).png'
import { PedigreeFrame, PedigreeDogCard, PedigreeDogCard2_dam, PedigreeDogCard2_sire } from './pedigree_cards'
import axios from 'axios';
import { withRouter } from './dog_registrations';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react'

const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

class Pedigree extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dog_sire_name: null,
            dog_dam_name: null
        }
        console.log(this.props)


        // Object.keys(this.props.dog).map((dog) => {
        //     // console.log(this.props.dog[dog])
        //     // console.log(dog)
        //     console.log(dog)

        // // console.log('this.prpos.sires', Object.values(this.props.dog.sires))
        // })
    }

    // console.log('props in pedigree frane',this.props.params)




    componentDidMount() {
        console.log('this.prpos in pedisgrweee', this.props.data)
        // this.getsire()
        // this.getsire()
        // this.getdam()

        // console.log('this.prpos in pedigree', this.props.Profilestate)





    };

    // getsire = () => {
    
    
    // }

    render() {
        return (
            <div>

                <div className='main'>
                    <div className='sires_row'>
                        <div className='sire'>

                            <div className=''>
                                {this.props.data.sire.public_id ?
                                      <img class='profile_img_dog'
                                      src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.data.sire.public_id}.png`}></img>
                       :
                                    <img class='profile_img_dog' src={Profile_pic}
                                        >
                                    </img>



                                }
                            </div>
                            { this.props.data.sire.name == 'Unkown Genealogy' ? 
                            <div className='sire_label'>
                                <p className='text-capitalize'>{this.props.data.sire.name}</p>
                            </div>

                            : 
                            <a style={{ color: 'whitesmoke' }} href={`/my_dogs/${this.props.data.sire.id}`}>
                                <div className='sire_label'>
                                    <p className='text-uppercase'>{this.props.data.sire.name}</p>
                                </div>
                            </a>

                            }
                            

                        </div>

                         <PedigreeFrame >
                            <PedigreeDogCard dog_id={this.props.data.siresire.id} dog_name={this.props.data.siresire.name}
                                dog_publicId={this.props.data.siresire.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.siredam.id} dog_name={this.props.data.siredam.name}
                                dog_publicId={this.props.data.siredam.public_id} />

                        </PedigreeFrame>

                        <PedigreeFrame>
                            <PedigreeDogCard dog_id={this.props.data.siresiresire.id} dog_name={this.props.data.siresiresire.name}
                                dog_publicId={this.props.data.siresiresire.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.siresiredam.id} dog_name={this.props.data.siresiredam.name}
                                dog_publicId={this.props.data.siresiredam.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.siredamsire.id} dog_name={this.props.data.siredamsire.name}
                                dog_publicId={this.props.data.siredamsire.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.siredamdam.id} dog_name={this.props.data.siredamdam.name}
                                dog_publicId={this.props.data.siredamdam.public_id} />
                        </PedigreeFrame> 


                    </div>

                    <div className='sires_row'>
                        <div className='sire'>

                            <div className=''>
                                {this.props.data.dam.public_id ?
                                                 <img class='profile_img_dog'
                                                 src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.data.dam.public_id}.png`}></img>
                               :
                                    <img className='profile_img_dog' src={Profile_pic}
                                        >
                                    </img>



                                }                            </div>
                            { this.props.data.dam.name == 'Unkown Genealogy' ? 
                            <div className='sire_label'>
                                <p className='text-capitalize'>{this.props.data.dam.name}</p>
                            </div>

                            : 
                            <a style={{ color: 'whitesmoke' }} href={`/my_dogs/${this.props.data.dam.id}`}>
                                <div className='sire_label'>
                                    <p className='text-uppercase'>{this.props.data.dam.name}</p>
                                </div>
                            </a>

                            }

                                
                        </div>

                      <PedigreeFrame >
                            <PedigreeDogCard dog_id={this.props.data.damsire.id} dog_name={this.props.data.damsire.name}
                            dog_publicId={this.props.data.damsire.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.damdam.id} dog_name={this.props.data.damdam.name}
                            dog_publicId={this.props.data.damdam.public_id} 
                             />

                        </PedigreeFrame>

                        <PedigreeFrame>
                            <PedigreeDogCard dog_id={this.props.data.damsiresire.id} dog_name={this.props.data.damsiresire.name}
                            dog_publicId={this.props.data.damsiresire.public_id}  />
                            <PedigreeDogCard dog_id={this.props.data.damsiredam.id} dog_name={this.props.data.damsiredam.name} 
                            dog_publicId={this.props.data.damsiredam.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.damdamsire.id} dog_name={this.props.data.damdamsire.name} 
                            dog_publicId={this.props.data.damdamsire.public_id} />
                            <PedigreeDogCard dog_id={this.props.data.damdamdam.id} dog_name={this.props.data.damdamdam.name} 
                            dog_publicId={this.props.data.damdamdam.public_id} />
                        </PedigreeFrame>
 

                    </div>


                </div>
            </div >



        )
    }
}

export default Pedigree;