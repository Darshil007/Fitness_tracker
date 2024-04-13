import React from 'react'
import StatusBar from './components/StatusBar'
import {google,meta} from './assets'
import { useNavigate } from 'react-router-dom'
const Register = () => {
 const navigate = useNavigate();
 const handleNavigate = () =>{
    navigate("/Login");
 }
  return (
    <div className='flex justify-center items-center h-[100vh]'>
       <div className='w-[330px] h-[650px] bg-[#F8FAFC]'>
        <StatusBar/>
        <div className='flex flex-col h-[610px] justify-between p-4'>
            <div className='Text text-black font-semibold text-[19px] mt-1'>Create an Account</div>
            <div className='formPage mb-9'>
            <form className="space-y-4 md:space-y-6">
                  <div>
                      <input type="name" name="firstname" id="firstName" className="bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg focus:outline-none font-semibold text-[14px] placeholder-text-gray-800 p-2.5 w-full" placeholder="First name" required=""/>
                  </div>
                  <div>
                      <input type="name" name="lastName" id="lastName" className="bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg focus:outline-none font-semibold text-[14px] placeholder-text-gray-700 p-2.5 w-full" placeholder="Last name" required=""/>
                  </div>
                  <div>
                      <input type="email" name="email" id="email" className="bg-[#F1F1F1] text-gray-900 sm:text-sm rounded-lg focus:outline-none font-semibold text-[14px] placeholder-text-gray-700 p-2.5 w-full" placeholder="Email" required=""/>
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="Password" className="bg-[#F1F1F1] focus:outline-none text-gray-900 sm:text-sm rounded-lg font-semibold text-[14px] placeholder-text-gray-700 w-full p-2.5 " required=""/>
                  </div>
                  <div className="flex items-start">
                      <div className="flex items-center h-4 mt-1">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-2 text-sm ">
                        <label for="terms" className="font-light text-[#7F7F7F] text-[12px] font-semibold">By proceeding, I agree to all<a className="font-medium hover:underline text-[#93A9FF] text-[12px] ms-1" href="#">T&C and  Privacy Policy</a></label>
                      </div>
                  </div>
              </form>
            </div>
            <div className='Buttons flex flex-col justify-evenly items-center p-2'>
                <div className='create-Account w-[310px] h-[42px] blueGradient flex justify-center items-center rounded-xl mb-2'>
                    <button className='text-[#FFFFFF] font-semibold text-[17px] text-center'>Create an Account</button>
                </div>
                <div className='or flex flex-row justify-center items-center mb-2'>
                    <hr className='w-[145px] px-1'/><span className='text-[12px] font-md text-black px-1 font-semibold'>Or</span><hr className='w-[145px] px-1'/>
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
                    <div className='text-[12px] text-black font-semibold'>Already have an account ?<button onClick={handleNavigate} className="font-medium hover:underline text-[#93A9FF] text-[12px] ms-1" href="#">Login</button></div>   
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Register