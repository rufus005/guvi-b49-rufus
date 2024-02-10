import React from 'react'
import Child2 from './Child2'


function Child ({name}) {
    return (
      <div>
        {name}
        <Child2 name={name} />
        </div>
    )
  }

export default Child