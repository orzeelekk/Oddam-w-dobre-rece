import React from 'react';
import HeaderHeader from "../compoments/Home/HomeHeader/HomeHeader";
import HomeMain from "../compoments/Home/HomeMain/HomeMain";
import Columns3 from "../compoments/Home/Columns3/Columns3";
import SimpleSteps from "../compoments/Home/SimpleSteps/SimpleSteps";
import AboutUs from "../compoments/Home/AboutUs/AboutUs";
import WhoWeHelp from "../compoments/Home/WhoWeHelp/WhoWeHelp";
import Contact from "../compoments/Home/Contact/Contact";

const Home = () => {
    return (
        <div className="App">
            <HeaderHeader/>
            <HomeMain/>
            <Columns3/>
            <SimpleSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
        </div>
    );
};

export default Home;