import React from 'react'
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
    </div>
  )
}

export default Main