import React from 'react';
import BannerForAll from '../../BannerForAll.jsx';
import AllGallery from './AllGallery.jsx';
import Homesubscribe from '../../Home/Homesubscribe/Homesubscribe.jsx';

function Gallery() {
    return (
        <React.Fragment>
            <BannerForAll props={{heading:"Our School Gallery",val:'Gallery'}}/>
       <AllGallery />
       <Homesubscribe />
        </React.Fragment>
    )
}

export default Gallery;