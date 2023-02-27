import React, { useState } from "react";
import "./signin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { API } from "../constant/constant";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      role: "user"
    };
    axios
      .post(`${API}/signin`, data)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/";
      })
      .catch((err) => {
        // console.log(err);
        alert(err.response.data.message);
      });


  };

  return (
    <>
      <div className="bodywrapper">
        <div className="insideWrapper">
          <div className="contentdiv">
            <div className="data">
              <div className="headingdata">
                <h1 className="heading">Student Login</h1>
              </div>

              <div className="emaildata">
                <h1 style={{ height: 50, padding: 3 }}>Email</h1>
                <div className=" inputEmail">
                  <input
                    placeholder="Enter Email"
                    className="inputemail"
                    name={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      padding: 10,
                    }}
                  ></input>
                </div>
                <h1 style={{ height: 50, padding: 3 }}>Password</h1>
                <div className=" inputEmail">
                  <input
                    placeholder="Enter Password"
                    className="inputemail"
                    name={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      padding: 10,
                    }}
                  ></input>
                </div>
                <div className="buttons">
                  
                    <button className="contButton" onClick={handleSubmit}>
                      Continue
                    </button>
                
                </div>
                <div className="button">
                  <Link to="/register">
                  <button className="contButtonwhite">
                    Create Student account
                  </button>
                  </Link>
                </div>
                <Link to="/teacherlogin">
                  <div className="links">
                    <div className="hreflink"> Click here to Teacher Login</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
