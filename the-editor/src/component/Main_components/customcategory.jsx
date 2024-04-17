import React, { useEffect, useState } from 'react'
import { LiaEditSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { useDispatch,useSelector } from 'react-redux';
import { removeCategory, updateCategory } from '../../redux/slices/editcategory';
import { addToCustom, addToTrash } from '../../redux/slices/editorslice';
import { useNavigate } from 'react-router-dom';


export default function Customcategory(props) {
    const [show,setshow]=useState(false)
    const [text,settext]=useState("")
    const dispatch=useDispatch()
    const data=useSelector((state)=>state.notes)
    const navigator=useNavigate()

    const handelupdatecategory=()=>{
        if(show){
            setshow(false)
        }
        else{
            setshow(true)
        }
    }
    const handelupdatetext=(event)=>{
        settext(event.target.value)
    }

    const handlecompletedit=(prevtext,index)=>{
       
        data.forEach((elem,ind)=>{
            console.log(elem.category)
            if(elem.category===prevtext){
                const paylod={
                    index:ind,
                    category:text
                }
                dispatch(addToCustom(paylod))
            }
        })
        const payload={
            index,
            text
            }
            
        dispatch(updateCategory(payload))
        setshow(false)
    }
    const  handeldelete=(index,elem)=>{
        console.log("delete",elem,index)
        // alert("All the notes of this category will be deleted ")
        data.forEach((element,ind)=>{
            if(element.category===elem){
                console.log(element)
                dispatch(addToTrash(ind))
            }
        })
        dispatch(removeCategory(index))
    }
   
 
  return (
    <div>
      {!show?<div className='flex items-center justify-evenly' >
                 <div className='flex items-center justify-evenly'> 
                 <button  className='text-white text-center' >{props.elem}</button>
                  <button className='text-white' onClick={handelupdatecategory} >
                  <LiaEditSolid/>
                  </button>
                  <button className='text-white' onClick={()=>handeldelete(props.index,props.elem)} >
                  < RiDeleteBinLine/>
                  </button></div>
                  </div>:<div className='flex justify-evenly'>
                    <input type="text" onChange={handelupdatetext} className='w-40 rounded-md' placeholder={props.elem}/>
                    <button className='text-white' onClick={handelupdatecategory}><MdCancel/></button>
                    <button className='text-white' onClick={()=>handlecompletedit(props.elem,props.index)}><TiTick/></button>
                    
                  </div>
}
    </div>
  )
}
