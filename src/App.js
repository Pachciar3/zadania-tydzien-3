import React, { useState } from 'react';

import './App.css';

function App() {
  const defaultTIP = 10;
  const VAT = 23;
  const [netto, setNetto] = useState('');
  const [tip, setTip] = useState(defaultTIP);
  const [result, setResult] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const result = ((tip / 100 * netto) + netto) * (1 + (VAT / 100));
    setResult(result);
  }

  function handleChange(e) {
    if (e.target.name === "netto") {
      setNetto(parseInt(e.target.value));
    } else {
      setTip(parseInt(e.target.value));
    }
  }

  return (
    <div className="App">
      {result ?
        <div>{result}</div>
        :
        <form onSubmit={handleSubmit}>
          <input type="number" onChange={handleChange} name="netto" />
          <select onChange={handleChange} name="tip" id="" defaultValue={defaultTIP}>
            <option value="0">0%</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
          <button type="submit">Przelicz</button>
        </form>
      }
    </div>
  );
}

export default App;
