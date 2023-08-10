import React from 'react';
import ReactDOM from 'react-dom';
import mainImage from './mainimg.png';

function Main() {
    return <> 
    <div className='content'>
   
    <div className='main'>
        <h1>Delivering the <br/>
         omnichain future</h1>
    </div>
    <div className='mainimg'>
    <img src={mainImage}></img>
    </div>
    </div>
    <div className='main1'>
        <p>
    Building cross-chain messaging protocols and <br/>
    omnichain applications for both developers <br/>
    and consumers.
    </p>
    </div>
    
    
    
    </>
    
    
    }
    export default  Main;