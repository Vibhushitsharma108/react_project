import React from 'react'
import { useState } from 'react'

const CreateTask = (e) => {
const [taskTitle, setTaskTitle] = useState('')
const [description, setTaskDescription] = useState('')
const [date, setTaskDate] = useState('')
const [assignTo, setAsignTo] = useState('')
const [category, setCategory] = useState('')

const [task, setTask] = useState({})

  
  const submitHandler = ()=>{
    e.preventDefault()
    
    setTask({taskTitle,description,date,category,assignTo,active:false,newTask:true,failed:true,completed:false})
     console.log(task)
  }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between'>
        <div className='w-1/2'>
        <div><h3 className='text-sm text-grey-300 mb-0.5'>Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e)=>{
              setTaskTitle(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='text' placeholder='Make a UI design'/>
            </div>
        <div><h3 className='text-sm text-grey-300 mb-0.5'>Date</h3>
            <input
            value={date}
            onChange={(e)=>{
            setTaskDate(e.target.value)
            }}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="date"/></div>
            <div><h3 className='text-sm text-grey-300 mb-0.5'>Asign to</h3>
            <input
            value={category}
            onChange={(e)=>{
            setCategory(e.target.value)
            }} 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type="text" placeholder='EmployeeName'></input></div>
            <div><h3 className='text-sm text-grey-300 mb-0.5'>Category</h3>
            <input 
            value={description}
            onChange={(e)=>{
            setTaskDescription(e.target.value)
            }}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-grey-400 mb-4' type='text' placeholder='employee design and dev task etc'></input></div>
        </div>
            <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-grey-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-grey-400' name="" id="" cols="30" rows="10"></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
