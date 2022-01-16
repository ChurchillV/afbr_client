import React, { Component } from "react";
import '../css_files/pedigree-manual.css'
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./register_form";


class PedigreeCartoon extends Component {
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
                                            Hell

                                        </div>}


                                    <div className=" line">
                                        Hell
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
                                                Hell

                                            </div>}


                                        <div className="line">
                                            Hell

                                        </div>
                                    </div>

                                    <div className="col2_one">

                                        {this.props.three ?
                                            <div className="activeshape">
                                                Hell

                                            </div> :
                                            <div className="item">
                                                Hell

                                            </div>}
                                        <div className="line">
                                            Hell

                                        </div>
                                    </div>


                                </div>
                                {/* sfsdfk;fgb;ksdfhg;sfohg;sfdouhfdslufsdhfhgfughfsdughfdsighfsdigufdsgfdgsg */}
                                <div className="col3">
                                    {this.props.four ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                            Hell

                                        </div>}
                                    {this.props.five ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                            Hell

                                        </div>}
                                    {this.props.six ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                            Hell

                                        </div>}
                                    {this.props.seven ?
                                        <div className="activeshape">
                                            Hell

                                        </div> :
                                        <div className="item">
                                            Hell

                                        </div>}
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