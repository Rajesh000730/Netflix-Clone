import React, { useState } from 'react'
import { Form } from 'react-router-dom'
function LoginInput({type, placeholder, name, value}) {
    const [isError, setIsError] = useState(false);
    const [errormessage, setErrormessage] = useState("")
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passwordlength = {min : 4, max:30}
        const handleInvalidData = (e)=>{
        const value = e.target.value
        if(type==="password"){
            setErrormessage("password length must be between 4 to 30 chars")
            if(value.length >= passwordlength.min && value.length <= passwordlength.max){
                setIsError(false);
            }
            else{
                setIsError(true);
            }    
        }
        if(type === "email"){
            const found = emailPattern.test(value)
            // console.log(found)
            setErrormessage("Enter a valid email address")
            if(!found){
                setIsError(true)
            }
            else{
                setIsError(false)
            }
            // setIsError(found)
        }

    }
    return (
    
    <div>
    <input
      aria-label="search products"
      type={type}
      name={name}
      className='LoginInput bg-transparent w-[350px] p-4 border-2 rounded-sm border-gray-500 '
      placeholder={placeholder}
      defaultValue={value}
      min={4}
      max={30}
      onChange={handleInvalidData}
      required
    //   onInput={()=>setIsError(false)}
      
    />
    {isError?<p className='text-red-600 absolute'>{errormessage}</p>:""}
    </div>
  )
}

export default LoginInput