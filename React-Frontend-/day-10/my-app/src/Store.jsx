import React, { Children, createContext, useState } from 'react'

export const context =createContext()

const Store = ({Children}) => {

    const [MyName,setMyName] = useState('Guvi')

  return (
    
    <context.Provider value={{MyName,setMyName}}>
        {Children}
    </context.Provider>
    )
}

export default Store