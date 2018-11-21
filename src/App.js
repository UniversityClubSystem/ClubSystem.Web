import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import Home from 'components/Home/Home';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  </React.Fragment>
);

export default App;
