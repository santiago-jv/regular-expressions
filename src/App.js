import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import Result from "./components/Result"
function App() {
  const [textValidated, setTextValidated] = useState(null);
  return (
    <div className="app-container">
      
      <Form setTextValidated={setTextValidated}/>
      <Result textValidated={textValidated}/>
    </div>
  );
}

export default App;
