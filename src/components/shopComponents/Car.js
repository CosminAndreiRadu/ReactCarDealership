import React from 'react'


function Car(props) {
    return <div>
      <div classname="carClass" style={{backgroundColor: "white", display: "flex-box", float: "left", padding: 10, margin: 10, height:350,  width: 300, float: "left"}}>
          <div style={{display: "flex"}}>

          <img src={props.image} width={300} height={200}/> 

          </div>
          <div style={{}}>
          <h2>{props.Manufacturer} </h2>
          <div>{props.Model} </div>

          </div>

      </div>
    </div> 
  }

export default Car