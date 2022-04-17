import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NFTAddress from "./contractsData/NFT-address.json";
import NFTAbi from "./contractsData/NFT.json";
import MarketplaceAddress from "./contractsData/Marketplace-address.json";
import MarketplaceAbi from "./contractsData/Marketplace.json";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login/Login";
import Details from "./Details";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import UploadNFT from "./UploadNFT";
import { useState } from "react";
import { ethers } from "ethers";

const App = () => {
  const [account, setAccount] = useState(null);
  const [nft, setNFT] = useState({});
  const [balance, setBalance] = useState();
  const [marketplace, setMarketplace] = useState({});
  const [loading, setLoading] = useState(true);

  const web3Handler = async () => {
    //metamask accounts
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const balance = await signer.getBalance(account);
    setBalance(ethers.utils.formatEther(balance));

    loadContracts(signer);

    console.log("Balance:" + balance);
  };

  const loadContracts = async (signer) => {
    const marketplace = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    setMarketplace(marketplace);
    const nft = new ethers.Contract(
      NFTAddress.address, 
      NFTAbi.abi, 
      signer);
    setNFT(nft);
    setLoading(false);

  
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <NavBar
                web3Handler={web3Handler}
                account={account}
                balance={balance}
              />
            }
          >
            <Route index element={<Login web3Handler={web3Handler} />} />
            <Route path="home" element={<Home nft={nft} marketplace={marketplace}/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="details" element={<Details marketplace={marketplace}/>} />
            <Route path="user" element={<UserDashboard />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="upload" element={<UploadNFT nft={nft} marketplace={marketplace}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
