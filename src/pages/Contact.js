import ReusableFooter from '../components/reusable/ReusableFooter.js';
import { useState, useEffect } from 'react';
import ReusableContactBar from '../components/reusable/ReusableContactBar.js';


const Contact = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div style={{ flexGrow: 1 }}>
        <ReusableContactBar/>
      </div>
      <div>
        <ReusableFooter/>
      </div>
    </div>
  );
};
  
  export default Contact;