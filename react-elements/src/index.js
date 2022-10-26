import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('root');

const h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log(h1);

const reactRoot = ReactDOM.createRoot(container);

reactRoot.render(h1);
