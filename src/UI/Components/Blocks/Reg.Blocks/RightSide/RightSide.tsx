import React from "react";
import "./RightSide.css";
import { RegForm } from "../RegForm/RegForm";
import { AnotherSignIn } from "../AnotherSignIn/AnotherSignIn";
import { ChatBlock } from "../../ChatBlock/ChatBlock";
export const RightSide = () => {
  return (
    <div className="right--side">
      <div className="signIn--form">
        <div className="box">
          <strong>Attention:</strong> Tenderly Node Release: Ready to try
          DevNets or Node Extensions? For more information on our new node
          solutions,{" "}
          <a href="#" className="link">
            check out our changelog
          </a>
          !
        </div>
        <h3 className="signIn__text">Sign in to Tenderly</h3>
        <p className="create--accaunt--add">
          Don't have an account?{" "}
          <a href="#" className="link">
            Create an account
          </a>
        </p>
        <RegForm />
        <div className="anotherSignIn">
          <AnotherSignIn />
        </div>
      </div>
      <ChatBlock />
    </div>
  );
};
