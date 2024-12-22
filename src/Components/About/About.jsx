import React from 'react';
import './About.css'
import BannerForAll from '../BannerForAll';
import Homefacility from '../Home/Homefacility/Homefacility.jsx';
import Homeabout from '../Home/Homeabout/Homeabout.jsx';
import WhyChoose from './WhyChoose/WhyChoose.jsx';
import Hometeachers from '../Home/Hometeachers/Hometeachers.jsx';
import Hometestimonial from '../Home/Hometestimonial/Hometestimonial.jsx';
import Homesubscribe from '../Home/Homesubscribe/Homesubscribe.jsx';

function About() {
    return (
        <React.Fragment>

            <BannerForAll props={{ heading: "About Our KidsAcademy", val: 'About Us' }} />
            <Homefacility />
            <Homeabout />
            <WhyChoose/>
            <Hometeachers />
            <Hometestimonial />
            <Homesubscribe />
        </React.Fragment>
    )
}

export default About;