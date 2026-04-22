import React from 'react';

export default function Increment({ _onclick }) {
  const [count, setCount] = React.useState(0);

  const onClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (typeof _onclick === 'function') {
      _onclick(newCount);
    }
  };

  return (
    <div className="demo-box">
      <div className="counter">
        <p>Valor: <strong>{count}</strong></p>
        <button onClick={onClick}>Incrementar</button>
      </div>
      <p>Estado com função usando <code>React.useState</code>.</p>
    </div>
  );
}
