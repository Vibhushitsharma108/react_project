import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data)
  // {
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }
    const logOutUser = ()=>{
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      // window.location.reload()
    }
  return (
    <div className='flex item-end justify-between'>
      <h1 className='text-white text-2xl'>Hello <br /> <span className='text-white text-3xl font-semibold'>username </span></h1>
      <button onClick={logOutUser} className='bg-red-500 font-medium text-white px-5 py-2'>Log Out</button>
    </div>
  )
}

export default Header
