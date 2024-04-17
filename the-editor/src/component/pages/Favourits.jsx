import React from 'react'
import { useState,useEffect } from 'react'
import {useSelector} from "react-redux"
import Card from '../Main_components/card'
import Preview from '../Main_components/preview'
import { useDispatch } from 'react-redux'
import Footer from '../Main_components/footer'

function Favourits() {
  const data=useSelector((state)=>state.notes)
  const[preview,setpreview]=useState({show:false})
  const [search,setsearch]=useState()
  const dispatch=useDispatch()
  console.log("fav",data)

  const handlesearch=(e)=>{
    setsearch(e.target.value)
     
  } 

  const detectkeyDown=(e)=>{
    
    if((e.ctrlKey)&&e.key=="z"){
      console.log("ctrl+z")
      navigate("/addnotes")
    }
    else if((e.ctrlKey)&&e.key=="c"){
      
      if(preview.show){
        let index=preview.index
        dispatch(addTofavourite(index))
        console.log("ctrl+c")
      }
    }
    else if((e.ctrlKey)&&e.key=="q"){
      if(preview.show){
        dispatch(addToTrash(preview.index))
       
      }
    }
    else if((e.ctrlKey)&&e.key=="i"){
      console.log("hello")
    }
  }


  useEffect(()=>{
    document.addEventListener("keydown",detectkeyDown,true) 
  },[preview])

  const handlecard=(elem,index)=>{
    console.log("allnotes",elem)
    if(preview.show===false && !preview.index){
      setpreview({show:true,text:elem.text,title:elem.title,index})
    }
    if(preview.show===true&& preview.index===index){
      setpreview({show:false})
    }
    if(preview.show===true&&preview.index!=index){
      setpreview({show:true,text:elem.text,title:elem.title,index})
    }
    
  }

  return (
    <div>
    <div className=" flex h-screen">
      <div className='h-screen overflow-auto'>
      <h1 className="text-5xl text-center">Favourites</h1>
      <div class="max-w-md mx-auto my-9 ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gr ay-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" onChange={handlesearch} value={search} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>
     {
      data.map((elem,index)=>{
         
        if(elem.category=="Favourite"){
          if(!search||elem.title.includes(search)){
          console.log("inside")
           return(
            <div key={index} onClick={()=>handlecard(elem,index)} className=" m-1">
           <Card elem={elem} index={index}></Card>
           </div>)
          }
        
        }
       
      })
     }
     </div>
     <Preview val={preview}></Preview>
    </div>
    <Footer></Footer>
    </div>
  )
}


export default Favourits
