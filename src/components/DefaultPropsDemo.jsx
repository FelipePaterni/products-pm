import React from 'react';

class SampleComponent extends React.Component {
  render() {
    const name = this.props ? this.props.name : 'undefined';
    return <i>{name}</i>;
  }
}

SampleComponent.defaultProps = {
  name: '__undefined__',
};

export default function DefaultPropsDemo() {
  return (
    <div className="demo-box">
      <h3><SampleComponent /> text</h3>
      <p>Quando nenhuma prop é enviada, o valor padrão é utilizado.</p>
    </div>
  );
}
