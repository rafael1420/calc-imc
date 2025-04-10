import { data } from './data/data';
import { use, useState } from 'react';
import './App.css';
import ImcCalc from './components/ImcCalc';
import imcTable from './components/imcTable';

function App() {
  const calcImc = (e, height, weight) => {
    console.log("Executou");
  }
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState('');
  const [infoClass, setinfoClass] = useState("");

  return (
    <>
      <div className='container'>
        {!imc ? (
          <ImcCalc calcImc={calcImc} />
        ) : (
          <imcTable/>
        )}
      </div>
    </>
  )
}

export default App
