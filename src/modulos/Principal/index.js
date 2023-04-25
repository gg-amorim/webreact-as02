import { Component } from "react";
import firebase from "../../Firebase";


class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome: "",
      dataNascimento: ""
    }
  }

  async componentDidMount() {
    debugger
    await firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        var uid = user.uid;
        await firebase.firestore().collection("usuario1").doc(uid).get()
          .then((retorno) => {
            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              dataNascimento: retorno.data().dataNascimento
            })

          });
      }
    })
  }
  render() {
    return (

      <div>
        Nome: {this.state.nome}<br />
        Sobrenome: {this.state.sobrenome}<br />
        Data de nascimento: {this.state.dataNascimento}<br />
      </div>
    );
  }

};
export default Principal;