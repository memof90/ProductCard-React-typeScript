import React from 'react'

const SizeContainer = ()  =>{
  return (
    <div className="sizeContainer">
      <h3 className="sizeContainer__tittle">size</h3>
      <div className="sizeContainer__sizes">
        <span className="sizeContainer_size">7</span>
        <span className="sizeContainer_size">8</span>
        <span className="sizeContainer_size active">9</span>
        <span className="sizeContainer_size">10</span>
        <span className="sizeContainer_size">11</span>
        </div>
    </div>
  )
}

export default SizeContainer