import React from 'react';
import { useState } from 'react';
import './country.css'
const Country = ({data}) => {
    const [vis,setVis]=useState(false);
    let handleme=()=>{
        setVis(!vis);
    }
    return (
        <div className={`country ${vis?'countryV':'countryN'}`}>
            <div className='maybe'>
            <div className='imgholder'>
                <img className='imgme' src={data.flags.flags.png} alt={data.flags.flags.alt} />
            </div>
            <div>
                <h2>{data.name.common}</h2>
                <p>Total-area{data.population.population}</p>
            </div>
            </div>
            <div >
                <button className='btn' onClick={handleme}>{vis?'Visited':'Not visited'}</button>
            </div>
        </div>
    );
};

export default Country;