import React, { useReducer, useEffect } from "react";
import { loadchat } from "../../api";
import Error from "../Error";
import reducer from "./reducer";



const Chat = () => {
  const [state, dispatch] = useReducer(reducer, 
    { users: [], 
      messages: [],
       error : null });

  useEffect(() => {
   loadchat()
      .then((data) => dispatch({ type: "DATA_RESPONSE_SUCCESS", data }))
      .catch((error) => dispatch({ type: "DATA_RESPONSE_ERROR", error }));
  }, []);

  return (
   
    <div> 
        {state.error && <Error/>}
      <h1>Chat:</h1>
      {state.messages.map((message) => (
        <article key={message.id}>
          <h2>author: {message.author.name}</h2>
          <p>{message.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Chat;