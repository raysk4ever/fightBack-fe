import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Side from './components/side/side';

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className='nav'>
					<Nav brandName="Fight Back"/>
        </div>
        <div className='body'>
					<div className="side">
						<Side/>
					</div>
					<div className="body-container">
						<Switch>
							<Route path='/' component={Home}></Route>
						</Switch>
					</div>
        </div>
      </div>
    );

  }
}