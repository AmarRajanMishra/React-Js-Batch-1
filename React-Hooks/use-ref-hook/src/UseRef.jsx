import React, { useRef } from 'react'

function UseRef() {
  const initialData = useRef(null)
  const newRef = useRef(null)
  const handleInput = () => {
    console.log(initialData)
    console.log(initialData.current)
    initialData.current.value = 1000
    initialData.current.focus()
    initialData.current.style.color = "green"
    initialData.current.style.backgroundColor = "red"
    console.log(newRef)
    console.log(newRef.current)
    newRef.current.innerHTML = "Hello"
  }
    // let initialRef = useRef(null)
    // const handleInput = () =>{
    //     console.log(initialRef)
    //     console.log(initialRef.current)
    //     console.log("clicked...")
    //     console.warn("Function Testing")
    //     initialRef.current.value = "1000"
    //     initialRef.current.focus();
    //     initialRef.current.style.color = "Red"
    // }
  return (
    <div>
        <h1>UseRef</h1>
        <div>
            <input type="text" 
            // ref={initialRef}
            ref={initialData} 
            />
            <h1 ref={newRef}>Welcome</h1>
            <button 
            onClick={handleInput}
            >Handle Input</button>
            
        </div>
    </div>
  )
}

export default UseRef;

// {
// //  let counter;
// //  let count = 0;
// //  counter.innerHTML = count+1

// }