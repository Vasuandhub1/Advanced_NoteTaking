import React from 'react'
import {useSelector} from "react-redux"
import Card from '../Main_components/card'
import Footer from '../Main_components/footer'

function Trash() {
  const data=useSelector((state)=>state.notes)

  return (
    <div className='h-screen flex-col'>
    <div>
      <h1>Trash</h1>
      {data.map((elem,index)=>{
        if(elem.category=="Trash"){
          return <Card elem={elem} index={index}></Card>
        }
      })}
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Trash
