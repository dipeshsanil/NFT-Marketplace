import React from "react";
import "../style.css"
import { Link,Outlet } from "react-router-dom";

import Button from "../Button";
const Login = ()=>{
    return (
        <>
                <div className="container-fluid">
            <div id="login">
                <div className="container text-center">
                    <div className="box mx-auto mb-5" style={{width:"40%", height:"50vh"}}></div>
                    <div className="mb-4">
                        <h2>Welcome Back!</h2>
                        <p>The decentralized web awaits</p>
                    </div>
                    <Link to="/home">
                        <Button name="Connect to Wallet"/>
                    </Link>
                </div>
            </div>
        </div>
        <Outlet/>
        </>
    );
}

export default Login;