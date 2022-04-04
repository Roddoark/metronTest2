import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './app';

const title = 'React Test metron';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);
