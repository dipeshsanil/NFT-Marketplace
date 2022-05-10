import React from 'react';
import Button from './Button';
import heroImg from "./img/heroimg.svg"
const HeroSection = ()=>{
    return (
        <div className='container-fluid bg-black' id="hero">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-12 py-4'>
                        <h1>EXPLORE OUR DIGITAL NFT MARKETPLACE</h1>
                        <p style={{color:"white"}}>Anyone can create art, it's simply a creative expression that's individual to the person, regardless of how beautiful or popular it is.However, I believe only those who can storytell, educate, provoke thought, emotion, ideas and inspiration through their art are actual artists.</p>
                        <div id='explore'>
                            <a href="#marketplace"><Button name="Explore"/></a>
                        </div>
                        <br/>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="text-center py-4 ">
                        <img src={heroImg} alt="" className='img-responsive' style={{width:"100%"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;