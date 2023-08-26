import React from 'react';
import { LeftSide } from 'Components/Blocks/Reg.Blocks/LeftSide/LeftSide';
import { RightSide } from 'Components/Blocks/Reg.Blocks/RightSide/RightSide';
import './Reg.css';

function Reg() {
  return (
    <div>
      <img src="/images/logo.svg" alt="Logo" className="logo" />
      <div className="reg--page">
        <LeftSide />
        <div className="line" />
        <RightSide />
      </div>
    </div>
  );
}
export default Reg;
