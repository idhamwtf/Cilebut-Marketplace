import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailStore from './pages/detailStore'
import Login from './pages/login'
import ProductCategory from './pages/productCategory';
import Cart from './pages/cartuser'


function App() {
  return (
    <div className='Appjs'>
      <Header />
      <Switch>
        <Route path={'/'} exact component={Homepage} />
        <Route path={'/detailstore'} exact component={DetailStore} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/productcategory'} exact component={ProductCategory} />
        <Route path={'/cart'} exact component={Cart} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
