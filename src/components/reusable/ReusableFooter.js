import React from "react";

const ReusableFooter = () => {
  
  return (
  <footer style={{    backgroundColor: "#000000",
  color: "#FFFFFF",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  justifyContent: "center",
  
  position: "relative",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%",}}>
    <p style={{textAlignVertical: "center"}}>Copyright &copy; {new Date().getFullYear()}</p>
  </footer>
  
)
  }
export default ReusableFooter;