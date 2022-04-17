import React from "react";
import { useState, useEffect } from "react";
import { ethers } from "ethers"
import "./style.css";
import Button from "./Button";
import { create } from 'ipfs-http-client'
const client = create('https://ipfs.infura.io:5001/api/v0')


const UploadNFT = ({marketplace, nft}) =>{
  
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const upload = async (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    console.log(file)
    if (typeof file !== 'undefined') {
      try {
        const result = await client.add(file)
        console.log(result)
        setImage(`https://ipfs.infura.io/ipfs/${result.path}`)
      } catch (error){
        console.log("ipfs image upload error: ", error)
      }
    }
  }
  const create = async (event) => {
    event.preventDefault()
    if (!image || !price || !title || !description) return
    try{
      const result = await client.add(JSON.stringify({image, price, title, description}))
      console.log(result)
      mint(result)
    } catch(error) {
      console.log("ipfs uri upload error: ", error)
    }
  }
   

  const mint = async (result) => {
    const uri = `https://ipfs.infura.io/ipfs/${result.path}`
    await(await nft.mint(uri)).wait()
    
    const id = await nft.tokenCount()
 
    await(await nft.setApprovalForAll(marketplace.address, true)).wait()

    const listingPrice = ethers.utils.parseEther(price.toString())
    await(await marketplace.makeItem(nft.address, id, listingPrice)).wait()
  }

  return (
    <div className="container" id="details">
        <h2 className="text-center py-5">Upload NFT</h2>
         <form>
         <div className="mb-3">
        <label for="title" className="form-label">Upload NFT</label>
        <input onChange={upload} required type="file" className="form-control" name="file" id="title" />
        
    </div>
    <div className="mb-3">
        <label for="title" className="form-label">NFT Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="title" />
        
    </div>
    
    <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">Description</label>
        <textarea onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" rows="6"/>
    </div>
    <div className="mb-3">
        <label for="title" className="form-label">Price</label>
        <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="title"/>
        
    </div>
    
    <button type="submit" onClick={create} className="btn btn-primary">Submit</button>
    </form>
    </div>
  );
}

export default UploadNFT;