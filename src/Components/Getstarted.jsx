import React from 'react'
import "./getstarted.css";
import { BiArrowBack } from 'react-icons/bi';

export default function Getstarted() {
    return (
        <>
            <div className="mian">
                <div className="mianContainer">
                    <div className="mainItems">
                        <div className="leftitem">
                            <button className='arrow'><BiArrowBack style={{ height: 30, width: 25 }} /></button>
                            <div className="insideCompo">
                                <div className="leftCompo">
                                    <div className="headinside">

                                    </div>
                                    <div className="rightCompo">
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}