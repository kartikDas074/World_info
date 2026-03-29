import './App.css'
import Countries from './Component/Countriess/Countries'
import { Suspense } from 'react';
let Cnt=fetch('https://openapi.programming-hero.com/api/all')
        .then(res=>res.json());

function App() {
  let pnt=Cnt;
  

  return (
    <>
    <h1>To the Country</h1>
    <Suspense fallback={ <h1>Data is loading....</h1>}>
    <Countries cntData={pnt}></Countries>
    </Suspense>
      
    </>
  )
}

export default App
