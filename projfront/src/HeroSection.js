import React from 'react';
import Button from './Button';
const HeroSection = ()=>{
    return (
        <div className='container-fluid bg-black' id="hero">
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-12 py-4'>
                        <h1>EXPLORE OUR DIGITAL NFT MARKETPLACE</h1>
                        <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum neque id lectus congue rutrum.</p>
                        <div id='explore'>
                            <a href="#marketplace"><Button name="Explore"/></a>
                        </div>
                        <br/>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className='box'></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;