import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './countries.css'
const Countries = ({cntData}) => {
    let Data=use(cntData);
    Data=Data.countries;
   
    return (
        <div>
            <div className='detail'>
                <h2>All countries</h2>
                <p>visited:</p>
            </div>
            <div className='countries'>
                {
            Data.map(data=><Country 
                key={data.cca3.cca3}
                data={data}></Country>)
           }
            </div>
          
        </div>
    );
};

export default Countries;