import { BrowserRouter, Route } from "react-router-dom";
import Login from './modulos/Login'
import Cadastro from './modulos/Cadastro'
import Principal from './modulos/Principal'


const Rotas = () =>{
  <BrowserRouter>
    <Route exact={true} path="/login" Component={Login}/>
    <Route exact={true} path="/cadastro" Component={Cadastro}/>
    <Route exact={true} path="/principal" Component={Principal}/>
  </BrowserRouter>
}

export default Rotas;