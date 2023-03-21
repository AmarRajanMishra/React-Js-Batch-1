
import './App.css';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';

function App() {
  return (
    <div className="App">
      <CompA color='red' name='Sachin'/>
      <CompB color='green' name='Ajay'/>
      <CompC color='yellow' name='Prashant'/>
    </div>
  );
}

export default App;
