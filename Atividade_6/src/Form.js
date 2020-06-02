import React, { Component } from 'react';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      nome: ''
    };
  }

  limpar = () => {
    this.setState({
      nome: ''
    })
  }

  render() {
    return (
      <div>
        <label>Nome: </label>
        <input
          type="text"
          value={this.state.nome}
          onChange={e => this.setState({ nome: e.target.value })} />
        <button
          disabled={!this.state.nome}
          onClick={() => this.props.adicionarNome(this.state.nome)}
        >
          Salvar
          </button>
        <button
          onClick={() => this.limpar()}
        >
          Limpar
          </button>
      </div>
    );
  }
}
