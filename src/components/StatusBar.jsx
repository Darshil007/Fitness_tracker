import React from 'react'
import { wifi,battery,network } from '../assets'
const StatusBar = () => {
  return (
    <div className='flex flex-row justify-between items-center p-[6px]'>
        <div className='time ms-2 text-[#252727] text-[16px] font-semibold'>9:41</div>
        <div className='wifi-battery-network flex flex-row me-2'>
            <img className='px-1' src={network}/>
            <img className="px-1" src={wifi}/>
            <img src={battery}/>
        </div>
    </div>
  )
}

export default StatusBar