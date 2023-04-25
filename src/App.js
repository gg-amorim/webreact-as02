import './App.css';
import Rotas from './rotas';
import Cadastro from './modulos/Cadastro';
import Login from './modulos/Login';
import Principal from './modulos/Principal'

function App() {
  return (
   <Rotas/>,
   <Login />,
   <Cadastro />,
   <Principal />
  );
}

export default App;
