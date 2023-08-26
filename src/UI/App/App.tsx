import React from 'react';
import './App.css';
import Reg from '../Pages/Reg/Reg';
import { CookiesBlock } from '../Components/Blocks/CookiesBlock/CookiesBlock';

function App() {
  return (
    <>
      <Reg />
      <div className="flex">
        <CookiesBlock />
      </div>
    </>
  );
}

export default App;
