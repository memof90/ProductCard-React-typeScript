import React from 'react'
import BuySection from './Buy'
import ColorContainer from './ColorContainer'
import Description from './Description'
import Info from './Info'
import SizeContainer from './SizeContainer'

const Main = ()  =>{
  return (
    <div className='main'>
      <Info />
      <Description />
      <ColorContainer />
      <SizeContainer />
      <BuySection />
    </div>
  )
}

export default Main