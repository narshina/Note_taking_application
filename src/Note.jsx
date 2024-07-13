import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export const Note = () => {
    const[data,setData]=useState({
      title:'',
      content:'',
      instructions:''
    })



    let handlechange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handlesubmit=async(event)=>{
        event.preventDefault('')
        const response=await axios.post('http://localhost:4000/addnote',data)
        setData({title:"",
          content:"",
          instructions:""
        })
        console.log(data);
        console.log(response);
    }
   
  return (
    
    <div className='bg-slate-400  h-[1050px]'>
    <div className='flex flex-col justify-center items-center pt-36 '>
    <div className='font-bold'>ADD NOTES</div>
    <form onSubmit={handlesubmit}>
<div className='mt-8'>
    <label>TITLE:</label>
    <input onChange={handlechange} name='title' value={data.title} className='ml-16' required ></input><br></br>
</div>
<div className='mt-8'>
    <label>CONTENT:</label>
    <input onChange={handlechange} name='content' value={data.content} className='ml-8' required ></input><br></br>
</div>
<div className='mt-8'>
    <label>INSTRUCTIONS:</label>
    <input onChange={handlechange} name='instructions' value={data.instructions} required></input><br></br>
</div>
   <div className='flex justify-center'><button type='submit' className='bg-black text-white mt-7 border rounded-md w-20'>Submit</button>
 <Link to='/vnotes'> <button className='bg-black text-white mt-7 border rounded-md w-20'>View Notes</button></Link>
   </div>
     </form>
    </div>
</div>
  )
}
