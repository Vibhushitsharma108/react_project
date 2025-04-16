import React, { useState } from 'react'
import { handleLogin } from 'react'
const Login = ({handleLogin}) => {

  // console.log(handleLogin)

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
      // console.log("email is", email)
      // console.log("password is",password)

      setEmail("")
      setPassword("")
    }
  return (
    <div className='flex h-screen w-screen item-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form
            onSubmit={(e) =>{
              submitHandler(e)

            }}
            className ='flex flex-col item-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                  
                }}
                 required className='text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-grey-400' type="email" placeholder="Enter your email"/>
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                 required className='text-white outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-grey-400' type="password" placeholder="Enter Password"/>
                <button className='mt-5 text-white outline-none border-none border-2 bg-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-grey-400'  >Log in</button>
            </form>
        </div>
    
    </div>
  )
}

export default Login
