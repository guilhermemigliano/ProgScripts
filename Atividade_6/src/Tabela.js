import React from 'react';

export default class Tabela extends React.Component{
  render(){
    const r = this.props.array.sort().map(nome => <li>{nome}</li>)
    return (
      <div>
        <ol>{r}</ol>
      </div>
    );
  }
}
