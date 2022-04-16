import React from "react";

import Card from "./Card";

const UserDashboard = () =>{
    return(
        <div className="container" id="userDash">
            <div className="text-center py-4">
                <img src="https://picsum.photos/200" style={{borderRadius:"50%"}}/>
                <p class="card-text text-muted py-3" style={{fontSize:"1.5rem"}}>@diveshS</p>
            </div>
            <hr></hr>
            <div className="py-1">
                <h3><b>NFT's OWNED</b></h3>
                <div>
                    <div className="row my-5">
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;