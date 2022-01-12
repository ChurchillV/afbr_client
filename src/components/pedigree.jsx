import React from 'react';
import '../css_files/pedigree.css'
import Profile_pic from '../images/profile.jpg'
import { PedigreeFrame, PedigreeDogCard, PedigreeDogCard2_dam, PedigreeDogCard2_sire } from './pedigree_cards'
import axios from 'axios';
import { withRouter } from './dog_registrations';
import { Link } from 'react-router-dom';

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
    //     //get dog sire name image
    //     axios
    //         .get(`http://localhost:8000/api/dogs/${this.props.Profilestate.dog_sire_sire_id}`)
    //         .then((res) => {

    //             this.setState({ dog_sire_id: res.data[0].sire }, () => {
    //                 this.getsire_name()
    //                 console.log('finished setting state in pedigree card', this.state)
    //             }
    //             )
    //             console.log(res.data)

    //         }
    //         )
    //         .catch((err) => {
    //             console.log(this.props.Profilestate.dog_sire_sire_id)
    //             console.log("Error couldnt get Dog in com method");
    //             console.log(err.message);
    //         });

    // }

    // getsire_name = () => {
    //     //get dog sire name image
    //     axios
    //         .get(`http://localhost:8000/api/dogs/${this.props.Profilestate.dog_sire_sire_id}`)
    //         .then((res) => {

    //             this.setState({ dog_sire_name: res.data[0].name }, () => console.log('finished setting state in pedigree card', this.state))
    //             console.log(res.data)

    //         }
    //         )
    //         .catch((err) => {
    //             console.log("Error couldnt get Dogin p");
    //             console.log(err.message);
    //         });

    // }

    render() {
        return (
            <div>

                <div className='main'>
                    <div className='sires_row'>
                        <div className='sire'>

                            <div className=''>
                                <img src={Profile_pic} height='200vw' width='200vw' className='image'></img>
                            </div>
                            <a style={{color:'whitesmoke'}} href={`/my_dogs/${this.props.data.sire.id}`}>
                                <div className='sire_label'>
                                    {this.props.data.sire.name}
                                </div>
                            </a>


                        </div>

                        <PedigreeFrame >
                            <PedigreeDogCard dog_id={this.props.data.siresire.id} dog_name={this.props.data.siresire.name} /> 
                            <PedigreeDogCard dog_id={this.props.data.siredam.id} dog_name={this.props.data.siredam.name} />

                        </PedigreeFrame>

                        <PedigreeFrame>
                            <PedigreeDogCard dog_id={this.props.data.siresiresire.id} dog_name={this.props.data.siresiresire.name} />
                            <PedigreeDogCard dog_id={this.props.data.siresiredam.id} dog_name={this.props.data.siresiredam.name} />
                            <PedigreeDogCard dog_id={this.props.data.siredamsire.id} dog_name={this.props.data.siredamsire.name} />
                            <PedigreeDogCard dog_id={this.props.data.siredamdam.id} dog_name={this.props.data.siredamdam.name} />
                        </PedigreeFrame>


                    </div>

                    <div className='sires_row'>
                        <div className='sire'>

                            <div className=''>
                                <img src={Profile_pic} height='200vw' width='200vw' className='image'></img>
                            </div>
                            <a style={{color:'whitesmoke'}} href={`/my_dogs/${this.props.data.dam.id}`}>
                                <div className='sire_label'>
                                    {this.props.data.dam.name}
                                </div>
                            </a>


                        </div>

                        <PedigreeFrame >
                            <PedigreeDogCard dog_id={this.props.data.damsire.id} dog_name={this.props.data.damsire.name} /> 
                            <PedigreeDogCard dog_id={this.props.data.damdam.id} dog_name={this.props.data.damdam.name} />

                        </PedigreeFrame>

                        <PedigreeFrame>
                            <PedigreeDogCard dog_id={this.props.data.damsiresire.id} dog_name={this.props.data.damsiresire.name} />
                            <PedigreeDogCard dog_id={this.props.data.damsiredam.id} dog_name={this.props.data.damsiredam.name} />
                            <PedigreeDogCard dog_id={this.props.data.damdamsire.id} dog_name={this.props.data.damdamsire.name} />
                            <PedigreeDogCard dog_id={this.props.data.damdamdam.id} dog_name={this.props.data.damdamdam.name} />
                        </PedigreeFrame>


                    </div>
                    

                </div>
            </div >



        )
    }
}

export default Pedigree;