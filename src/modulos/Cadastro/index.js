import { Component } from 'react';
import firebase from '../../Firebase';

class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      senha:""

    }
    this.gravar = this.gravar.bind(this)
  }
  
   async gravar(){
    debugger
    await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .then((retorno) => {
      firebase.firestore().collection("usuario1").doc(retorno.user.uid).set({
        nome: this.state.nome,
        sobrenome: this.state.sobrenome,
        dataNascimento: this.dataNascimento
      })
    });
    // await firebase.firestore().collection("usuario1").add({
    //   nome: this.state.nome,
    //   email:this.state.email,
    //   sobrenome:this.state.sobrenome,
    //   dataNascimento:this.state.dataNascimento,
    //   senha:this.state.senha
    // })
  }
  render(){
    return (
     
          <form >
             <h1>Cadastro</h1>
            <label>Email:</label>
            <input type="email" onChange={(e) => this.setState({email:e.target.value})} /><br />
            <label>Senha:</label>
            <input type="password" onChange={(e) => this.setState({senha:e.target.value})} /><br />
            <label>Nome:</label>
            <input type="text"  onChange={(e) => this.setState({nome:e.target.value})} /><br />
            <label>Sobrenome:</label>
            <input type="text"  onChange={(e) => this.setState({sobrenome:e.target.value})} /><br />
            <label>Data de nascimento:</label>
            <input type="date"  onChange={(e) => this.setState({dataNascimento:e.target.value})} /><br />
            <button onClick={this.gravar}>Cadastrar</button>
          </form>
        );
  }

};
export default Cadastro;


