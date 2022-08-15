import React from 'react'
import { BarDiagram } from '../../components/'
import { Header } from '../../components/'

const Bar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark-bg-secondary-dark-bg rounded-3xl'>
      <Header category='Diagram' title='Bar Diagram'/>
      <div className='w-full'>
        <BarDiagram />
      </div>
    </div>
  )
}

export default Bar