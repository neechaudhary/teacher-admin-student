import React, { useState } from "react";
import "./signin.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { API } from "../constant/constant";

const Student_reg = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user")
    
  
    const createUser = () => {
        const data= {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password,
            role:role
        }
        axios.post(`${API}/signup`,data)
        .then((res) => {
            // console.log(res);
            window.location.href = "/signin";
        }).catch((err) => {
            // console.log(err);
            if(err.response.data.message == 'User already registered'){
                alert(err.response.data.message)
            }
            else{
                alert(err.response.data.error)
            }
            
            
        })
  
    }

    return (
        <div>
             <div className='bg-white h-[100vh] p-10 '>
            
            {/* create a register page */}
            <div >
                <div className='flex text-center justify-center w-full h-[82vh] items-center'>
                    <div className='p-4 border flex flex-col bg-white rounded-lg w-[400px] h-full'>
                        <div className='text-xl font-bold'>REGISTER</div>
                        <div className='mt-4'>
                            <div className='p-3'>
                                <label htmlFor="first name" className='text-bold'>First name</label>
                                <input type="text" placeholder="Type here"
                                 className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" 
                                 onChange={(e) =>{setFirstname(e.target.value)}}
                                 />
                            </div>
                            <div className='p-3'>
                                <label htmlFor="Last name" className='text-bold'>Last name</label>
                                <input type="text" placeholder="Type here"
                                 className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10"
                                 onChange={(e) =>{setLastname(e.target.value)}}
                                 />
                            </div>
                            <div className='p-3'>
                                <label htmlFor="email" className='text-bold'>Email</label>
                                <input type="text" placeholder="Type here"
                                 className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10"
                                 onChange={(e) =>{setEmail(e.target.value)}}
                                 />
                            </div>
                            <div className='p-3'>
                                <label htmlFor="email" className='text-bold'>Password</label>
                                <input type="text" placeholder="Type here"
                                 className="p-2 input input-bordered rounded-none outline-none input-info w-full max-w-lg h-10" 
                                 onChange={(e) =>{setPassword(e.target.value)}}
                                 />
                            </div>
                            
                            <div className='m-1' onClick={createUser}>
                                <button className="btn bg-[#19BC95]  btn-success px-6 py-4 text-black w-full">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Student_reg