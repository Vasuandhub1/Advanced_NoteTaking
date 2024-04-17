import React, { useEffect, useState } from 'react'
import parse from "html-react-parser"
import { BiEdit } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch } from 'react-redux';
import { updateNotes } from '../../redux/slices/editorslice';
import _ from "lodash"
import { TfiReload } from "react-icons/tfi";

export default function Preview(props) {

const [edit,setedit]=useState(false)
const [val,setval]=useState("")
const dispatch =useDispatch()



 const data=useSelector((state)=>state.notes)

 const handeledit=(index)=>{
  if(!edit){
    setedit(true)
  }
  data.map((elem,ind)=>{
    if(index===ind){
      setval(elem.text)
    }
  })
 }

 const handelcancel=()=>{
  setedit(false)
 }

 const addtofav=(e)=>{
  e.preventDefault()
  if(e.ctrlKey  && e.key=="c"){
    console.log("all key pressed")
  }
 }
 const handelnotes=()=>{
  const payload={
    index:props.val.index,
    text:val
  }
  dispatch(updateNotes(payload))
  // localStorage.setItem("Allcategories",JSON.stringify(data))
}
const autosave=_.debounce(handelnotes,1000)
// debounce(handelnotes,1000)
 useEffect(()=>{
  document.addEventListener("shortcut",addtofav,true)
 },[])

//  const setprev=()=>{
//   set(props.val)
//  }
 
//  useEffect(()=>{
//   setprev()
//  },)
  return (
    <div className='flex justify-center items-start h-[95%] overflow-auto bg-red-300 p-7 m-5 rounded-xl w-[40rem]'>
     {!edit? !props.val.show?
     <h1 className=' text-5xl text-white self-center'>Click and select to Edit and Preview</h1>:
      <div className=' space-y-9'>
        <div>
          <h1 className=" text-4xl text-neutral-50">Title: {props.val.title}</h1>
        </div>
        <div className="text-xl text-slate-200">
          <p >Note:</p>
          {parse(props.val.text)}
        </div>
        <div><button onClick={()=>handeledit(props.val.index)} className='flex items-center text-2xl relative -right-[15rem] -top-[10rem]'><BiEdit/>Edit</button></div>
        </div>:<div className='' >
        <div>
   <div class="w-[29rem] mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Your comment</label>
           <CKEditor
           
        editor={ ClassicEditor }
        data={val}
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
         
          setval(data)
          
          console.log(val)
          autosave()
        } }
      />
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" onClick={handelnotes}  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Add data
           </button>
           <div className=' rotate-180 animate-spin  text-white' > <TfiReload/></div>
                   <span class="sr-only">AutoSave</span>
           <button type="submit" onClick={handelcancel}  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-red-700 rounded-lg focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900 hover:bg-red-800">
               cancel
           </button>
           
       </div>
   </div>
</div>
          </div>}
      
      
    </div>
  )
}
