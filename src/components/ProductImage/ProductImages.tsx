import React, { Fragment } from 'react'

import blue from "../../assets/blue.png";
import black from "../../assets/black.png";
import green from "../../assets/green.png";
import red from "../../assets/red.png";
import orange from "../../assets/orange.png";

const ProductImages = () => {
  return (
    <Fragment>
        <img src={blue}  className="shoe show" alt="blue shoe" />
        <img src={red}  className="shoe" alt="red shoe" />
        <img src={green}  className="shoe"  alt="green shoe" />
        <img src={orange} className="shoe"   alt="orange shoe" />
        <img src={black}  className="shoe"  alt="black shoe" />
    </Fragment>
  )
}

export default ProductImages