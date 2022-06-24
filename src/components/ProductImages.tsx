import React, { Fragment } from 'react'

import blue from "../assets/blue.png";
import black from "../assets/black.png";
import green from "../assets/green.png";
import red from "../assets/red.png";
import orange from "../assets/orange.png";

const ProductImages = () => {
  return (
    <Fragment>
        <img src={blue} alt="blue shoe" />
        <img src={red} alt="red shoe" />
        <img src={green} alt="green shoe" />
        <img src={orange} alt="orange shoe" />
        <img src={black} alt="black shoe" />
    </Fragment>
  )
}

export default ProductImages