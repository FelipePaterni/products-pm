import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="demo-box">
        <div className="counter">
          <p>Valor: <strong>{this.state.count}</strong></p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Incrementar
          </button>
        </div>
        <p>Estado com classe usando <code>this.state</code> e <code>this.setState()</code>.</p>
      </div>
    );
  }
}

export default Counter;
