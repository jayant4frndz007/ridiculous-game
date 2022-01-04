import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    fetch('/score').then((res)=>res.json()).then((data)=>console.log(data));
    
  }, [])
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
