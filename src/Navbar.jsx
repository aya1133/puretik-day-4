import React from "react";
import todo from "./assets/ToDo.png";

export default function Navbar({ step, setStep }) {
    return (
        <div className="liner">
            <div className="container">
                <header>
                    <nav>
                        <div className="logo"><img src={todo} alt="logo" /></div>
                        <ul>
                            <li className="navsec">
                                <button
                                    className={`btn-link ${step === 1 ? "active" : ""}`}
                                    onClick={() => setStep(1)}
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`btn-link ${step === 2 ? "active" : ""}`}
                                    onClick={() => setStep(2)}
                                >
                                    About
                                </button>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </div>
    );
}
