import { useState } from 'react';
import './App.css';
import Form from "./components/Form"
import Header from './components/Header';
import Result from "./components/Result"
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [coincidences, setCoincidences] = useState(null);
  return (
    <div className="app-container">
      <Header/>
      <Form setCoincidences={setCoincidences}/>
      <Result coincidences={coincidences}/>
    </div>
  );
}

export default App;
