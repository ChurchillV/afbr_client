import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css_files/login.css";
import Navbar from "./navbar";
import logo from '../images/logo2-removebg-preview.png'



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/profile");
  }, [user, loading]);
  return (
    <div className="container-fluid">
      < Navbar />
      <div className="row login login_text px-5 py-5">
        <div className="col-sm-5">
         <h1 className="text-capitalize text-white">Login into your profile</h1>

        </div>
        <div className="col-sm-4">

          <div className="login__container px-5 py-5 ">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <div>
              <Link to="/reset">Forgot Password</Link>
            </div>
            <div>
              Don't have an account? <Link to="/sign_up">Register</Link> now.
            </div>
          </div>

          </div>

        </div>


      </div>
    

      );
}
      export default Login;