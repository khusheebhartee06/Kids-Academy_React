import React from 'react';
import BannerForAll from '../BannerForAll';
import AllTeachers from './AllTeachers';
import Homesubscribe from '../Home/Homesubscribe/Homesubscribe.jsx';
import './Teachers.css';

function Teachers() {
    return (
        <React.Fragment>
            <BannerForAll props={{heading:"Meet Our Teachers",val:'Teachers'}}/>
       <AllTeachers />
       <Homesubscribe />
        </React.Fragment>
    )
}

export default Teachers;