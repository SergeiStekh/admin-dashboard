import React from 'react'
import { AreaDiagram } from '../../components/'
import { Header } from '../../components/'

const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark-bg-secondary-dark-bg rounded-3xl'>
      <Header category='Diagram' title='Area Diagram'/>
      <div className='w-full'>
        <AreaDiagram />
      </div>
    </div>
  )
}

export default Area