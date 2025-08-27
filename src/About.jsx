
import React from "react";
import about from "./assets/about.svg";
export default function About(){
    return(
        <div className="container">
      <div className="home">
        <div className="home-text">
          <h1>Welcome .</h1>
          <p>This is my first challenge with Html&CSS.</p>
        </div>
        <div className="home-img">
          <img src={about} alt="welcome image" />
        </div>
      </div>
      <footer>
        <p>This app cteated by <span className="aon" >Aon2023</span></p>
      </footer>
    </div>


    );
}   