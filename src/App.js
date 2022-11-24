import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';


import './App.css';
import * as components from './main/Components'
import { Button } from '@material-ui/core';


export default class App extends React.Component {
  logout = () => {
    localStorage.setItem("isAuth", "false");
    localStorage.setItem('token', '')
  }

  render() {
    // localStorage.setItem('isAuth','false')
    let button = localStorage.getItem('isAuth') !== 'true'
    return (
      <div>
        <h1 className='headerStyle' >
          M-Stall
        </h1>
        <h3 style={{ textAlign: 'right', paddingRight: '2%' }}>
          {button ? <div></div> : <Button href='/login' variant="contained" onClick={this.logout}>
            Logout
            </Button>}
        </h3>
        <BrowserRouter>
          <Route path='/' exact component={components.LoginForm} />
          <Route path='/login' exact component={components.LoginForm} />

          {localStorage.getItem('isAuth') && (
            <Route path='/dashboard' component={components.Dashboard} />
          )}
        </BrowserRouter>
      </div>
    )
  }
}
