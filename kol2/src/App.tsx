import { useState } from 'react';
import './App.css';
import Home from './components/home';

function App() {

  const [state, setState] = useState(initialState);
  return (
   <>
   <Home></Home>
   </>
  );
}

export default App;
