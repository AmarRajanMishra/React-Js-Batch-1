import React, {memo} from 'react'

function Child({counterTwo, fun}) {
  
    console.log('Child Component')
  return (
    <div>Child</div>
  )
}

export default memo(Child);