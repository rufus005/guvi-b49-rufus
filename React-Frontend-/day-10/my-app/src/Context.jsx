import React, { Children, createContext, useState } from 'react'

export const myContext = createContext()

const Context = ({chldren}) => {

    const [MyName,setMyName] = useState('Guvi')

  return (
    <myContext.Provider value={{MyName, setMyName}} >
        {Children}
    </myContext.Provider>
  )
}

export default Context