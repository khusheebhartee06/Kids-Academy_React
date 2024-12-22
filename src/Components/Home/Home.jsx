import React from 'react';
import './Home.css'
import Homebanner from './Homebanner/Homebanner.jsx';
import Homefacility from './Homefacility/Homefacility.jsx';
import Homeabout from './Homeabout/Homeabout.jsx';
import Homepopular from './Homepopular/Homepopular.jsx';
import Hometeachers from './Hometeachers/Hometeachers.jsx';
import Homegallery from './Homegallery/Homegallery.jsx';
import Homeachievements from './Homeachievements/Homeachievements.jsx';
import Hometestimonial from './Hometestimonial/Hometestimonial.jsx';
import Homepartner from './Homepartner/Homepartner.jsx';
import Homeevent from './Homeevent/Homeevent.jsx';
import Homesubscribe from './Homesubscribe/Homesubscribe.jsx';

function Home() {
  return (
    <section id="Home">
      <Homebanner />
      <Homefacility />
      <Homeabout />
      <Homepopular />
      <Hometeachers />
      <Homegallery />
      <Homeachievements />
      <Hometestimonial />
      <Homepartner />
      <Homeevent />
      <Homesubscribe />
    
    </section>
  )
}

export default Home;