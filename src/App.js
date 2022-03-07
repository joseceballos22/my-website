import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Adding the boot strap css 
import './App.css';
import { Home, ErrorPage } from './components';
class App extends React.Component {

  constructor() {
    super(); // Need to call super class constructor first before anything else
    this.state = {
      // currentPage: 
    };
  }

  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/store' element={<Home></Home>}></Route>
          <Route path='/about-us' element={<Home></Home>}></Route>
          <Route path='/log-in' element={<Home></Home>}></Route>
          <Route path='/terms-and-conditions' element={<Home></Home>}></Route>
          {/* This last route means if any user goes to a page not defined this error page will pop up */}
          <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
        </Routes>
      </Router>
      </>
    );
  }
}
export default App