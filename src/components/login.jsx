import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css_files/login.css";
import Navbar from "./navbar";

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
        <div className="login">
      <div className="login__container">
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
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
     
    </div>
    <div className='row align-items-center justify-content-center waves_blob1_div ' >
                <div className='waves_blob1'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"><path fill="#daa520"
                            fill-opacity="1" d="M0,160L24,170.7C48,181,96,203,144,202.7C192,203,240,181,288,170.7C336,160,384,160,432,170.7C480,181,528,203,576,213.3C624,224,672,224,720,192C768,160,816,96,864,112C912,128,960,224,1008,229.3C1056,235,1104,149,1152,112C1200,75,1248,85,1296,80C1344,75,1392,53,1416,42.7L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                </div>
                </div>
    </div>
  
  );
}
export default Login;