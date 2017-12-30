import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Movies from './containers/Movies/Movies';
import Layout from './hoc/Layout/Layout';
import Auxiliary from './hoc/Auxiliary';
import Genre from './containers/Genre/Genre';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Layout>
          <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/genre/:genre' exact component={Genre} />
             <Route path='/:id' component={Movies} />      
          </Switch>
        </Layout>
      </Auxiliary>
    );
  }
}

export default App;
