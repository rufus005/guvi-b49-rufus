import { Children, useContext, useEffect, useState } from 'react'
import { context } from './Store'


const App = () => {
  

  // const [MyName, setMyName] = useContext(context)

  // const api =async ()=> {
  //   await fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // }

  // useEffect(()=>{
  //   api()
  //   // console.log('i am working')
  // },[MyName])

  return (
    <>
    {/* <div>{MyName}</div> */}
    <button onClick={ () => { setMyName('zen class') } }>Click ME 1</button>
    <button onClick={ () => { setMyName('Rufus') } }>Click ME 2</button>

 {/* <br/> */}
 <Child/>
    </>
  )
}

export default App

