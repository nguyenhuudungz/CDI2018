import React from 'react';
import { Router, Route } from 'react-router';
import { home, award } from './routes';
import Anchor1 from '../components/Anchor1';
import Anchor4 from '../components/Anchor4';

export default (
  <Router>
    <Route path="/" component={home} />
    <Route path="/3" component={award} />
    <Route path="/1" component={Anchor1} />
    <Route path="/4" component={Anchor4}/>
  </Router>
);
