import React from 'react';
import { ethers } from "ethers"
import "./style.css"
import { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';


  
const ContentSection = ({marketplace, nft}) =>{
    
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    
    const loadMarketplaceItems = async () => {
      //console.log(await marketplace);
      const itemCount = await marketplace.itemCount()
      console.log("Hi")
      let items = []
      for (let i = 1; i <= itemCount; i++) {
        const item = await marketplace.items(i)
        if (!item.sold) {
    
          const uri = await nft.tokenURI(item.tokenId)

          console.log(uri)
    
          const response = await fetch(uri)
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
        }
      }
      setLoading(false)
      setItems(items)
    }

    const buyMarketItem = async (item) => {
        await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
        loadMarketplaceItems()
      }

    useEffect(() => {
    loadMarketplaceItems()
    }, [])
    

    return(
        <div className="container-fluid" id="marketplace" style={{padding:"7% 0"}}>
            <div className="container px-3">
                <h2 className="text-center">Marketplace</h2>
                <div className="row my-5">
                {items.length > 0 ?
                <div className="row my-5">
                    {items.map((item, index) => (
                        <div key={index}>
                        <Card item={item}/>
                        </div>
                    ))}
                </div>
                : (
                <main style={{ padding: "1rem 0" }}>
                    <h2>No listed assets</h2>
                </main>
                )}
                </div>
                <center>
                <Button name="View More"/>
               </center>
            </div>
        </div>
    );
}

export default ContentSection;