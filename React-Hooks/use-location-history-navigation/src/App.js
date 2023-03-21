
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Error from './Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/about' element= {<AboutUs />}/>
          <Route path='/contact' element= {<Contact />}/>
          <Route path='*' element= {<Error />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
