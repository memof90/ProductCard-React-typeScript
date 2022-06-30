import React from 'react'
import ColorContainer from './ColorContainer'
import Description from './Description'
import Info from './Info'

const Main = ()  =>{
  return (
    <div className='main'>
      <Info />
      <Description />
      <ColorContainer />
    </div>
  )
}

export default Main