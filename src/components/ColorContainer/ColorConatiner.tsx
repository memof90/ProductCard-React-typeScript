import React from 'react'

const ColorContainer = ()  =>{
  return (
    <div className="color_container">
      <h3 className="title">Color</h3>
        <div className="colors">
          <span className="color active " itemProp='#2175f5' primary="#2175f5" color="blue" ></span>
          <span className="color" itemProp='#f84848' primary="#f84848" color="red"></span>
          <span className="color" itemProp='#29b864' primary="#29b864" color="green"></span>
          <span className="color" itemProp='#ff5521' primary="#ff5521" color="orange"></span>
          <span className="color" itemProp='#444' primary="#444" color="black"></span>
        </div>
    </div>
  )
}

export default ColorContainer