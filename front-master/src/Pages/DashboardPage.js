import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import makeToast from "../Toaster";

//const toast = useToast()

const DashboardPage = (props) => {
  

  const [chatrooms, setChatrooms] = React.useState([]);
  const getChatrooms = () => {
    axios
      .get("http://localhost:8000/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        setChatrooms(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };






  React.useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);
  
  const createChatroom = () => {


    const token = localStorage.getItem("CC_Token");
    console.log(token);
    if (!token) {
      props.history.push("/login");
    }
    
    const chatroomName = chatroomNameRef.current.value;

    axios
      .post("http://localhost:8000/chatroom", {
        name: chatroomName,
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        console.log("success", response.data.message);
        getChatrooms();
        chatroomNameRef.current.value = "";
      })
      .catch((err) => {
        // console.log(err);
        makeToast("error", "only alphanumeric chars no numbers.");
        if (
          err &&
          err.response &&
          err.response.data &&
          err.response.data.message
        )
        console.log("error", err.response.data.message);
      });
  };
  
  const chatroomNameRef = React.createRef();

  return (
    <div className="container toper2">
       <div className="cardHeader toper">
        
       
        <b className="bbia">The Chat Rooms List</b>

        
      
      </div>

<div className="row">
<div className="chatrooms col-md-12 ">
        {chatrooms.map((chatroom) => (
          <div key={chatroom._id} className="chatroom outset">
            <div className="">{chatroom.name}</div>
            <br></br>
            <Link to={"/chatroom/" + chatroom._id}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
</div>

    


      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName"><h4>Give name to create new Chatroom</h4></label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            ref={chatroomNameRef}
            placeholder="Plese enter a short name.  "
          />
        </div>
      </div>


      <button onClick={createChatroom}>Create Chatroom</button>
      <br></br><br></br>
      <button >Chat whit images</button>


      

      <hr></hr>
        <a href="/">Out of here!</a>

<br>
</br>
<br></br>
<b>By Engr. Christian Padilla! may 2024</b>
    </div>
  );
};

export default DashboardPage;
