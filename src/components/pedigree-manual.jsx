import React, { Component } from "react";
import '../css_files/pedigree-manual.css'
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./register_form";
import { Image } from 'cloudinary-react'



class PedigreeCartoon extends Component {
    constructor(props){
        super(props)
        this.state={
           publicId1:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.sire.public_id}.png` ,
           publicId2:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siresire.public_id}.png`,
           publicId3:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siredam.public_id}.png`,
           publicId4:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siresiresire.public_id}.png`,
           publicId5:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siresiredam.public_id}.png`,
           publicId6:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siredamsire.public_id}.png`,
           publicId7:`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.props.pedigree.siredamdam.public_id}.png`,
           width:'75px',
           height:'75px',
        }

    }
    componentDidMount = () => {

     
       
      
    }

    // in future updates, we may consider creating a dynamic update 
    // to show the uer that he is actually creatning a pedigree
 
   
    render() {
        return (
            <div className="row_ align-items-center justify-content-center">



                <div className="container-fluid">
                    <div className="row_ algin-items-center justify-content-center">
                        <div className="col-sm-3">
                            <div className="row_ algin-items-center justify-content-center row1" >
                                <div className="col1">

                                    {this.props.one ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                            <Image
                                        style={{ width: this.state.width, height:this.state.height }}
                                        cloudName='daurieb51'
                                        publicId={this.state.publicId1}


                                    /> 

                                        </div>}


                                    <div className=" line">
                                        {this.props.pedigree.sire.name}
                                        <br />
                                        Hell
                                    </div>
                                </div>

                                {/* //fbddhrumynbsravrjtjyjfvb;sfjb;ffsdjnfbfnds;sfdjbnfds;rthargeaf */}
                                <div className="col2">
                                    <div className="col2_one">

                                        {this.props.two ?
                                            <div className="activeshape">
                                                Hell

                                            </div> :
                                             <div className="item">
                                             <Image
                                         style={{ width: this.state.width ,height:this.state.height}}
                                         cloudName='daurieb51'
                                         publicId={this.state.publicId2}
 
 
                                     /> 
 
                                         </div>}


                                        <div className="line">
                                        {this.props.pedigree.siresire.name}


                                        </div>
                                    </div>

                                    <div className="col2_one">

                                        {this.props.three ?
                                            <div className="activeshape">
                                                Hell

                                            </div> :
                                             <div className="item">
                                             <Image
                                         style={{ width: this.state.width,height:this.state.height }}
                                         cloudName='daurieb51'
                                         publicId={this.state.publicId3}
 
 
                                     /> 
 
                                         </div>}
                                        <div className="line">
                                        {this.props.pedigree.siredam.name}

                                        </div>
                                    </div>


                                </div>
                                {/* sfsdfk;fgb;ksdfhg;sfohg;sfdouhfdslufsdhfhgfughfsdughfdsighfsdigufdsgfdgsg */}
                                <div className="col3">
                                    <div className="col3_one">
                                    {this.props.four ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                        <Image
                                    style={{ width: this.state.width ,height:this.state.height}}
                                    cloudName='daurieb51'
                                    publicId={this.state.publicId4}

                                        
                                /> 
                                    </div>}
                                    
                                    <div className="line">
                                        {this.props.pedigree.siresiresire.name}

                                        </div>
                                    </div>
                                    
                                    <div className="col3_one">
                                    {this.props.five ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                         <div className="item">
                                         <Image
                                     style={{ width: this.state.width ,height:this.state.height}}
                                     cloudName='daurieb51'
                                     publicId={this.state.publicId5}


                                 /> 

                                     </div>}
                                     
                                    <div className="line">
                                        {this.props.pedigree.siresiredam.name}

                                        </div>
                                    </div>
                                   
                                   <div className="col3_one">
                                   {this.props.six ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                         <div className="item">
                                         <Image
                                     style={{ width: this.state.width }}
                                     cloudName='daurieb51'
                                     publicId={this.state.publicId6}


                                 /> 

                                     </div>}
                                     <div className="line">
                                        {this.props.pedigree.siredamsire.name}

                                        </div>
                                     
                                   </div>

                                    <div className="col3_one">
                                    {this.props.seven ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                         <div className="item">
                                         <Image
                                     style={{ width: this.state.width ,height:this.state.height}}
                                     cloudName='daurieb51'
                                     publicId={this.state.publicId7}


                                 /> 

                                     </div>}
                                     <div className="line">
                                        {this.props.pedigree.siredamdam.name}

                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-sm-">
                            <RegisterForm/>
                        </div> */}
                    </div>



                </div>
            </div>



        )
    }
}

export default PedigreeCartoon