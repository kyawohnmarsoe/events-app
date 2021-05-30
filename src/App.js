import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Enteries from './components/Enteries';

export default function Album() {
  
  return (
    <>
      <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/enteries" exact component={Enteries}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
      </Provider>
    </>
  );
}