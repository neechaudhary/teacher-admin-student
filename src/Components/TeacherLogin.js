import React, { useState } from "react";
import "./signin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { API } from "../constant/constant";
import { Windows } from "react-bootstrap-icons";

export default function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${API}/signin`, {
        ...data,
        role: "teacher"
      
      })
      .then((res) => {
        console.log(res.data);
        window.location.href="/teacher-management"
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bodywrapper">
        <div className="insideWrapper">
          <div className="contentdiv">
            <div className="data">
              <div className="headingdata">
                <h1 className="heading">Teacher Login</h1>
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
                  <Link to="/signlogin">
                    {" "}
                    <button className="contButton" onClick={handleSubmit}>
                      Continue
                    </button>
                  </Link>
                </div>
                <div className="button">
                  <button className="contButtonwhite">
                    Create Teacher account
                  </button>
                </div>
                <Link to="/signin">
                  <div className="links">
                    <a className="hreflink">Click here to Student Login</a>
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
