import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage'
import Header from './components/Header'
import DetailStore from './pages/detailStore'
import Login from './pages/login'


function App() {
  return (
    <div className='Appjs'>
      <Header />
      {/* <div style={{color:'black', fontSize:'42'}}>asd</div> */}
      <Switch>
        <Route path={'/'} exact component={Homepage} />
        <Route path={'/detailstore'} exact component={DetailStore} />
        <Route path={'/login'} exact component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
