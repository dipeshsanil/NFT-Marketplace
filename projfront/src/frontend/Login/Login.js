import React, {useState,useEffect} from "react";
import {ethers} from 'ethers'
import "../style.css"
import {Outlet,useNavigate } from "react-router-dom";
import Button from "../Button";

const Login = ({web3Handler})=>{
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Wallet');
	const [provider, setProvider] = useState(null);

    const onClick = () => {
        if (window.ethereum) {
            web3Handler()
            .then(result => {        
                navigate("/home");
            })
            .catch(error => {
                console.log(error.message);
            })
        }
        else if (!window.ethereum){
                    console.log('Need to install MetaMask');
                    if(!alert('Please install MetaMask browser extension to interact')){
                        window.open("https://metamask.io/download/");
                    }
        }
    }

    // const connectWalletHandler = () => {
	// 	if (window.ethereum && defaultAccount == null) {
	// 		// set ethers provider
	// 		setProvider(new ethers.providers.Web3Provider(window.ethereum));

	// 		// connect to metamask
	// 		window.ethereum.request({ method: 'eth_requestAccounts'})
	// 		.then(result => {
	// 			setConnButtonText('Wallet Connected');
    //             console.log(result[0]);
	// 			setDefaultAccount(result[0]);
    //             navigate("/home");
	// 		})
	// 		.catch(error => {
    //             alert(error.message);
	// 			setErrorMessage(error.message);
	// 		});

	// 	} else if (!window.ethereum){
	// 		console.log('Need to install MetaMask');
    //         if(!alert('Please install MetaMask browser extension to interact')){
    //             window.open("https://metamask.io/download/");
    //         }
	// 		setErrorMessage('Please install MetaMask browser extension to interact');
	// 	}
	// }

    // useEffect(() => {
    //     if(defaultAccount){
    //     provider.getBalance(defaultAccount)
    
    //     .then(balanceResult => {
    //         setUserBalance(ethers.utils.formatEther(balanceResult));
    //     })
    //     };
    // }, [defaultAccount]);

    return (
        <>
                <div className="container-fluid">
            <div id="login">
                <div className="container text-center">
                    <div className=" mx-auto py-4">
                    <img src="https://avatars.githubusercontent.com/u/11744586?s=280&v=4" alt="" style={{width:"20%"}}/>
                    </div>
                    <div className="mb-4">
                        <h2>Welcome Back!</h2>
                        <p>The decentralized web awaits</p>
                    </div>
                        <Button name={connButtonText} onClick={onClick} />
                    <br/>
                    {errorMessage}
                </div>

            </div>
        </div>
        <Outlet/>
        </>
    );
}

export default Login;