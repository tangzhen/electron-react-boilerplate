import React from 'react';
import { hot } from 'react-hot-loader/root';
import { History } from 'history';
import { Router } from 'react-router';
import Routes from '../Routes';

type Props = {
  history: History;
};

const Root = ({ history }: Props) => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default hot(Root);
