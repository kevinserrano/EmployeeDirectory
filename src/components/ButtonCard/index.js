import React from "react";
import "./style.css";

function ButtonCard(props) {
    return (
      
     <button type="button" className={props.className} onClick={props.action}>{props.empName} </button> 
     
    );
  }
  
  export default ButtonCard;