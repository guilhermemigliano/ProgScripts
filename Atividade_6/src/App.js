import React, { Component } from 'react';
import Form from './Form';
import Tabela from './Tabela';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: []
    };
  }

  incluirNome(value) {
    this.setState({array: [...this.state.array, value]})
  }

  render() {
    return (
      <div>
        <Form
          adicionarNome={(value) => this.incluirNome(value)}
        />
        <Tabela
          array={this.state.array}
        />
      </div>
    )
  }
}

export default App;
