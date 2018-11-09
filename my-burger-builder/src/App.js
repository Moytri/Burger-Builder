import React, { Component } from 'react';
import classes from './App.module.css';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <p>Hello</p>
        </Layout>
      </div>
    );
  }
}

export default App;
