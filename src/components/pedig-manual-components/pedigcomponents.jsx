import React from "react";
import { Link } from "react-router-dom";
import Dog_registrations from "../dog_registrations";
import './css_files/pedig.css'
import axios from 'axios'
import Navbar

    from "../navbar";
import PedigreeCartoon from "../pedigree-manual";
import { Progress } from "./progress";


export class PedigNav extends React.Component {
    componentDidMount = () => {
        console.log(this.props.pedigree)

    }

    render() {

        return (

            <div className="row_2 align-items-center justify-content-center">
                <Navbar color='white' />
                <div className="paginatee">

                    <Link to='../dog_registrations/pedig-main' className="page">1</Link>

                    {this.props.pedigree.maindog.id != 404 ?
                        <Link to='../dog_registrations/pedigsire' className="page">2</Link>
                        : <p className="unavailable">2</p>

                    }
                    {this.props.pedigree.maindog.id != 404 ?
                        <Link to='../dog_registrations/pedigdam' className="page">3</Link>
                        : <p className="unavailable">3</p>

                    }
                    {this.props.pedigree.sire.id != 404 ?
                        <Link to='../dog_registrations/pedigsiresire' className="page">4</Link>
                        : <p className="unavailable">4</p>

                    }

                    {this.props.pedigree.sire.id != 404 ?
                        <Link to='../dog_registrations/pedigsiredam' className="page">5</Link>
                        : <p className="unavailable">5</p>

                    }
                    {this.props.pedigree.dam.id != 404 ?
                        <Link to='../dog_registrations/pedigdamsire' className="page">6</Link>
                        : <p className="unavailable">6</p>

                    }
                    {this.props.pedigree.dam.id != 404 ?
                        <Link to='../dog_registrations/pedigdamdam' className="page">7</Link>
                        : <p className="unavailable">7</p>

                    }
                    {this.props.pedigree.siresire.id != 404 ?
                        <Link to='../dog_registrations/pedigsiresiresire' className="page">8</Link>
                        : <p className="unavailable">8</p>

                    }
                    {this.props.pedigree.siresire.id != 404 ?
                        <Link to='../dog_registrations/pedigsiresiredam' className="page">9</Link>
                        : <p className="unavailable">9</p>

                    }

                    {this.props.pedigree.siredam.id != 404 ?
                        <Link to='../dog_registrations/pedigsiredamsire' className="page">10</Link>
                        : <p className="unavailable">10</p>

                    }
                    {this.props.pedigree.siredam.id != 404 ?
                        <Link to='../dog_registrations/pedigsiredamdam' className="page">11</Link>
                        : <p className="unavailable">11</p>

                    }

                    {this.props.pedigree.damsire.id != 404 ?
                        <Link to='../dog_registrations/pedigdamsiresire' className="page">12</Link>
                        : <p className="unavailable">12</p>

                    }
                    {this.props.pedigree.damsire.id != 404 ?
                        <Link to='../dog_registrations/pedigdamsiredam' className="page">13</Link>
                        : <p className="unavailable">13</p>

                    }
                    {this.props.pedigree.damdam.id != 404 ?
                        <Link to='../dog_registrations/pedigdamdamsire' className="page">14</Link>
                        : <p className="unavailable">14</p>

                    }
                    {this.props.pedigree.damdam.id != 404 ?
                        <Link to='../dog_registrations/pedigdamdamdam' className="page">15</Link>
                        : <p className="unavailable">15</p>

                    }
                </div>
            </div>



        )
    }
}


export class PedigMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valuenow: '0%'
        }
    }
    // componentDidMount = () => {
    //     console.log(this.props.pedigree)
    //     this.setvaluenow()
    // }

    // setvaluenow = (valuenow)=>{
    //     this.setState({valuenow : valuenow})
    // }
    render() {

        return (

            <div className="container-fluid" >
                <div className="row align-items-center pedigmain_full justify-content-center">
                    <PedigNav pedigree={this.props.pedigree} />
                    <Progress pedigree={this.props.pedigree} />

                    <div className="row_ pedig_main align-items-center justify-content-center">
                        <div>
                            Dog
                        </div>
                        <div>
                            <Dog_registrations navbar={false} newdog={true} getnameofDog={this.props.getnameofDog} getdogid={this.props.getdogid} />

                        </div>
                       

                    </div>

                    {/* <div>
                        <Link to='/dog_registrations/pedig-siredam'>Add Sire and Dam</Link>
                    </div> */}
                </div>
            </div>




        )
    }
}
export class PedigSire extends React.Component {
    constructor(props) {
        super(props)
        console.log('this.props in pedigsire', this.props.dog_id)
        this.state = {

        }


    }

