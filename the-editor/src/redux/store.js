import {configureStore}from "@reduxjs/toolkit"
import editorslice, { addNotes } from "./slices/editorslice"
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore } from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"
import  editcategory  from "./slices/editcategory";
import {thunk} from "redux-thunk"


 const persistConfig={
    key:"root",
    storage
 }
 const combine=combineReducers({
    notes:editorslice,
    category:editcategory
 })
 const persistedReducer=persistReducer(persistConfig,combine)

export  const  store= configureStore({
    reducer:persistedReducer
})

export const persistor=persistStore(store)

