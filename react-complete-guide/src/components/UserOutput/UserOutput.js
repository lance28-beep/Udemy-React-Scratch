import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className='UserOutput'>
      <p>SOme Random Text</p>
      <p>UserName: {props.userName}</p>
    </div>
  );
};

export default userOutput;
