import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowItWorks/HowItWorks';
import OurService from '../OurService/OurService';
import Brands from '../Brands/Brands';
import Divider from '../Divider/Divider';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <OurService></OurService>
            <Brands></Brands>
            <Divider></Divider>
        </div>
    );
};

export default Home;