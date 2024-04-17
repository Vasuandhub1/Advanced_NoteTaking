import { useEffect, useState } from 'react'
import Home from "./component/Main_components/home"
import { useNavigate } from 'react-router-dom'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Allnotes from './component/pages/Allnotes'
import Favourits from './component/pages/Favourits'
import Quicknotes from './component/pages/Quicknotes'
import Trash from './component/pages/trash'
import Addnotes from './component/pages/Addnotes'
import Customnotes from './component/Main_components/customnotes'
import Preview from './component/Main_components/preview'
import Footer from './component/Main_components/footer'

function App() {
  const [count, setCount] = useState(0)
  

 


  return (
    <>
    <BrowserRouter >
    <div className=' flex justify-center'>
      <div className='w-[15rem] '><Home/></div>
      <Routes>
        <Route path="/" element={<Allnotes/>}/>
        <Route path="/favourites" element={<Favourits/>}/>
        <Route path="/quickNotes" element={<Quicknotes/>}/>
        <Route path="/Trash" element={<Trash/>}/>
        <Route path="/addnotes" element={<Addnotes/>}/>
        <Route path="/custom/:category" element={<Customnotes/>}/>
      </Routes>
      </div>
     
    </BrowserRouter>
    </>
  )
}

export default App
