import React from 'react'

const ColorContainer = ()  =>{
  return (
    <div className="colorContainer">
      <div className="colorContainer_title">
        <div className="colorContainer_colors">
          <span className="colorContainer_color active" primary="#2175f5" color="blue" ></span>
          <span className="colorContainer_color" primary="#f84848" color="red"></span>
          <span className="colorContainer_color" primary="#29b864" color="green"></span>
          <span className="colorContainer_color" primary="#ff5521" color="orange"></span>
          <span className="colorContainer_color" primary="#444" color="black"></span>
        </div>
      </div>
    </div>
  )
}

export default ColorContainer