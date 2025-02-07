import React from 'react';
import MapBanner from "../layout/section/Mainbanner";
import Hero from "../layout/hero/Hero";
import Review from "../layout/stars/Review";
import "../../global.css";

function Home() {
    return (
        <>
        <Hero/>
           <MapBanner/>
           <Review/>
        </>
    );
}

export default Home;