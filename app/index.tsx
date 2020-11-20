import React from 'react';
import { render } from 'react-dom';
import { createHashHistory } from 'history';
import './app.global.css';

const history = createHashHistory();

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line global-require
  const Root = require('./containers/Root').default;
  render(<Root history={history} />, document.getElementById('root'));
});
