import { data } from './data/data';
import { useState } from 'react';
import './App.css';
import ImcCalc from './components/ImcCalc';
import ImcTable from './components/imcTable'; // corrigido

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setinfoClass(item.infoClass);
      }
    });

    if (!info) return;

  };

  const resetCalc = (e) => {
    e.preventDefault()
    setImc("");
    setInfo("");
    setinfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState('');
  const [infoClass, setinfoClass] = useState("");

  return (
    <>
      <div className='container'>
        {!imc ? (
          <ImcCalc calcImc={calcImc}/>
        ) : (
          <ImcTable 
          data={data} 
          imc={imc} 
          info={info} 
          infoClass={infoClass}
          resetCalc={resetCalc}
          /> // Estava errado
        )}
      </div>
    </>
  );
}

export default App;
