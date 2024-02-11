import React from 'react'
import LoginInput from './LoginInput'
import GetStarted from './GetStarted'
import { Form } from 'react-router-dom'
function LoginDescription() {
  return (
    <div className='w-[100%] h-[100%] text-white flex items-center justify-center flex-col gap-4'>
              <p className='text-[48px] font-bold'>Unlimited movies, TV shows and more</p>
              <p className='text-[24px] font-400'>Watch anywhere. Cancel anytime</p>
              <p className='text-[24px] font-400'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div >
                <Form className='flex items-center gap-2' action='/signup' method='post'>
                <LoginInput type="email" placeholder="Email Address" name="email"/>
                <GetStarted/>
                </Form>
            </div>  
    </div>
  )
}

export default LoginDescription