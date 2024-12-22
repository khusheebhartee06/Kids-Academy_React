import React from 'react';
import BannerForAll from '../BannerForAll';
import Homesubscribe from '../Home/Homesubscribe/Homesubscribe.jsx';
import PopularClasses from './PopularClasses.jsx';


function Classes() {
    return (
        <React.Fragment>
            <BannerForAll props={{heading:"Our Popular Classes",val:"Classes"}}/>
           <PopularClasses/>
            <Homesubscribe />
        </React.Fragment>
    )
}

export default Classes;