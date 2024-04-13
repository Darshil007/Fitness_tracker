import React from 'react'
import StatusBar from './components/StatusBar'
import { vector,runner } from './assets'
import { useNavigate } from 'react-router-dom'
const LandingPage1 = () => {
 const navigate = useNavigate();
 const handleNavigate = () =>{
    navigate("/landing2");
 }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='w-[330px] h-[650px] bg-[#F8FAFC] border-black border-solid'>
        <StatusBar/>
        <div className='flex flex-col justify-between h-[610px] p-3'>
        <div className='Skip flex justify-end items-center me-1'><button className=' text-[#9FB2FF] text-[15px]'>Skip</button></div>
        <div className='flex flex-col justify-center items-center'><img src={runner} alt='runner image'/></div>
        <div className='flex flex-col justify-between items-start'>
            <div className='font-semibold text-[20px] text-black text-left'>Track your Goals</div>
            <div className='mt-3 text-md text-[16px] text-[#787878] text-left'>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</div>
        </div>
        <div className='flex justify-end items-center'>
        <div className='next me-1  w-[55px] h-[55px] bg-[#FFFFFF] rounded-full flex justify-center items-center'>
            <button onClick={handleNavigate}><img src={vector} alt='vector'/></button>
        </div> 
        </div>
        </div>
       </div>
    </div>
  )
}

export default LandingPage1