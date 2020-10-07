import React from 'react';
import AppNavbar from './components/AppNavbar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModal';
import Footer from './components/Footer';


import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    < Provider store={store} >
      <AppNavbar />
      <ItemModal />
      <TodoList />
      <Footer />
    </Provider >
  )
}


export default App;
