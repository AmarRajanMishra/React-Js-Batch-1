import { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import NewTodo from './components/NewTodo';
import UseEffectsOne from './components/UseEffectsOne';

function App() {
  const [state, setState] = useState("#ffffff");
  const handleInput = (e) => {
    setState(e.target.value);
  }
  return (
    <div className="App">
    <UseEffectsOne />
    {/* <ColorPicker  onChange={handleInput} value={state}/> */}
    {/* <NewTodo /> */}
    </div>
  );
}

export default App;
