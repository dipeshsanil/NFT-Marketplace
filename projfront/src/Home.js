import React from "react";

import HeroSection from "./HeroSection";
import FooterSection from "./FooterSection";
import ContentSection from "./ContentSection";

const Home = () => {
    return(
        <div style={{overflowX:"hidden"}}>
            <HeroSection/>
            <ContentSection/>
            <FooterSection/>
        </div>
    );
}

export default Home;