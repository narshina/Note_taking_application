import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Notelist = () => {
    const[data,setData]=useState([])
    const[refresh,setrefresh]=useState(false)

    useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response =await axios.get('http://localhost:4000/vnotes')
            setData(response.data)
            console.log(response);
          }
          catch(e){
            console.log("error",e);
          }
        }
        fetchData()
      },[refresh])

      let handleDelete=(id)=>{
        const response =axios.delete(`http://localhost:4000/delete/${id}`)
        console.log(response);
        setrefresh(!refresh)

      }
  return (
    <div className='flex justify-center'>
   <table>
   <thead className='bg-gray-400'>
    <tr>
        <th>TITLE</th>
        <th>CONTENT</th>
        <th>INSTRUCTIONS</th>
    </tr>
  
   </thead>
   <tbody className='bg-slate-100'>
 {data.map((item)=>(
    <tr>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>{item.instructions}</td>
        <td><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
    </tr>
))}
   </tbody>
   </table>
    </div>
  )
}
