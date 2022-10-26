import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton() {
  return <button>Click me!</button>;
}

const divRoot = document.getElementById('root');

const root = ReactDOM.createRoot(divRoot);

root.render(<CustomButton />);
