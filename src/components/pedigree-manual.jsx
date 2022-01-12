import React, { Component } from "react";
import '../css_files/pedigree-manual.css'
import Navbar from "./navbar";
import 'bootstrap/dist/css/bootstrap.css';
import RegisterForm from "./register_form";

class PedigreeCartoon extends Component {
    render() {
        return (
            <div className="row align-items-center justify-content-center">
                


                <div className="container-fluid">
                    <div className="row algin-items-center justify-content-center">
                        <div className="col-sm-3">
                            <div className="row algin-items-center justify-content-center row1" >
                                <div className="col1">

                                    <div className="item">
                                        Hello

                                    </div>
                                    <div className=" line">
                                        Hello
                                        <br />
                                        Hello
                                    </div>
                                </div>


                                <div className="col2">
                                    <div className="col2_one">
                                        <div className="item">
                                            Hello

                                        </div>
                                        <div className="line">
                                            Hello

                                        </div>
                                    </div>

                                    <div className="col2_one">
                                        <div className="item">
                                            Hello

                                        </div>
                                        <div className="line">
                                            Hello

                                        </div>
                                    </div>


                                </div>

                                <div className="col3">
                                    <div className="item">
                                        Hello
                                    </div>
                                    <div className="item">
                                        Hello
                                    </div>
                                    <div className="item">
                                        Hello
                                    </div>
                                    <div className="item">
                                        Hello
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