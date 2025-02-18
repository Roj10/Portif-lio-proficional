import './App.css';
import Sobre from './sobre';
import Projetos from './projetos';


function App() {

  return (
    <div className='container'>
      <div className="nav">
        <h1>nav</h1>
        <i class='bx bx-home-alt-2'></i>
        <i class='bx bxs-user'></i>
        <i class='bx bx-code-alt' ></i>
        <i class='bx bxs-book-content' ></i>
        <i class='bx bx-comment' ></i>
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