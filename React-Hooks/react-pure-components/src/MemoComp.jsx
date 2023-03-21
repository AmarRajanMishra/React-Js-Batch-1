import React, { memo } from 'react'

function MemoComp(props) {
    console.log('memo function called')
  return (
    <div>MemoComp <h1>{props.name}</h1></div>
  )
}

export default memo(MemoComp)