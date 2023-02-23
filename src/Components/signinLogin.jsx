import React from 'react'
import "./signinlogin.css"
export default function SigninLogin() {
    return (
        <>
            <div className="bodywrapper">
                <div className="insideWrapper">
                    <div className="contentdiv">
                        <div className='data'>
                            <div className="headingdata">
                                <h2 className='headh2'> Cuko</h2>
                            </div>

                            <h1 className='normalhead'>Signin to Coku</h1>
                            <div className='emaildata'>
                                <h1 style={{ height: 50 }}>Password</h1>
                                <div className=' inputpassword'>
                                    <input placeholder='Enter password' className='inputpassword'></input>
                                </div>
                                <div className='buttons'>
                                    <button className='contButton'>Continue</button>
                                </div>
                                <div className='button'>
                                    <button className='contButtonwhite'>Create account</button>
                                </div>
                                <div className='links'>
                                    <a href='#' className='hreflink'>Singn in to business account </a >

                                </div>
                                <div className='linksprivacy'>
                                    <a href='#' className='hreflink'>Privacy policy </a >

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}