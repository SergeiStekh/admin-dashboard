import React from 'react'
import { LinearDiagram } from '../../components/'
import { Header } from '../../components/'

const Line = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark-bg-secondary-dark-bg rounded-3xl'>
      <Header category='Diagram' title='Linear Diagram'/>
      <div className='w-full'>
        <LinearDiagram />
      </div>
    </div>
  )
}

export default Line