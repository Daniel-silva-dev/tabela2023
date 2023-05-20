import React from 'react'
import {times} from '../data'

function Sidebar() {
 const timeUnico = times.map((time) =>{
  return (
    <li key={time.length} className='list-decimal bg-green-700 pl-2 text-xl select-none'>{time}</li>
  )
 })

  return (
    <div className='flex mt-5'>
      {timeUnico ? (
        <ul>
          {timeUnico}
        </ul>
      ):(
        <span>NENHUM TIME INFORMADO</span>
      )}
    </div>
  )
}

export default Sidebar