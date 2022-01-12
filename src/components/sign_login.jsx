import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import React from "react";
import RegisterForm, { SignUpForm } from "./register_form";

const styles = {
    modal_Style: {


        borderTop: '10px solid rgb(186, 129, 8)',
        width: '100%',
        marginTop: '10%',

    },
    row_style: {
        backgroundColor: 'white',

        margin: '1%',
        color: 'black',
        padding: '10%',

    }
}

const { modal_Style, row_style } = styles;


const SignUp = (props) => {

   
    return (
        <Modal isOpen={true} toggle={props.toggle} style={modal_Style}>
            <div className='row align-items-center justify-content-center ' style={row_style}>
                <div className='col-sm-6' style={{ textAlign: 'center', padding: '0%' }}>
                    <h1>Signup</h1>
                </div>
                <div className='col-sm-6' style={{ marginTop: '3%' }}>
                    <SignUpForm />
                </div>

            </div>
        </Modal>
    )
}

const Login = (props) => {
    return (
        <Modal isOpen={true} toggle={props.toggle} style={modal_Style}>
            <div className='row align-items-center justify-content-center' style={row_style}>
                <div className='col-sm-6' style={{ textAlign: 'center' }}>
                    <h1>Login</h1>
                </div>
                <div className='col-sm-6' style={{ marginTop: '4%' }}>
                    <LoginForm />
                </div>

            </div>
        </Modal>
    )
}

export { SignUp, Login };