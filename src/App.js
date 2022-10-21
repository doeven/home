import React, { useEffect } from 'react';
import { ChakraProvider} from "@chakra-ui/react";
import theme  from './theme';
import { Route,Routes} from 'react-router-dom'
import './Loader.css';
import ReactDOM from 'react-dom';



import About from './pages/About';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Faq from './pages/FAQ';
import Team from './pages/Team';
import WhyUs from './pages/WhyUs';
import OilGas from './pages/OilGas';
import RealEstate from './pages/RealEstate';
import Agric from './pages/Agric';
import Forex from './pages/Forex';
import Gold from './pages/Gold';
import Cfd from './pages/Cfd';
import Affiliates from './pages/Affiliates';
import Wallet from './pages/Wallet';
import Dictionary from './pages/Dictionary';


const loader = document.querySelector('.loader');
// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');


const App = () => {
  

  useEffect(() => {
    hideLoader();
  });

  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/privacy' element={<Privacy/>} />
          <Route exact path='/security' element={<Security/>} />
          <Route exact path='/faq' element={<Faq/>} />
          {/* <Route exact path='/team' element={<Team/>} /> */}
          <Route exact path='/why-choose-us' element={<WhyUs/>} />
          <Route exact path='/gold' element={<Gold/>} />
          <Route exact path='/cfd' element={<Cfd/>} />
          <Route exact path='/real-estate' element={<RealEstate/>} />
          <Route exact path='/forex' element={<Forex/>} />
          <Route exact path='/oil-and-gas' element={<OilGas/>} />
          <Route exact path='/agric-and-infrastructure' element={<Agric/>} />
          <Route exact path='/affiliates' element={<Affiliates/>} />
          <Route exact path='/wallet' element={<Wallet/>} />
          <Route exact path='/resources/dictionary' element={<Dictionary/>} />
        </Routes>

    
    </ChakraProvider>
  )
}


export default App
