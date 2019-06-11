import React from 'react';
//Components
import Login from './Login/Login';
// import Registro from './Registro/Registro';
import List from './List/List';
import Header from './Header/Header';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

//CSS
import './App.css';

function App() {
  // const items = [
  //   { id: '1', name: 'Name 1', description: 'Description 1', value: 2 },
  //   { id: '2', name: 'Name 2', description: 'Description 2', value: 1 },
  //   { id: '3', name: 'Name 3', description: 'Description 3', value: 0 },
  //   { id: '4', name: 'Name 4', description: 'Description 4', value: 5 },
  // ];
  //BrowserRouter is Higer Order Component
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={Login} />
      {/* <Route path="/list" component={() => <List items={items} />} /> */}
      <Route path="/list" component={List}/>

    </BrowserRouter>
  );
}

export default App;
