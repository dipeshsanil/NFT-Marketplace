import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import {Outlet,useNavigate } from "react-router-dom";
import { ethers } from "ethers";


const Details = ({marketplace}) =>{
    
    const navigate = useNavigate();
    const location = useLocation()
    const item = location.state.item

    const buyMarketItem = async (item) => {
        await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
        // loadMarketplaceItems()
      }
    
    const onClick = () => {
        buyMarketItem(item)
        .then(result => {        
        navigate("/home");
        })
        .catch(error => {
            console.log(error.message);
        })
    }


    return(
        <div id="details" className="container" >
            <div className="row">
                <div className="col-12 col-lg-6">
                <img
                src= {item.image}
                class="card-img-top"
                alt="..."
                />
                </div>
                <div className="col-12 col-lg-6">
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>{item.title}</h3>
                        <h5>{ethers.utils.formatEther(item.totalPrice)} ETH</h5>
                    </div>
                    <div className="py-2">
                    <p><b>Created by </b><span className="text-muted">{item.seller}</span></p>
                    </div>
                    <div className="py-2">
                        <h5>Description</h5>
                        <p style={{textAlign:"justify"}}>{item.description}</p>
                    </div>
                    <div>
                        
                        <Button onClick={onClick} name="BUY NFT" width="100%" fontWeight="bold"/>

                    </div>
                </div>
            </div>
        </div>
    );
}
//TODO: 
export default Details;