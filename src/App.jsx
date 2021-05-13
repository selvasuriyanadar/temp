import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>Hello World!</div>
);

ReactDOM.render(element, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
