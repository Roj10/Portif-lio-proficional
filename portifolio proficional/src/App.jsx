import './App.css';
import Sobre from './sobre';
import Projetos from './projetos';

function App() {

  return (
    <div className='container'>
      <div className="nav">
        <h1>nav</h1>
      </div>
      <div className="box">
        <Sobre />
        <Projetos />
      </div>
      <div className="sidebar">
        <h1>sidebar</h1>
      </div>
    </div>
  );
}

export default App;