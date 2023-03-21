import React from 'react'

function Demo() {
    const [name, setname] = useState('Ajay')
    const updataName = () => {
        setname('Ravi')
    }
  return (
    <div>
        <h1>Name 2 {name}</h1>
      
    </div>
  )
}

export default Demo