    appendtosire = () => {

        console.log('checking if available ', this.props.next_dog_id)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.dog_id.id}`, { 'sire': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog sire successfully appended')
                this.props.refresh_pedigree()

            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in append to sire");
                console.log(err.message);
            });
    }


    render() {
        return (
            <div className="row align-items-center  pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <Progress pedigree={this.props.pedigree} />
                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">

                            Sire of dog
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosire}
                            refresh_pedigree={this.props.refresh_pedigree}
                            getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon one={true} pedigree={this.props.pedigree} />
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree} />
                        </div>


                    </div>

                </div>


            </div>
        )
    }
}

export class PedigDam extends React.Component {

    appendtodam = () => {

        console.log('checking if available ', this.props.next_dog_id)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.dog_id.id}`, { 'dam': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog dam successfully appended')
                this.props.refresh_pedigree()

            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in append to sire");
                console.log(err.message);
            });
    }

    render() {
        return (
            <div className="row align-items-center  pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <Progress pedigree={this.props.pedigree} />

                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">
                            Dam of dog
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodam}
                            refresh_pedigree={this.props.refresh_pedigree}
                            getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree} />
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon one={true} pedigree={this.props.pedigree}
                            />
                        </div>


                    </div>

                </div>


            </div>
        )
    }
}

export class PedigSireSire extends React.Component {

    appendtosiresire = () => {

        console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.pedigree.sire.id}`, { 'sire': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog sire sire successfully appended')
                this.props.refresh_pedigree()
            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in append to siresire");
                console.log(err.message);
            });
    }
    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">
                            Sire of dog's sire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiresire}
                            refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon two={true} pedigree={this.props.pedigree} />
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree} />
                        </div>


                    </div>
                </div>

            </div>



        )
    }
}

export class PedigSireDam extends React.Component {
    appendtosiredam = () => {

        console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.pedigree.sire.id}`, { 'dam': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog sire dam successfully appended')
                this.props.refresh_pedigree()
            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in append to siredam");
                console.log(err.message);
            });
    }

    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">
                            Dam of dog's sire
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtosiredam}
                            refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon three={true} pedigree={this.props.pedigree}/>
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree}/>
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}




export class PedigDamSire extends React.Component {

    appendtodamsire = () => {

        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.pedigree.dam.id}`, { 'sire': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog dam sire successfully appended')
                this.props.refresh_pedigree()
            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in appendtodamsire");
                console.log(err.message);
            });
    }
    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">
                            Sire of dog's dam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamsire}
                            refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree}/>
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon two={true} pedigree={this.props.pedigree}/>
                        </div>


                    </div>

                </div>


            </div>
        )
    }
}


export class PedigDamDam extends React.Component {

    appendtodamdam = () => {

        // console.log('pedigree sire ', this.props.pedigree.sire.id)
        console.log('checking if available ', this.props.next_dog_id)
        console.log('pedigree ', this.props.pedigree)
        axios
            .put(`http://localhost:8000/api/dogs/${this.props.pedigree.dam.id}`, { 'dam': this.props.next_dog_id.id })
            .then((res) => {

                console.log(res.data.message);
                console.log('dog dam dam successfully appended')
                this.props.refresh_pedigree()
            })
            .catch((err) => {
                console.log("Error couldn't append  Dog, called in appendtodamdam");
                console.log(err.message);
            });
    }
    render() {
        return (
            <div className="row align-items-center pedigmain_full justify-content-center">
                <PedigNav pedigree={this.props.pedigree} />
                <div className="row_">
                    <div className="col-sm-6">
                        <div className="">
                            Dam of dog's dam
                        </div>
                        <Dog_registrations appenddog={true} appendto={this.appendtodamdam}
                            refresh_pedigree={this.props.refresh_pedigree} getnameofDog2={this.props.getnameofDog2}
                            getnext_dog_id={this.props.getnext_dog_id} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="paginatee">
                            <PedigreeCartoon pedigree={this.props.pedigree}/>
                        </div>
                        <div className="paginatee">
                            <PedigreeCartoon three={true} pedigree={this.props.pedigree}/>
                        </div>


                    </div>

                </div>


            </div>
        )
    }
}



