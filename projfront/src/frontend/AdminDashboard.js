import React from "react";
import {Link} from "react-router-dom";
import Card from "./Card";
import Button from "./Button";

const AdminDashboard = () =>{
    return(
        <div className="container" id="userDash">
            <div className="text-center py-4">

                <img src="https://picsum.photos/200" alt="hey" style={{borderRadius:"50%"}}/>
                <p class="card-text text-muted py-3" style={{fontSize:"1.5rem"}}>@diveshS</p>
            </div>
            <hr/>
            <div className="py-1">
                <h3><b>NFT's CREATED</b></h3>
                <div>
                    <div className="row my-5">
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
            <div className="py-4 text-center">
                <Link to="/upload">
                <Button name="UPLOAD NEW NFT" fontWeight="bold"/>
                </Link>
            </div> 
        </div>
    );
}

export default AdminDashboard;