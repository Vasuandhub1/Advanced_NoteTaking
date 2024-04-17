import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LiaTrashAltSolid } from "react-icons/lia";
import { PiDownloadSimple } from "react-icons/pi";
import {useDispatch} from "react-redux"
import { addToCustom, addToTrash, addTofavourite, permanentdelete, removefromTrash } from '../../redux/slices/editorslice';
import { MdExpandMore } from "react-icons/md";
import { LiaTrashRestoreSolid } from "react-icons/lia";
import {useNavigate} from "react-router-dom"
import { MdOutlineDeleteForever } from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";
import {useSelector} from "react-redux"


export default function Card(props) {

  const navigate= useNavigate()
  const data=useSelector((state)=>state.category)
  console.log("card",data)
  const [more,setmore]=useState(false)

  const handelmore=()=>{
    if(more==false){
      setmore(true)
    }
    else{
      setmore(false)
    }
  }
  const[optionselect,setoptionselect]=useState(false)
   console.log(props.index)
  const dispatch=useDispatch()

  const handledownlad=(index)=>{
    console.log(index)
    
  }


  const handelmenue=()=>{
    if(optionselect==false){
      setoptionselect(true)
    }
    else{
      setoptionselect(false)
    }

    console.log(optionselect)
  }

  const handlefavourite = (index)=>{
    console.log(index)
     dispatch(addTofavourite(index))
  }

  const handletrash=(index)=>{
    console.log(index)
    dispatch(addToTrash(index))
  }

  const handleremovetrash=(index)=>{
    dispatch(removefromTrash(index))
  }

  const handlemorecategories=(index,elem)=>{
    const paylod={
      index:index,
      category:elem
    }
    dispatch(addToCustom(paylod))
  }

  const handledelete=(index)=>{
    const payload={
      index:index
    }
    dispatch(permanentdelete(payload))
  }
  

  return (

    <div>
      <div className="bg-white-500 border-solid border-black border-4 w-[20rem] p-2 rounded-lg">
        <div className=" mb-3 flex">
          
        <div>
        <h4 className=' font-bold text-xl'>Title:</h4>
         <p >{props.elem.title}</p>
        </div>
        <button onClick={handelmenue} className='flex bottom-10 w-6' ><IoMdMenu /></button>
        <div className=" relative -right-[10rem]">
        {optionselect?<div id="dropdown" class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
     {props.elem.category==="Trash"? <li>
        <button onClick={()=>handledelete(props.index)} class=" flex justify-center w-full items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><MdOutlineDeleteForever />Delete</button>
      </li>: <li>
        <button onClick={()=>handlefavourite(props.index)} class="w-full flex justify-center items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><MdOutlineFavoriteBorder />Favourite</button>
        <button onClick={()=>handledownlad(props.index)} class=" w-full flex justify-center items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><PiDownloadSimpleBold />Download</button>
      </li>}
      <li>
{
        
        props.elem.category === "Trash" ? <button onClick={()=>handleremovetrash(props.index)} class=" w-full flex justify-center items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><LiaTrashRestoreSolid />Restore</button> 
        :<button onClick={()=>handletrash(props.index)} class=" w-full flex justify-center items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><LiaTrashAltSolid />Trash</button> 
}      </li>
      <li>
        <button onClick={handelmore} class="flex justify-center w-full items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><MdExpandMore />More category</button>
        {more?<div id="dropdown" class="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      {data.map((elem,)=>{
        return(
          <li>
        <button onClick={()=>handlemorecategories(props.index,elem)} class=" block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{elem}</button>
      </li>
        )
      })}
      
    </ul>
</div>:""}
      </li>
      
    </ul>
</div>:""}
</div>
        </div>
         <hr />
         <div className=" my-3">
       
         <p className=' overflow-hidden w-[25rem] h-[4rem]'>#{props.elem.category}</p>
        </div>
        <hr />
        <div className=" my-3">

        </div>
        </div>
    </div>
  )
}
