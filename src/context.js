import React,{createContext , useState} from 'react'
export const RoomContext = createContext()

 
export function RoomProvider ({children}){
    const [saved ,setSaved]= useState([])
    const addCart =(obj)=>{
      setSaved((prevState)=>[...prevState,obj])
    }
    const removeFromArray = (objectid)=>{
        setSaved((prevState)=>prevState.filter(product=>{
            return product.id !== objectid
        }))
    }

    return(
        <RoomContext.Provider value={{saved, addCart , removeFromArray}}>
            {children}

        </RoomContext.Provider>
    )
}
export const RoomConsumer = RoomContext.Consumer