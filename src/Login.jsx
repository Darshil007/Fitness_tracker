import React from 'react'
import StatusBar from './components/StatusBar';
import {google,meta} from './assets';
import { useNavigate } from 'react-router-dom'
const Login = () => {
 const navigate = useNavigate();
 const handleNavigate = () =>{
    navigate("/Register");
 }
 const handleNavigate1 = () =>{
    navigate("/otherinfo");
 }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='w-[330px] h-[650px] bg-[#F8FAFC]'>
        <StatusBar/>
        <div className='flex flex-col h-[610px] justify-between p-4'>
            <div className='Text text-black font-semibold text-[19px] mt-1'>Welcome Back</div>
            <div className='formPage mb-36'>
            <form className="space-y-4 md:space-y-6">
                  <div>
                      <input type="email" name="email" id="email" className="bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg focus:outline-none font-semibold text-[14px] placeholder-text-gray-700 p-2.5 w-full" placeholder="Email" required=""/>
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="Password" className="bg-[#F1F1F1] focus:outline-none text-gray-900 sm:text-sm rounded-lg font-semibold text-[14px] placeholder-text-gray-700 w-full p-2.5 " required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="ml-2 text-sm ">
                        <label for="terms" className="font-light text-[#7F7F7F] text-[12px]"><a className="font-medium hover:underline text-[#7F7F7F] text-[12px] ms-1" href="#">Forget Password ?</a></label>
                      </div>
                  </div>
              </form>
            </div>
            <div className='Buttons flex flex-col justify-evenly items-center p-2'>
                <div className='create-Account w-[310px] h-[42px] blueGradient flex justify-center items-center rounded-xl mb-3'>
                    <button onClick={handleNavigate1} className='text-[#FFFFFF] font-semibold text-[17px] text-center'>Login</button>
                </div>
                <div className='or flex flex-row justify-center items-center mb-3'>
                    <hr className='w-[145px] px-1'/><span className='text-[12px] font-md text-black px-1'>Or</span><hr className='w-[145px] px-1'/>
                </div>
                <div className='diff-options flex flex-row justify-center items-center mb-2'>
                    <div className='google-button w-[38px] h-[36px] bg-[#FFFFFF] flex flex-row justify-center items-center border-solid border-gray-300 me-1 border-[1px] rounded-lg'>
                        <button><img src={google}/></button>
                    </div>
                    <div className='meta-button w-[38px] h-[36px] bg-[#FFFFFF] flex flex-row justify-center items-center border-solid border-gray-300 ms-1 border-[1px] rounded-lg'>
                        <button><img src={meta}/></button>
                    </div>
                </div>
                <div className='login mt-3'>
                    <div className='text-[12px] text-black'>Don't have an account? <button onClick={handleNavigate} className="font-medium hover:underline text-[#93A9FF] text-[12px] ms-1" href="#">Register</button></div>   
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Login