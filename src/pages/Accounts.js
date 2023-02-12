import React from 'react'
import { useState } from 'react';
import ReusableFooter from '../components/reusable/ReusableFooter.js';
import ReusableButton from '../components/reusable/ReusableButton.js';

const Accounts = () => {
var values = []
var keys = Object.keys(localStorage)
var i = keys.length

const [showParagraph, setShowParagraph] = useState(false);


i = i-3


  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <div style={{flexGrow: 1, padding: 50}}>
      <h1 style={{display: "flex", float: "left"}}>      Number of accounts:  
      </h1>
      {showParagraph && <h1 style={{display: "flex", float: "left"}}>  {i}</h1>}
    <ReusableButton style={{display: "flex-box", float: "right", marginTop: 20}}  onClick={() => setShowParagraph(!showParagraph)}>        {showParagraph ? "Hide" : "Show"}</ReusableButton>
    </div>
    <ReusableFooter/>

    </div>

  )
}

export default Accounts