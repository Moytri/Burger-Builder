import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Orders from './containers/Orders/Orders';


class App extends Component {
  render() {
    return (
      <div>
        <Layout> 
          <Switch>
              <Route path="/" exact component={BurgerBuilder}/>
              <Route path="/orders" component={Orders}/>
              <Route path="/checkout" component={Checkout}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
