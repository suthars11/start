import React from 'react'

const Login = () => {
  return (
    <div className=' relative mt-28 w-[350px] h-[450px] bg-gray- shadow-2xl mx-auto mt- '>
      <div className='mx-auto '>
        <h1 className=' flex justify-center text-3xl font-semibold  p-8 text-[#4E0F9E]'>Login / Register</h1>
        <h4 className=' flex justify-center font-semibold text-[#4E0F9E] -mt-5'>Please enter your Phone Number</h4>

        <div className='w-[287px] h-[50px] shadow-2xl  bg-[#FFFFFF] mx-auto mt-10 flex items-center'>
          <span className='text-[#4E0F9E] ml-4 text-sm'>Phone Number</span>
        </div>

        <hr className='w-[287px] mx-auto mt-10 border-t-3 border-[#4E0F9E]' />
        <div className='mx-auto w-[287px] p-3 mt-20 bg-[#4E0F9E] shadow-lg'>
  <button className='text-white text-lg font-semibold underline decoration-white decoration-2 underline-offset-4 w-full text-center'>
    Continue
  </button>
</div>

        <p className='text-left   text-sm text-[#4E0F9E] mt-14 ml-[32px]'>
          By clicking you agree to <span className='text-[#C76BBC] font-semibold'>Terms and Conditions</span>
        </p>
      </div>
    </div>
  )
}

export default Login