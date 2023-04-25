import React, { Component } from "react";
import firebase from "../../Firebase";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: ""
    }
    this.acessar = this.acessar.bind(this);
  }

  async acessar() {
    await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(() => {
        window.location.href = "./principal"
      }).catch((e) => { });
  }

  render() {
    return (
      <form >
        <h1>Login</h1>
        <label>Email:</label>
        <input type="email" onChange={(e) => this.setState({ email: e.target.value })} /><br />
        <label>Senha:</label>
        <input type="password" onChange={(e) => this.setState({ senha: e.target.value })} /><br />
        <button onClick={this.acessar}>Acessar</button>
      </form>
      )
  }
}

export default Login;