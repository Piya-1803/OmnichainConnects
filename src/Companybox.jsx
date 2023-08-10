import React from 'react';
import ReactDOM from 'react-dom';
import firstimg from './229fa8e8-fbc5-4c02-b4b0-116757c6c8f5.svg'
import arrow from './189227cc-6153-47ce-914d-68d61b15677a.svg'
import secondimg from './ad64b0cb-dba2-4a72-b22a-04cf4214e19e.svg'


function Companybox(){
    return <>
    <div className='Creators'>
        <p>
            Creators of
        </p>
    </div>
    <a href="https://www.earlybird.xyz/home" target="_blank" rel="noopener noreferrer" >
    <div className='box1' >
        <div className='boximg'>
            <div className='companyimg'>
            <img src={firstimg}></img>
            </div>
            <div className='arrow'>
                <img src={arrow}></img>
            </div>
        </div>
        <div className='description'>
            <p>Earlybird is a cross-chain messaging protocol for sending data between blockchains.</p>
        </div>
    </div>
    </a>
    <a href="https://www.magiclane.xyz/" target="_blank" rel="noopener noreferrer" >
    <div className='box1'>
        <div className='boximg'>
            <div className='companyimg'>
            <img src={secondimg}></img>
            </div>
            <div className='arrow'>
                <img src={arrow}></img>
            </div>
        </div>
        <div className='description'>
            <p>MagicLane is an cross-chain token and messaging platform. </p>
        </div>
    </div>
    
    </a>
    </>
}
export default Companybox;