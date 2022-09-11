import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState()
  useEffect(() => {
     fetch('/api')
         .then(response => response.json())
         .then(json => setData(json.message))
  }, [data])
  if (!data) return "Loading..."
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
