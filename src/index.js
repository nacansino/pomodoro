import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import Containers from './containers/index';
import registerServiceWorker from './registerServiceWorker';

import 'typeface-roboto'

ReactDOM.render(
  <Containers />,
  document.getElementById('root')
);
registerServiceWorker();
