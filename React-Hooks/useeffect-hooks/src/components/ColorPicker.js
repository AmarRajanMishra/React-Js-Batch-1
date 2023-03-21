import React from 'react'

function ColorPicker(props) {
  
  return (
    <div>
      <h1>Color Picker</h1>
      <input type="color" value={props.value} onChange={props.onChange} />
      <input type='text' value={props.value} onChange={props.onChange} />
    </div>
    
  )
}

export default ColorPicker;
/* <ColorPicker onChange={handleInput} value={state}/> */
// const [state, setState] = useState("#ffffff");
//   const handleInput = (e) => {
//     setState(e.target.value);
//   }
