import React from 'react'
import StatusBar from './components/StatusBar';
import { useNavigate } from 'react-router-dom';
const OtherInfo = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/tracker-page');
  }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='w-[330px] h-[650px] bg-[#F8FAFC]'>
        <StatusBar/>
        <div className='flex flex-col h-[610px] justify-between items-center'>
            <div className='Text text-black font-semibold text-[19px] mt-1'>Welcome Back</div>
            <div className='formPage mb-36'>
            <form className="space-y-2 md:space-y-6 py-2">
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-[310px] ">
                      <div className=' font-bold text-[12px] '>Weight Loss</div>
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-full">
                      <div className='font-semibold text-[12px]'>Muscle Gain</div>
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-full">
                      <div className='font-semibold text-[12px]'>Flexibilty and Mobility</div>
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-full">
                      <div className=' font-semibold text-[12px] '>General fitness</div>
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-full">
                      <div className=' font-semibold text-[12px]'>Event-Specific Training</div>
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
                  <div className="flex flex-row justify-between items-center bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg p-2.5 w-full">
                  <div className='font-semibold text-[12px]'>Mindfulness and Mental Health</div>
                  <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                  </div>
              </form>
            </div>
            <div className='Buttons flex flex-col justify-evenly items-center p-2'>
                <div className='create-Account w-[310px] h-[42px] blueGradient flex justify-center items-center rounded-xl mb-3'>
                    <button onClick={handleNavigate} className='text-[#FFFFFF] font-semibold text-[17px] text-center'>Confirm</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default OtherInfo;