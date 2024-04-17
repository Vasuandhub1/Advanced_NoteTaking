import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux" 
import { addcategory } from '../../redux/slices/editcategory'
import { addNotes } from '../../redux/slices/editorslice'
import { GrFavorite } from "react-icons/gr";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { LiaTrashSolid } from "react-icons/lia";
import { PiNotePencilDuotone } from "react-icons/pi";
import { BiCustomize } from "react-icons/bi";
import {useNavigate} from "react-router-dom"
import Customcategory from './customcategory'


function Home() {
  const [drowp,setdrowp]=useState(false)
  const [custom,setcustom]=useState(false)
  const [category,setCategory]=useState()
  const [state,setstate]=useState(false)
  const data=useSelector((state)=>state.category)
 
  const dispatch=useDispatch()
  const navigate=useNavigate()
//   const setdefault=()=>{
//    if(localStorage.getItem("Allcategories")){
//    dispatch(addNotes([...JSON.parse(localStorage.getItem("Allcategories"))]))
//    }
//   }



  const handeldrowp=()=>{
    if(drowp==false){
      setdrowp(true)
    }
    else{
      setdrowp(false)
      setcustom(false)
    }
  }
  const handelcategory=(e)=>{
    setCategory(e.target.value)
  }

  const handelcustom=()=>{
    if(custom==false){
      setcustom(true)
    }
    else{
      setcustom(false)
    }
  }

  const handelcustomnotes=(elem)=>{
   navigate(`/custom/${elem}`)
  }

  const handleAdd=()=>{
   dispatch(addcategory(category))
  }

  
//   useEffect(()=>{
   
//   },[])

  console.log(data)

  return (
    <div>
      
<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<div id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

      <ul class="space-y-2 font-medium">
         <li>
            < NavLink to="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className=' flex items-center justify-start'>
                <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3 text-white ">All Notes</span>
               </div>
            </NavLink>
         </li>
         <li>
            <NavLink to="/favourites" class=" m-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className=' flex items-center justify-start '>
               <span class="flex-1 ms-3 whitespace-nowrap text-white flex items-center gap-4"><GrFavorite/>Favourites</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
               </div>
            </NavLink>
         </li>
         <li>
            <NavLink to="/quickNotes" class=" m-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className=' flex items-center justify-start'>
               <span class="flex-1 ms-3 whitespace-nowrap text-white flex items-center gap-4"><LiaNotesMedicalSolid/>Quik Notes</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
               </div>
            </NavLink>
         </li>
         <li>
            <NavLink to="/trash" class=" m-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className=' flex items-center justify-between'>
              
               <span class="flex-1 ms-3 whitespace-nowrap text-white flex items-center gap-4 ">< LiaTrashSolid />Trash</span>
               </div>
            </NavLink>
         </li>
         <li>
            <NavLink to="/addnotes" class=" m-2 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <div className=' flex items-center justify-between'>
               
               <span class="flex-1 ms-3 whitespace-nowrap text-white flex items-center gap-4"><PiNotePencilDuotone />Add Note</span>
               </div>
            </NavLink>
         </li>
       
         <li>
            <button type="button" onClick={handeldrowp} class=" m-2 flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                 
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap flex justify-start items-center gap-4 "><BiCustomize/>Custom </span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            {drowp?<ul id="dropdown-example" class=" py-2 space-y-2 flex-col ">
               <li className='flex flex-col gap-4 '>
                 {data.map((elem,index)=>{
                  return(<div onClick={()=>handelcustomnotes(elem)}><Customcategory elem={elem} index={index}></Customcategory></div>)
                 })}
                 </li>

                  <li >
                  <button type="button" onClick={handelcustom} class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal to Lime</button>
                  {custom?
<div>   
    <label for="text" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        </div>
        <input type="search" onChange={(e)=>handelcategory(e)} value={category} id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
        <button type="submit" onClick={handleAdd} class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </div>
</div>
:""}
                  </li>
            </ul>:""}
         </li>
      </ul>
   </div>
</div>
    </div>
  )
}

export default Home
