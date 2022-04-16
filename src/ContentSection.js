import React from 'react';
import "./style.css"

import Card from './Card';
import Button from './Button';


  
const ContentSection = ()=>{
    return(
        <div className="container-fluid" id="marketplace" style={{padding:"7% 0"}}>
            <div className="container px-3">
                <h2 className="text-center">Marketplace</h2>
                <div className="row my-5">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <center>
                <Button name="View More"/>
               </center>
            </div>
        </div>
    );
}

export default ContentSection;