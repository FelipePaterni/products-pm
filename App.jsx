import FunctionCreateElementDemo from './components/FunctionCreateElementDemo.jsx';
import FunctionJsxDemo from './components/FunctionJsxDemo.jsx';
import ClassComponentDemo from './components/ClassComponentDemo.jsx';
import PropsFunctionDemo from './components/PropsFunctionDemo.jsx';
import PropsClassDemo from './components/PropsClassDemo.jsx';
import DefaultPropsDemo from './components/DefaultPropsDemo.jsx';
import StatelessDemo from './components/StatelessDemo.jsx';
import StatefulFunctionDemo from './components/StatefulFunctionDemo.jsx';
import StatefulClassDemo from './components/StatefulClassDemo.jsx';
import Increment from './components/Increment.jsx';
import React from 'react';

export default function App() {
  const [v1, setV1] = React.useState(1);

  const onClick = (value) => {
    setV1(value);
  };

  const demos = [
    ['01 - Componente funcional com React.createElement', 'Exemplo baseado em 01-function-createElement.js.', <FunctionCreateElementDemo />],
    ['02 - Componente funcional com JSX', 'Exemplo baseado em 02-function-jsx.jsx.', <FunctionJsxDemo />],
    ['03 - Componente definido com classe', 'Exemplo baseado em 03-class-component.jsx.', <ClassComponentDemo />],
    ['04 - Props em componente funcional', 'Exemplo baseado em 04-props-function.jsx.', <PropsFunctionDemo />],
    ['05 - Props em componente de classe', 'Exemplo baseado em 05-props-class.jsx.', <PropsClassDemo />],
    ['06 - defaultProps', 'Exemplo baseado em 06-defaultProps.jsx.', <DefaultPropsDemo />],
    ['07 - Componente stateless', 'Exemplo baseado em 07-stateless.jsx.', <StatelessDemo />],
    ['08 - Componente stateful com função', 'Exemplo baseado em 08-stateful-function.jsx.', <StatefulFunctionDemo />],
    ['09 - Componente stateful com classe', 'Exemplo baseado em 09-stateful-class.jsx.', <StatefulClassDemo />],
    ['10 - Increment', '', <Increment _onclick={onClick} />]
  ];

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">React JS + Node.js</p>
        <h1>Componentes React JS: funções, classes, props e state</h1>
        <p className="lead">
          Aplicação didática construída para apresentar, em uma única interface,
          os exemplos de componentes funcionais e de classe.
        </p>
        <p>Version: {v1}</p>
      </header>

      <main className="grid">
        {demos.map(([title, description, component]) => (
          <section key={title} className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="preview">{component}</div>
          </section>
        ))}
      </main>
    </div>
  );
}