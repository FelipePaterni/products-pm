import React from 'react';

class SampleComponent extends React.Component {
  render() {
    const name = this.props ? this.props.name : 'undefined';
    return <i>{name}</i>;
  }
}

export default function PropsClassDemo() {
  return (
    <div className="demo-box">
      <h3><SampleComponent name="SampleComponent Properties Test" /> text</h3>
      <p>Em componentes de classe, usa-se <code>this.props</code>.</p>
    </div>
  );
}
