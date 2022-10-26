import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return <button>{ props.text }</button>;
}

const divRoot = document.getElementById('root');
const root = ReactDOM.createRoot(divRoot);

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

root.render(element);
