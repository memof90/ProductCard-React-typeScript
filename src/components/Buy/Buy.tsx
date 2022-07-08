import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const BuySection = ()  =>{
  return (
    <div className="buyPrice">
      <a href="/#" className="buyPrice__buy">
        <i>
          <FontAwesomeIcon icon={faShoppingCart}/>
          Add to card
        </i>
      </a>
      <div className="buyPrice__price">
        <i>
          <FontAwesomeIcon icon={faDollarSign}/>
        </i>
        <h1>149.99</h1>
      </div>
    </div>
  )
}

export default BuySection