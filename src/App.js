import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Topheader from './Components/Topheader/Topheader';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Teachers from './Components/Teachers/Teachers';
import Gallery from './Components/Pages/Gallery/Gallery';
import Event from './Components/Pages/Event';
import Blog from './Components/Blog/Blog';
import Product from './Components/Shop/Product';
import Contact from './Components/Contact/Contact';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope,faAddressBook } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      <BrowserRouter>
        
      <Topheader />
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/classes' element={<Classes/>} />
          <Route path='/teachers' element={<Teachers/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/event' element={<Event/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />

          <Route path='*' element={<h1>404  Page Not Found</h1>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
