import React from "react";

import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import ContentSection from "./ContentSection";

const Home = ({marketplace, nft}) => {
    return(
        <div style={{overflowX:"hidden"}}>
            <HeroSection/>
            <ContentSection nft={nft} marketplace={marketplace}/>
            <FooterSection/>
        </div>
    );
}

export default Home;