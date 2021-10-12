import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import ErrorPage from './components/404';
import Posts from './components/Posts';

const Base = styled.div``;

const App = () => (
  <Base>
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  </Base>
);

export default App;
