import React, { useState } from "react";
import Navbar from "./Navbar";
import Todo from "./Todo";
import About from "./About";
import "./style.css";

export default function App() {
  const [step, setStep] = useState(1);
  console.log(step);
  
  return (
    <div>
      <Navbar step={step} setStep={setStep} />
      {step === 1 && <Todo />}
      {step === 2 && <About />}
    </div>
  );
}
