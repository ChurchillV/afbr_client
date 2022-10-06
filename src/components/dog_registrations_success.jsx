import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "./weburl";
import { useLocation } from 'react-router';

import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Navbar from "./navbar";
import "../css_files/registration_success.css";
import logo from "../images/logo22.png";
import thumbs from "../images/thumbs3.png";

export const Register_Success = () => {
  const params = useParams();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  let dog_name = params.dog_name;
  let username = params.username;
  let email = params.email;
  const [dog, setDog] = useState({});
  const [user, setUser] = useState({});
  const [moneyPaid, setMoneyPaid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    checkIfPaid();
  }, []);

  const setHasBeenPaidFor = () => {
    axios
      .post(`${url}api/dogs/has_paid`, {
        dog: {
          name: dog_name,
        },
      })
      .then((res) => {
        console.log(res);
        sendDogRegEmail();
      })
      .catch((err) => console.log(err));
  };
  const sendDogRegEmail = () => {
    axios
      .post(`${url}api/email/dog_registered`, {
        user: {
          displayName: username,
          email: email,
        },
        dog: {
          name: dog_name,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const checkIfPaid = () => {

    console.log('checking if paid')
    axios
      .post(`${url}api/expresspaygh/get_transaction_status`,{token: token})
      .then((res) => {
        // alert(res.data)
        console.log(res.data)
        if (res.data.result == 1) {
          setHasBeenPaidFor();
          setMoneyPaid(true)
          
        }
      })
      .catch((err) => console.log(err));
  };

  const okay = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="container-fluid w-100 registration_success_full bg-d9">
        {moneyPaid ? (
          <div>
            <div className="row align-items-center justify-content-center p1 py-5 ">
              <div className="col-sm-6">
                <h2 className="text-capitalize text-white">
                  Congratulations{" "}
                  <span className="text-uppercase font-weight-bold">
                    {username}
                  </span>{" "}
                  , you have successfully registered{" "}
                  <span className="font-weight-bold text-uppercase">
                    {dog_name}
                  </span>{" "}
                  with the AFBR
                </h2>

                <br />
                <p className="text-white">
                  <span className="font-weight-bold text-uppercase">
                    {dog_name}
                  </span>{" "}
                  should appear under your profile within 6 hours of
                  registration
                </p>
              </div>
              <div className="col-sm-3">
                <img class="profile_img_sire" src={logo}></img>
              </div>
            </div>

            <div className="row align-items-center justify-content-center ">
              <div className="col-sm-4">
                <h3 className="font-weight-light">
                  Click on the Thumbs Up to complete the process
                </h3>
              </div>
              <div className="col-sm-2">
                <img class="" onClick={(e) => okay(e)} src={thumbs}></img>
              </div>
            </div>
          </div>
        ) : (
          <div className="container ">
           <div className="row align-items-center justify-content-center">

            <div className="col-sm-6 py-5">
                <p>Pending payment, {username}</p>  
                <p>This message usually appears because mobile money was selected
                  as a payment method.
                  <hr /> Please be rest assurred that 
                  once the payment has been completed and approved
                  your registration will be 100% approved.
                </p>
              </div>
           </div>
          </div>
        )}
      </div>
    </div>
  );
};
