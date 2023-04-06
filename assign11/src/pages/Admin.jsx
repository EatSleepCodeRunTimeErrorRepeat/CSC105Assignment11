import React from "react";
import { useNavigate } from "react-router-dom";

function Admin({ setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate("/");
    };

    return(
    <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <img src="assets\ryan.jpg" alt="profile" 
            style={{
                borderRadius: "50%", 
                margin: "0", 
                width: "200px"
                }}/>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <h1  style={{
                color: 'white',
            }}>
                Admin
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: "none",
                    color: "white",
                    padding: "20px",
                    textAlign: "center",
                    textDecoration: "none",
                    fontSize: "16px",
                    margin: "4px 2px",
                    borderRadius: "12px",
                    backgroundImage: "linear-gradient(to right, blue, purple)",
        }}
            onClick={handleLogout}>Logout</button>
        </div>
    </>
    )
}

export default Admin;
