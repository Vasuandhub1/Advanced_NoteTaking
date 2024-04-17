import React from 'react'
import { useState } from 'react';
import { TfiReload } from "react-icons/tfi";
import { VscSettingsGear } from "react-icons/vsc";
import Modal from './modal';

export default function Footer() {
    const [toggle,settoggle]=useState(false)
    const handelsetting=()=>{
        if(toggle){
            settoggle(false)
        }
        else{
            settoggle(true)
        }
    }
  return (
    <div>
      <div className='w-[screen] h-7 bg-cyan-400 flex justify-end px-3 space-x-5'>
        <button ><TfiReload /></button>
        <button onClick={handelsetting}><VscSettingsGear /></button>
      </div>
      <div>
        {toggle?<Modal handle={handelsetting}></Modal>:null}
      </div>
    </div>
  )
}
