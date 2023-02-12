import React from 'react';
import ReusableFooter from '../components/reusable/ReusableFooter.js';
import bckgr from '../components/images/bckgr.jpg'

const Home = () => {
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center"  }}>
      <div >
        <div style={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center"  }}>
        <h1 >CarSHOP</h1>
        </div>
        <img src={bckgr} />
        
      </div>
      </div>
      <div>
      <ReusableFooter />
      </div>
  </div>

  )
}
  
export default Home;