
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Error from './components/Error';
import SingleMovie from './components/SingleMovie';



function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='movie/:id' element={<SingleMovie />}/>
      <Route path='*' element={<Error />}/>
    </Routes>
    
      
    </>
  );
}

export default App;
