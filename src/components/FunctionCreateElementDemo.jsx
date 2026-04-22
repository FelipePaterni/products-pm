import React from 'react';

const MyComponent = function () {
  return React.createElement('span', null, 'I am so custom');
};

export default function FunctionCreateElementDemo() {
  return React.createElement(
    'div',
    { className: 'demo-box' },
    React.createElement('h3', null, React.createElement(MyComponent, null), ' text')
  );
}
