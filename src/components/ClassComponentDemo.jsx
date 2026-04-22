import React from 'react';

class SampleComponent extends React.Component {
  render() {
    return <i>I am so custom</i>;
  }
}

export default function ClassComponentDemo() {
  return (
    <div className="demo-box">
      <h3><SampleComponent /> text</h3>
    </div>
  );
}
