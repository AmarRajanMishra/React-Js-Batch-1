
import './App.css';
import MyNewState from './context/MyNewState';
// import CompA from './components/CompA';

// import MyState from './context/MyState';
import ParentComp from './propsdrilling/ParentComp';



function App() {
  return (
    <MyNewState>
        <ParentComp />
    </MyNewState>
    
    
    
    // <MyState>
    //   <div className="App">
    //     <CompA />
      
    // </div>

    // </MyState>
    
  );
}

export default App;
