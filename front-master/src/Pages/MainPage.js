import React from "react";
import makeToast from "../Toaster";
import axios from "axios";
import { withRouter } from "react-router-dom";
import logo from './sellia.png'
import "./sellia_styles.css";

const Main = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  


  return (
    <div className="container">
      <div className="container">
        
       
        <b className="bbia">The Chat Room Challenge</b>
      
      </div>
      <div className="cardBody">


      <img className="logo_sellia" src={logo} />
      
        <div className="inputGroup">
          <hr></hr>
          <h4>Welcome , to start select an option bellow:</h4><br>
          </br>
          <a className="btn btn-outline-primary btw" href="/login">i already have account</a>
          <br></br><br></br>
          <a className="btn btn-outline-primary btw" href="/register">i want create account</a>
          
          <hr></hr>
          <p>By Engr. Christian Padilla V 1.0.0<br></br> May 2024</p>
         </div>
      </div>
    </div>
  );
};

export default withRouter(Main);
