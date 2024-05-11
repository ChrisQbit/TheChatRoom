import React from "react";
import makeToast from "../Toaster";
import axios from "axios";
import { withRouter } from "react-router-dom";
import logo from './sellia.png'
import "./sellia_styles.css";



const HistoryPage = ({ match, socket }) => {
  const chatroomId = match.params.id;
  const searchMessageRef = React.useRef();
  const chatroomIdurl = "/dashboard"
  var [messages, setMessages] = React.useState([]);



  const searchMessage = () => {
    const chatroom = chatroomId;
    const message = searchMessageRef.current.value;

    axios
      .post("http://localhost:8000/user/search", {
        chatroom,
        message,
      })
      .then((response) => {
        //makeToast("success", response.data.message);
        makeToast("success", "Search Success!");
        console.log(response.data.messages);
        messages = response.data.messages;
        setMessages(messages);
      })
      .catch((err) => {
         console.log(err);
        makeToast("error on search","Error en la busqueda.");
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
          makeToast("error", err.response.data.message);
      });
  };



 

 // const searchMessageRef = React.createRef();


  return (
    <div className="container">
      <img className="logo_sellia" src={logo} />
      <hr></hr>
        <h1>Searh engine</h1>
<hr></hr>
<b>Results:</b>
{messages.map((message, i) => (
            <div key={i} className="message">
              
              
              <span className="badge badge-pill badge-primary">{message.message}</span>
            </div>
          ))}
<hr></hr>
        <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Enter menssage to search</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            ref={searchMessageRef }
            placeholder="Type word or phrase to looking for... "
          />
        </div>
      </div>


      <button onClick={searchMessage}>Search Message</button>

      <hr></hr>
        <a href={chatroomIdurl}><b>Back to Chatrooms!</b></a>

        <hr></hr>
       
        

          
    </div>
  );
};

export default withRouter(HistoryPage);
