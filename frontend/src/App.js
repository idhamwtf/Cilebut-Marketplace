import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      {/* <div style={{color:'black', fontSize:'42'}}>asd</div> */}
      <Switch>
        <Route path={'/'} exact component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
