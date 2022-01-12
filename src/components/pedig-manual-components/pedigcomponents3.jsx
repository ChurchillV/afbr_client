import React from 'react';
import { PedigNav } from './pedigcomponents';
import Dog_registrations from '../dog_registrations';
import axios from 'axios'


export class PedigDamSireSire extends React.Component {
    appendtodamsiresire = () =>{
        
        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.damsire.id}`, {'sire': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog dam sier sire successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtodamsiresire");
            console.log(err.message);
        });
}

    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
                            dam sire sire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamsiresire} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigDamSireDam extends React.Component {
    appendtodamsiredam = () =>{
        
        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.damsire.id}`, {'dam': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog dam sire dam successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtodamsiredam");
            console.log(err.message);
        });
}

    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
                            dam sire dam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamsiredam} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigDamDamSire extends React.Component {
    appendtodamdamsire = () =>{
        
        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.damdam.id}`, {'sire': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog dam dam sire successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtodamdamsire");
            console.log(err.message);
        });
}

    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
                            dam dam sire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamdamsire} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigDamDamDam extends React.Component {
    appendtodamdamdam = () =>{
        
        console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.damdam.id}`, {'dam': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog dam dam dam successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtodamdamdam");
            console.log(err.message);
        });
}

    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="">
                            dam dam dam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamdamdam} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}