import React, { useState } from 'react'

function Demo() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    function(){
        setLoading(false)
    }
    catch(){
        setLoading(true)
    }
    if(loading){
        return <h1>Loading</h1>
    }
  return (
    <div>Demo</div>
  )
}

export default Demo