import { useState } from 'react';
import './App.css';
import Sobre from './sobre';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>
      <Sobre />
    </div>
  );
}

export default App;