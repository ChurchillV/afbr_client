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

// const { modal_Style, row_style } = styles;


// const initialFormState = {
//     username: '', password: '', email: '', authCode: '', formType: 'signUp'
// }

// export const SignUpForm = () => {
//     const { formState, updateFormState } = useState(initialFormState)

//     function onChange(e) {
//         e.persist()
//         updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
//     }

//     const { formType } = formState
//     async function SignUp() {
//         const { username, email, password } = formState
//         await Auth.signUp({ username, password, attributes: { email } })
//         updateFormState(() => ({ ...formState, formType: 'confirmSignup' }))
//     }
//     async function confirmSignUp() {
//         const { username, authCode } = formState
//         await Auth.confirmSignUp({ username, authCode })
//         updateFormState(() => ({ ...formState, formType: 'signIn' }))
//     }
//     async function SignIn() {
//         const { username, password } = formState
//         await Auth.SignIn({ username, password })
//         updateFormState(() => ({ ...formState, formType: 'signedIn' }))
//     }

//     return (
//         <div className="Signup">
//             {
//                 formType === 'signUp' && (
//                     <div>
//                         <input name='username' onChange={onChange} placeholder='username'></input>
//                         <input name='password' type='password' onChange={onChange} placeholder='password'></input>
//                         <input name='email' onChange={onChange} placeholder='email'></input>
//                         <Button onClick={signUp}>SIgn UP</Button>


const initialFormState = {
    username: '', password: '', email: '', authCode: '', formType: 'signUp'
}

export const SignUpForm = () => {

    const [ formState, updateFormState ] = useState(initialFormState)
    const [user, updateUser] = useState(null)
    useEffect(()=>{
        checkUser()
        setAuthListener()
    }, [])

    async function setAuthListener() {

        Hub.listen('auth', (data) => {
            switch (data.payload.event){
                // case 'signIn':
                //     console.log('user signed in');
                //     break;
                // case 'signUp':
                //     console.log('user signed up');
                //     break;
                case 'signOut':
                    console.log('data from event', data)
                    console.log('user signed out');
                    updateFormState(() => ({...formState, formType: 'signUp'}))
                    break;
                default :
                    break





            }
        })
    }
    async function checkUser() {
        try{
            const user = await Auth.currentAuthenticatedUser() 
            // user ='t'
            console.log('user', user)
            // updateUser(user)
            updateFormState(() => ({ ...formState, formType: 'signUp' }))

        }
        catch (err) {
            updateUser(null)
        }
    }

    function onChange(e) {
        e.persist()
        updateFormState(() => ({ ...formState, [e.target.name]: e.target.value }))
    }
    console.log('formstate', formState)
    const { formType } = formState 

    async function signUp() {
        const { username, email, password } = formState
        await Auth.signUp({ username, password, attributes: { email } })
        updateFormState(() => ({ ...formState, formType: 'confirmSignUp' }))
        console.log('formstate', formType)
    }
    async function confirmSignUp() {
        const { username, authCode } = formState
        await Auth.confirmSignUp( username, authCode )
        updateFormState(() => ({ ...formState, formType: 'signIn' }))
    }
    async function SignIn() {
        const { username, password } = formState
        await Auth.signIn( username, password )
        updateFormState(() => ({ ...formState, formType: 'signedIn' }))
    }

    return (
        <div className="Signup">
            {
                formType === 'signUp' && (
                    <div>
                        <input name='username' onChange={onChange} placeholder='username'></input>
                        <input name='password' type='password' onChange={onChange} placeholder='password'></input>
                        <input name='email' onChange={onChange} placeholder='email'></input>
                        <button onClick={signUp}>SIgn UP</button>
                        <button onClick={()=> updateFormState(() => ({
                            ...formState, formType:'signIn'
                        }))}>SIgn In
                        </button>




                    </div>


                )}
            {
                formType === 'signIn' && (
                    <div>
                        <input name='username'  onChange={onChange} placeholder='username'></input>
                        <input name='password' type='password' onChange={onChange} placeholder='password'></input>
                        <button onClick={SignIn}>SIgn In</button>



                    </div>


                )}
            {
                formType === 'confirmSignUp' && (
                    <div>
                        <input name='authCode' onChange={onChange} placeholder='Confirmation Code'></input>
                        <button onClick={confirmSignUp} >Confirm Sign up</button>



                    </div>


                )}
            {
                formType === 'signedIn' && (
                    <div>
                        <h1>
                            Hello world welcome {user}</h1>
                        <button onClick={
                            () => Auth.signOut()
                        }>Sign Out</button>

                    </div>


                )}
            {
                formType === 'signIn' && (
                    <div>
                        <input name='password' type='password' onChange={onChange} placeholder='password'></input>
                        <input name='email' onChange={onChange} placeholder='email'></input>
                        <Button onClick={SignIn}>SIgn In</Button>



                    </div>


                )}
            {
                formType === 'confirmSignUp' && (
                    <div>
                        <input name='authCode' placeholder='Confirmation Code'></input>
                        <Button onClick={confirmSignUp} >Confirm Sign up</Button>

//                     </div>


                    // </div>


                )}
            {
                formType === 'signedIn' && (
                    <div>
                        <h1>
                            Hello world welcome user</h1>
        </div >


                    // </div>
//     )}


                )}
        </div >

    )}

export const SignUpForm = () => {
    return(
        <div>
            {/* <AmplifySignOut/> */}
            <h1>My app content</h1>
        </div>
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
                    
                </div>

            </div>
        </Modal>
    )
}

export { SignUp, Login };