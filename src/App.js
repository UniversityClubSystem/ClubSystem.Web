import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './components/NewStructure/Layout/Layout';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.Fragment>
);

export default App;
