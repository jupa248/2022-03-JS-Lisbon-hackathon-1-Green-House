import React from "react";
import './How.css';

export default function How() {
    return (
        <div className="how-container">
            <div className="how-title">
            <h1>How ?</h1>
            </div>
            <div className="steps-container">
                
                    <div className="stepOne">
                        <p>
                        Insert your trip Begin-Point and End-Point
                        </p>
                    </div>
                    <div className="stepTwo">
                        <p>
                        We calculate based on the type of vehicle the amount of CO2 emitted 
                        </p>
                    </div>
                    <div className="stepThree">
                        <p >
                        You earn Points based on the amount of CO2 you dont pollute 
                        </p>
                    </div>
            </div>
        </div>
    )
}