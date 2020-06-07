import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../layouts/master';
import Home from '../pages/Home';
import Show from '../pages/Show';
import NotFount from '../pages/NotFount';
import '../styles/global.css';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comic/:id" component={Show} />
        <Route component={NotFount} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;