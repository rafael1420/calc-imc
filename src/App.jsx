import { data } from './data/data';
import { use, useState } from 'react';
import './App.css';
import ImcCalc from './components/ImcCalc';
import imcTable from './components/imcTable';

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);



    setImc(imcResult);

  };


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
