import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "./firebase";
import "../css_files/register.css";
import Navbar from "./navbar";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  //   const history = useHistory();
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate('/profile', { replace: true });
  }, [user, loading]);
  return (
    <div className="container-fluid" style={{ position: 'relative' }}>
      <Navbar />


      <div className="row">

        <div className="col-lg-12 text-capitalize text-center ">
          <h1>Sign Up with us today</h1>
        </div>

        <div className="container-fluid register_text">

          <div className="row align-items-center justify-content-center">
            <div className="col-sm-5">
              <h1 className="text-capitalize text-white">Sign up with the African Bully Registry</h1>
              <h4 className="text-capitalize">Free of charge</h4>
              <h4 className="text-capitalize"> Join the global community of bulldog owners</h4>

            </div>
            <div className="col-md-5 align-items-center justify-content-center">
              <div className="register my-md-5 py-md-5 ">

                <div className="register__container ">
                  <input
                    type="text"
                    className="register__textBox"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                  />
                  <input
                    type="text"
                    className="register__textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                  />
                  <input
                    type="password"
                    className="register__textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  <button className="register__btn" onClick={register}>
                    Register
                  </button>
                  <button
                    className="register__btn register__google"
                    onClick={signInWithGoogle}
                  >
                    Register with Google
                  </button>
                  <div>
                    Already have an account? <Link to="/login">Login</Link> now.
                  </div>
                </div>
                <script type="text/javascript"
                  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

                <script type="text/javascript">
                  emailjs.init('user_O5PFSLdanSpVoOM2bj1Yq')
                </script>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  );
}
export default Register;