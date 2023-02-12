import React from "react";

const ReusableButton = (props) => {
  return (
    <button onClick={props.onClick}  style={{
        backgroundColor: "cyan",
        color: "black",
        padding: "10px 20px",
        borderRadius: "5px",
        borderColor: "lightgray",
        ...props.style
      }}>
      {props.children}
    </button>
  );
};

export default ReusableButton;
