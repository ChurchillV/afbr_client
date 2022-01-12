import React from 'react';
import { PedigNav } from './pedigcomponents';
import Dog_registrations from '../dog_registrations';
import axios from 'axios'


export class PedigSireSireSire extends React.Component {
    appendtosiresiresire = () =>{
        
        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('next dog id', this.props.next_dog_id)
        console.log('siremsire id', this.props.pedigree.siresire.id)

        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.siresire.id}`, {'sire': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog sire sire sire successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtosiresiresire");
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
                            Sire sire sire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiresiresire} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigSireSireDam extends React.Component {
    appendtosiresiredam = () =>{
        
        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.siresire.id}`, {'dam': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog sire sire dam successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtosiresiredam");
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
                            siresiredam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiresiredam} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigSireDamSire extends React.Component {
    appendtosiredamsire = () =>{
        
        console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.siredam.id}`, {'sire': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog sire dam sire successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtosiredamsire");
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
                            siredamsire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiredamsire} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}


export class PedigSireDamDam extends React.Component {
    appendtosiredamdam = () =>{
        
        console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
     axios
        .put(`http://localhost:8000/api/dogs/${this.props.pedigree.siredam.id}`, {'dam': this.props.next_dog_id.id })
        .then((res) => {

            console.log(res.data.message);
            console.log('dog sire dam dam successfully appended')
            this.props.refresh_pedigree()
        })
        .catch((err) => {
            console.log("Error couldn't append  Dog, called in append to appendtosiredamdam");
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
                            sire dam dam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiredamdam} 
                                refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                        getnext_dog_id={this.props.getnext_dog_id} />
                    </div>

                </div>


            </div>
        )
    }
}