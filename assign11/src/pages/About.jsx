import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate();

    return (
        <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1  style={{
                color: 'white',
            }}>
                About
            </h1>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <button 
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: "20px",
                border: "none",
                color: "white",
                textAlign: "center",
                textDecoration: "none",
                fontSize: "16px",
                margin: "4px 2px",
                borderRadius: "12px",
                backgroundImage: "linear-gradient(to right, blue, purple)", 
            }}
            onClick={() => navigate("/")}>Redirect</button>
        </div>

        </>
    )
}

export default About;