import { useState } from 'react';
import './App.css';



 const App=()=> {
  const[counter,setcounter]=useState(0);
  return (
    <div className='App'>
    <button>+</button>
    <h1>{counter}</h1>
    <button>-</button>
    </div>
    
  );
}

export default App;
