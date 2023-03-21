
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Service from './pages/Service';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/service' element={<Service />}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
