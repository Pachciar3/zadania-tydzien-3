import React from 'react';
import Bill from './pages/Bill';
import BillModify from './pages/BillModify';
import FormValidation from './pages/FormValidation';

import './App.css';

function App(){
  return (
    <div className="App">
      <h2>Zadanie 1 - Funkcyjnie</h2>
      <Bill/>
      <h2>Zadanie 1 - Klasowo</h2>
      <BillModify/>
      <h2>Zadanie 2</h2>
      <FormValidation/>
    </div>
  );
}

export default App;
