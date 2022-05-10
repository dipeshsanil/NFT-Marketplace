import React from "react";
import { useState, useEffect } from "react";

import Card from "./Card";

const UserDashboard = ({account,marketplace, nft}) =>{
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    
    const loadPurchasedItems = async () => {
      console.log(await marketplace.itemCount());
      const itemCount = await marketplace.itemCount()

      const filter =  marketplace.filters.Bought(null,null,null,null,null,account)
      const results = await marketplace.queryFilter(filter)

      let items = []
      
      const purchases = await Promise.all(results.map(async i  => {

        const item = await i.args
    
        const uri = await nft.tokenURI(item.tokenId)

        //console.log(uri)
        
        const response = await fetch(uri)
        console.log(response);
        const metadata = await response.json()
    
        const totalPrice = await marketplace.getTotalPrice(item.itemId)
    
        items.push({
            totalPrice,
            itemId: item.itemId,
            seller: item.seller,
            title: metadata.title,
            description: metadata.description,
            image: metadata.image
        })
        
      }))
      console.log(purchases)
      setLoading(false)
      setItems(items)
    }

    useEffect(() => {
        loadPurchasedItems()
        console.log(items.length)
        }, [])
    
    return(
        <div className="container" id="userDash">
            <div className="text-center py-4">
                <img src="https://picsum.photos/200" style={{borderRadius:"50%"}}/>
                <p className="card-text text-muted py-3" style={{fontSize:"1.5rem"}}>{account.slice(0, 5) + "..." + account.slice(38, 42)}</p>
            </div>
            <hr></hr>
            <div className="py-1">
                <h3><b>NFT's OWNED</b></h3>
                <div className="row my-5">
                {items.length > 0 ?
                
                    items.map((item, index) => (          
                        <Card key={index} item={item} />
                    ))
                
                : (
                <main style={{ padding: "1rem 0" }}>
                    <h2>No items owned</h2>
                </main>
                )}
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;