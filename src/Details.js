import React from "react";

import Button from "./Button";


const Details = () =>{
    return(
        <div id="details" className="container" >
            <div className="row">
                <div className="col-12 col-lg-6">
                    <div className="box"></div>
                </div>
                <div className="col-12 col-lg-6">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>NFT Title</h3>
                        <h5>5.5 ETH</h5>
                    </div>
                    <div className="py-2">
                    <p><b>Created by </b><span className="text-muted">@diveshS</span></p>
                    </div>
                    <div className="py-2">
                        <h5>Description</h5>
                        <p style={{textAlign:"justify"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div>
                        
                        <Button name="BUY NFT" width="100%" fontWeight="bold"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
//TODO: 
export default Details;