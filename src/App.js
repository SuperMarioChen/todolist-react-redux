import React, { Component } from 'react';


import Foot from './components/foot'
import Head from './components/head'
import List from './components/list'



class App extends Component {
  render() {
    return (
      <div>
          <Head></Head>
          <List></List>
          <Foot></Foot>
      </div>
       
        
      
    )
  }
}

export default App;
