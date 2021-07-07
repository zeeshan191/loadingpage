import React,{useState, useEffect} from 'react';
import './App.css';
import Login from './Login';
import './Login.css';
import ScaleLoader
from "react-spinners/ScaleLoader";
function App() {
  const [loading, setLoading] = useState(false);
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 8000);
}, [])



  return (
    <div className="App">
{

  loading ?

  <ScaleLoader
    loading={loading}
       size={250} />
  :
  <Login/>
}



  
   
    </div>
  );
}

export default App;
