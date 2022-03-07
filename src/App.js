import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Adding the boot strap css 
import './App.css';
import { Page } from './core/constants';
import { Home, ErrorPage, Store } from './components';

class App extends React.Component {

  constructor(props) {
    super(props); // Need to call super class constructor first before anything else
    this.state = {
      currentPage: Page.HOME, // Initially We're at the home page
      test: 0,
    };
    // Defining a change current page state function so that the child components can notify the parent component 
    // When a button was clicked and when the page needs to be changed. 
    this.changeCurrentPage = (page) => this.setState({currentPage: page});
  }

  render() {
    return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home changeCurrentPage={this.changeCurrentPage}></Home>}></Route>
          <Route path='/store' element={<Store changeCurrentPage={this.changeCurrentPage}></Store>}></Route>
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