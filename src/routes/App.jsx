import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
// components
import { Home, Detail, NotFound } from '../containers/index';

// styles
import '../styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
