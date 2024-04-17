import {createSlice} from "@reduxjs/toolkit"

export const editcategory= createSlice({
    name:"category",
    initialState:[
        "vasu",
        "singh"
    ],
    reducers:{
        addcategory:(state,action)=>{
           console.log(action.payload)
           state.push(action.payload)
        },
        removeCategory:(state,action)=>{
           state.splice(action.payload,1)
        },
        updateCategory:(state,action)=>{
            console.log(action.payload)
            state.forEach((elem,index , arr)=>{
                if(index==action.payload.index){
                    arr[index]=action.payload.text
                }
            })
        }
    }

})
export const {addcategory,updateCategory,removeCategory}=editcategory.actions
export default editcategory.reducer