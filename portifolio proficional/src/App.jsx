import './App.css';
import Sobre from './sobre';
import Projetos from './projetos';


function App() {

  return (
    <div className='container'>
      <div className="nav">
        <i class='bx bx-home-alt-2' title='Home'></i>
        <i class='bx bxs-user' title='Sobre'></i>
        <i class='bx bx-code-alt' title='Projetos'></i>
        <i class='bx bxs-book-content' title='Curriculo'></i>
        <i class='bx bx-comment' title='Comentarios'></i>
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