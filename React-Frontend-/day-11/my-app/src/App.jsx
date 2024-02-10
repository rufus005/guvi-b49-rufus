
import React, { useReducer, useState } from 'react'

const App = () => {

  const [count,setCount] = useState(0)

  const initialState = {count : 0}

  const reducer = (state,action) => {

    switch (action.type){
      case 'increament'  :
        return { count : state.count+1}
    }
  }

  const [state,dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>{ setCount(count-1) } } >Decrement</button>
    <button onClick={()=>{ setCount(count+1) } } >Increment</button>
    </>
  )
}

export default App