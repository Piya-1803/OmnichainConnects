import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Header';
import Main from './Main';
import Companybox from './Companybox';
import Backers from './Backers';
import Featured from './Featured';
import Footer from './Footer';
import './App.css'



function App() {
  return <>
    <Navbar/>
    <Main/>
    <Companybox/>
    <Backers/>
    <Featured/>
    <Footer/>
    </>
  
}

export default App;
