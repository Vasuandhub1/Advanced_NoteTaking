import {createSlice, current} from "@reduxjs/toolkit"


export const editorSlice=  createSlice({
    name:"notes",
    initialState:[{
        title:"vasu",
        text:"singh"
    }],

    reducers:{
        
        addNotes:(state,action)=>{
            console.log(action.payload)
            state.push(action.payload)
            
        },
        updateNotes:(state,action)=>{
            state.forEach((elem,index)=>{
                if(index===action.payload.index){
                    elem.text=action.payload.text
                }
            })
            console.log(state)
        },
        addTofavourite:(state,action)=>{
            console.log(action.payload)
            state.forEach((elem,index)=>{
                
                if(index==action.payload){
                    elem.category  = "Favourite"
                }
            })
            console.log("state",state)
        },

        addToTrash:(state,action)=>{
            state.map((elem,index)=>{
                if(index==action.payload){
                    elem.category  = "Trash"
                }
            })
        },
        addToCustom:(state,action)=>{
            state.map((elem,index)=>{
                if(index==action.payload.index){
                    elem.category  = action.payload.category
                }
            })
            console.log(state)
        },
        removefromTrash:(state,action)=>{
            state.map((elem,index)=>{
                if(index==action.payload){
                    elem.category="Allcategory"
                }
            })
        },
        permanentdelete:(state,action)=>{
            console.log("delete",current(state))
            state=state.splice(action.payload,1)
        }

    }

})

export const {addNotes, addTofavourite,updateNotes, addToTrash, addToCustom,removefromTrash,permanentdelete}=editorSlice.actions
export default editorSlice.reducer