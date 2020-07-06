import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// <App /> -> Component -> HTML을 반환하는 함수(Jsx, Javascript안에 HTML)
// react app은 하나의 component만 rendering
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

