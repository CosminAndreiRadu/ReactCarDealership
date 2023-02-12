import React from 'react'
import Car from './Car'
import logan from "../images/logan.jpg"
import bclass from "../images/bclass.jpg"
import dsolenza from "../images/dsolenza.jpg"
import matiz from "../images/matiz.jpg"
import megane from "../images/megane.jpg"


function CarList() {
  
    const IMAGES = [
      logan, bclass, dsolenza, matiz,megane,
    ];

    return (
      <div className='container' style={{display: "flex", testAlignVertical: "center",textAlign: "center"}}>
        <Car Manufacturer='Dacia' Model='Logan' image={logan}/>
        <Car Manufacturer='Mercedes' Model='B Class' image={bclass}/>
        <Car Manufacturer='Daewoo' Model='Matiz' image={matiz} />
        <Car Manufacturer='Dacia' Model='Solenza'image={dsolenza}/>
        <Car Manufacturer='Renault' Model='Megane' image={megane} />

      </div>
    )
  }

export default CarList