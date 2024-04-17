import React, { useState } from 'react'
import { PiDownloadBold } from "react-icons/pi";

export default function Modal({handle}) {
    const[defaul,setdefault]=useState("shortcut")
    const shortcut=[
        "Create New Note : Ctrl+Z",
        "Add to Favourite : Ctrl+C",
        "Add to Trash : Ctrl+Q",
        "Download the Note : Ctrl+I",
        "open the settings: Ctrl+Y"
    ]

    const handeldefault=(event)=>{
        setdefault(event.target.name)
    }

  return (
    

<div id="popup-modal" tabindex="-1" class="o fixed top-0 right-0  left-0 z-50 justify-center items-center max-w-[200rem] h-[20rem]">
    <div class="relative top-[50%] left-1/4 p-4 w-full max-w-[43rem] max-h-[10rem]">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button onClick={handle} type="button" class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-4 md:p-5 text-center flex ">
                

<div class="w-48 h-min text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <button  onClick={()=>handeldefault(event)} aria-current="true" name='shortcut'  class="block w-full px-4 py-2 text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
        shortcuts
    </button>
    <button href="#" name='prefrences' onClick={()=>handeldefault(event)} class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        Prefrences
    </button>
    <button onClick={()=>handeldefault(event)} name='datamanagement' class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        Data Management
    </button>
    <button onClick={()=>handeldefault(event)} name="about" class="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
        About
    </button>
</div>
<div>
{defaul==="shortcut"?<div className=' bg-white m-2 p-3 rounded-lg overflow-auto '>{shortcut.map((elem,index)=>{
    return(<div className='w-[23rem]'>{elem}<hr/></div>)
})}</div>:defaul==="setting"?"hello":defaul==='prefrences'?<div className=' h-[11rem] w-[25rem] bg-white m-2 p-3 rounded-lg overflow-auto '>
    <div className='flex items-center justify-evenly gap-9'>
        <div>
        <h3 className=' text-xl font-medium'>Edit Mode</h3>
        <p>contrls when remote edit mode is enable</p>
        </div>
        <hr />
        <label class="inline-flex items-center mb-1 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>
    </div>
    <div className='flex items-center justify-evenly gap-9'>
        <div>
        <h3 className=' text-xl font-medium'>Autosave</h3>
        <p>contrls when remote edit mode is enable</p>
        </div>
        <label class="inline-flex flex-col gap-1 items-center mb-1 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <input type="number" className='w-10 bg-slate-600 text-gray-200'/>
</label>
    </div>
    <div className='flex items-center justify-evenly gap-9'>
        <div>
        <h3 className=' text-xl font-medium'>Sort</h3>
        <p>contrls when remote edit mode is enable</p>
        </div>
        <label class="inline-flex flex-col gap-1 items-center mb-1 cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer"/>
  <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <input type="number" className='w-10 bg-slate-600 text-gray-200'/>
</label>
    </div>
</div>:defaul==="datamanagement"?<div className=' flex justify-evenly items-center h-[11rem] w-[25rem] bg-white m-2 p-3 rounded-lg overflow-auto '>
    <div>
        <h3 className=' text-xl font-medium'>Download All</h3>
        <p>Download all the notes</p>
    </div>
    <div>
        <button type="button" className=' text-4xl'><PiDownloadBold/></button>
        </div>    
</div>:defaul==="about"?
<div className=' flex flex-col justify-evenly items-center h-[11rem] w-[25rem] bg-white m-2 p-3 rounded-lg overflow-auto '>
<h4 className='text-2xl'>About Us</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, cumque, temporibus cupiditate eius nisi voluptatum maxime culpa, quos velit odio error officiis enim deserunt est illum eos recusandae distinctio sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos aperiam sed consequuntur veritatis beatae quae distinctio eos recusandae? Facere, nemo!</p>
</div>:null}
</div>

                
            </div>
        </div>
    </div>
</div>

    
  )
}
