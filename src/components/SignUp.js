
import React, { useState,component} from "react";
import { Link } from "react-router-dom";
import "./signup.css";

import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import google from './google.png';
let eye = <FontAwesomeIcon icon={faEye} />;

const SignUp = () => {
    const [passwordDisplay, setPasswordDisplay] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordDisplay(passwordDisplay ? false : true);
        passwordDisplay
            ? (eye = <FontAwesomeIcon icon={faEyeSlash} />)
            : (eye = <FontAwesomeIcon icon={faEye} />);
    };

    const responseFacebook = (response) => {
        console.log(response);
    };

    const responseGoogle = (response) => {
        console.log(response);
        // postData(response.profileObj.email,"");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const firstname=document.getElementById("firstname").value;
        const lastname=document.getElementById("lastname").value;
        postData(firstname,lastname)
    }
    const postData=(firstname,lastname)=>{
        var obj = {
            "firstname": firstname,
            "lastname": lastname
            };
        console.log(obj)
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-type':'application/json',
                },
                body: JSON.stringify(obj)
            })
            .then(res=> res.json())
            .then(res =>{console.log(JSON.stringify(res))
                alert("sign up succesfully")
            })
            
            
    }

    return (
        <div className="page-wrapper container-fluid">
            <div className="row">
                <div className="sign-up-wrapper text-center animate__animated animate__zoomIn animate__delay-2s">
                    <div className="sign-up-header">
                        <h4 className="top-heading pt-3">SIGN UP</h4>
                        <h1 className="mainHeading"> Create Your Account</h1>
                        <span className="subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span><br/><br/>
                        <div data-onsuccess="onSignIn" id="i11" style={{display:"inline"}}  class="container d-flex flex-column flex-md-row justify-content-between">
                            <GoogleLogin
                                clientId="206491669517-gqg7j7cq7d7efd2hpb2asb7e3vl6lmuv.apps.googleusercontent.com"
                                buttonText="Sign Up With Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                render={(renderProps) => (
                                    <button
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="btn sign-up-btn"
                                    >
                                        <img src={google} style={{width:"30px"}}/>
                                        {"   "}
                                        Sign Up With Google
                                    </button>
                                )}
                            />
                            <FacebookLogin
                                appId="1458634634332191"
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="btn sign-up-btn"
                                icon="fa fa-facebook-square fa-lg"
                            />
                        </div>
                        <p style={{display: "flex",justifyContent: "space-evenly"}}>
                            <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                            or
                            <hr style={{color: "black",height: "1.5rem", width: "40%",}}/>
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        method="POST"
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                autoFocus
                                placeholder="First name"
                                id="firstname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                id="lastname"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email Address"
                                id="email"
                                required
                            />
                        </div>
                        <div
                            className="form-group"
                            style={{ marginBottom: "2.5rem" }}
                        >
                            <div class="input-group mb-3">
                            <input
                                type={passwordDisplay ? "text" : "password"}
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                style={{
                                    display: "inline",
                                }}
                            />
                            <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2"><i
                                onClick={togglePasswordVisiblity}
                            >
                                {eye}
                            </i></span>
                            </div>
                            </div>
                        </div>
                        <p className="form-group subtext px-3">
                            By Clicking Sign Up, you agree to our
                            <Link> Terms of Use </Link>
                            and our
                            <Link> Privacy Policy </Link> .
                        </p>
                        <div className="form-group">
                            <button className="btn mainbtn" style={{height:"50px"}}>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
        </div>
    );
};

export default SignUp;
