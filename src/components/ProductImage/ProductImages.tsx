import React, { Fragment } from 'react'

import blue from "../../assets/blue.png";
import black from "../../assets/black.png";
import green from "../../assets/green.png";
import red from "../../assets/red.png";
import orange from "../../assets/orange.png";

const ProductImages = () => {
  return (
    <Fragment>
        <img src={blue}  className="shoe show" alt="blue shoe" color="blue"/>
        <img src={red}  className="shoe" alt="red shoe" color="red"/>
        <img src={green}  className="shoe"  alt="green shoe" color="green"/>
        <img src={orange} className="shoe"   alt="orange shoe" color="orange"/>
        <img src={black}  className="shoe"  alt="black shoe" color="black"/>
    </Fragment>
  )
}

export default ProductImages