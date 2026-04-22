import React from 'react';

export default function StatefulFunctionDemo() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="demo-box">
      <div className="counter">
        <p>Valor: <strong>{count}</strong></p>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
      </div>
      <p>Estado com função usando <code>React.useState</code>.</p>
    </div>
  );
}
