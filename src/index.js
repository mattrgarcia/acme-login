const root = document.querySelector('#root')
import { render } from 'react-dom';
import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from "redux-thunk";
import axios from "axios"


class App extends Component{
  render(){
    return (
      <form onSubmit={ev => ev.preventDefault()}>
        Username: <input name='username'  />
        Password: <input name='password'  />
        <button>Login</button>
      </form>
    )
  }
}


render(<App />, root)
